class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="navbar-fixed">
        <nav>
        <div class="nav-wrapper">
            <div class="container-navbar">
                <a href="#home" class="brand-logo"><img src="asset/logo.png"></a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#covid">Covid-19</a></li>
                    <li><a href="#gejala">Gejala</a></li>
                    <li><a href="#global">Data Global</a></li>
                    <li><a href="#indo">Data Indonesia</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>

    <ul class="sidenav" id="mobile-demo">
        <a href="#!" class="brand-logo"><img src="asset/logo.png"></a>
        <li><a href="#global">Data Global</a></li>
        <li><a href="#covid">Covid-19</a></li>
        <li><a href="#gejala">Gejala</a></li>
        <li><a href="#indo">Data Indonesia</a></li>
    </ul>
        `;
    }
}

customElements.define('nav-bar', NavBar);