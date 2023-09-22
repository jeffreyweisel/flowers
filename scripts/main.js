import { FlowerOptions } from "./FlowerOptions.js"
import { RetailerOptions } from "./RetailerOptions.js"

const render = async () => {

    const flowersHTML = await FlowerOptions()
    const retailerHTML = await RetailerOptions()
    
    const composedHTML = `
    
    <h1>Are You Feeling Bouquet?</h1>

    <article class="flowers">
        <section class="choices">
        <h2>Flowers</h2>
        ${flowersHTML}
        </section>
    
        <section class="choices">
        <h2>Retailers</h2>
        ${retailerHTML}
        </section>
    </article>
    
    `

container.innerHTML = composedHTML
}

render()