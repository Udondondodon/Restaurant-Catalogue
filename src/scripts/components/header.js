class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <a href="#mainContent" class="skip-link" tabindex="1">Menuju ke konten</a>
    <div class="header">
      <h1>Restaurant Apps</h1>
    </div>
    <nav id="drawer" class="nav-dekstop">
      <ul>
        <ol><a href="/#" tabindex="3">Home</a></ol>
        <ol><a href="/#/favorite" tabindex="3">Favorite</a></ol>
        <ol><a href="https://github.com/Udondondodon" tabindex="3">About Me</a></ol>
      </ul>
    </nav>
    <button id="menu" tabindex="2">☰</button>
  </header>
    `;
  }
}

customElements.define('header-drawer', Header);
