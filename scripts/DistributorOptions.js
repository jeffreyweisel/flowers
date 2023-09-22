export const Distributors = async () => {
    const response = await fetch("http://localhost:8088/distributors")
    const distributorList = await response.json() 

    return distributorList
}