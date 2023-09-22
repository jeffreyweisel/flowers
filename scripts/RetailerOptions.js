import { Distributors } from "./DistributorOptions.js"
import { FlowersInNurseries, nurseries } from "./NurseryFlowers.js"

export const Retailers = async () => {
    const response = await fetch("http://localhost:8088/retailers")
    const retailerList = await response.json()

    return retailerList
}


export const RetailerOptions = async () => {
    const response = await fetch("http://localhost:8088/retailers?_expand=distributor")
    const retailers = await response.json()
    const distributors = await Distributors()
    // const allNurceries = await nurseries()
    const nurseryFlowers = await FlowersInNurseries()

    let retailerHTML = ""
    
    const arrayOfRetailers = retailers.map((retailer) => {
        //Find all distributor relationships for current retailer
        const relationships = distributors.filter((distrib) => retailer.distributorId === distrib.id)
        //Finf the related distributor for each relationship with retailers
        const assignments = relationships.map((rel) => distributors.find((ret) => ret.id === rel.id))

        

        return `<div>
        <h3>${retailer.name}</h3> 
        <div>Distributors:${assignments.map((distributor) => distributor.name).join(" & ")}</div>
        
        </div>`
    })
    retailerHTML += arrayOfRetailers.join("")
    return retailerHTML
}