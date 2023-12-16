class PokeCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open"})
    shadow.appendChild(this.build())
    shadow.appendChild(this.style())

  }

  build() {
    const rootTemplate = document.createElement('div')
    rootTemplate.setAttribute("class", "poke-card")

    const img = document.createElement('img')
    img.src = this.getAttribute('poke-image')
    img.alt = `${this.getAttribute('pokename')} image`
    const pokeData = document.createElement('div')
    pokeData.setAttribute('class', 'poke-data')

    const pokename = document.createElement('h3')
    pokename.textContent = this.getAttribute('pokename')

    const poketype = document.createElement('span')
    poketype.textContent = `type: ${this.getAttribute ('type')}`

    const pokeheight = document.createElement('span')
    pokeheight.textContent = `height: ${this.getAttribute('height')}`

    const pokeweight = document.createElement('span')
    pokeweight.textContent = `weight: ${this.getAttribute('weight')}`

    pokeData.appendChild(pokename)
    pokeData.appendChild(poketype)
    pokeData.appendChild(pokeheight)
    pokeData.appendChild(pokeweight)

    rootTemplate.appendChild(img)
    rootTemplate.appendChild(pokeData)

    return rootTemplate
  }

  style() {
    const style = document.createElement('style')
    style.textContent = `
    .poke-card {
      display: flex;
      flex-direction: row;
      width: 250px;
      height: 150px;
      background-color: transparent;
  }
  
  .poke-card > img {
      position: relative;
      max-width: 100px;
      background-color: transparent;
      align-self: flex-end;
      margin-right: -40px;
      z-index: 10;
  }
  
  .poke-data {
      position: relative;
      width: 100%;
      color: #000000;
      display: flex;
      background-color: #ffffff;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 10px;
      box-shadow: -2px 3px 10px -5px rgba(0,0,0,0.75);
  }
    `

    return style
  }

}

customElements.define("poke-card", PokeCard)