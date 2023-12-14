class PokeCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open"})

    this.state = {
      url: "",
      pokename:"",
      type: "",
      height: "",
      weight: "",
      cardId: "",
    }
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML = `
      <div class="poke-card" id="${this.state.cardId}">
        <img src="${this.state.url}" alt="${this.state.pokename} card">
        <section class="poke-data">
          <h3>${this.state.pokename}</h3>
          <span>${this.state.type}</span>
          <span>${this.state.height}</span>
          <span>${this.state.weight}</span>
        </section>  
      </div>
    `
  }
}

customElements.define("poke-card", pokeCard)