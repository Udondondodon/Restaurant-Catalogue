class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
        <img src="./images/heros/hero-image_2.jpg" alt="Foto Hero">
    </div>`;
  }
}

customElements.define('hero-image', Hero);
