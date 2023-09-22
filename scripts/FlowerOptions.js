export const Flowers = async () => {
    const response = await fetch("http://localhost:8088/flowers")
    const flowerList = await response.json()

    return flowerList
}


export const FlowerOptions = async () => {
    const response = await fetch("http://localhost:8088/flowers")
    const flowers = await response.json()

    let flowerHTML = ""

    const arrayOfFlowers = flowers.map((flower) => {
        return `
        <div><h3>${flower.commonName}</h3></div>`
    }
    )
    flowerHTML += arrayOfFlowers.join("")
    return flowerHTML
}