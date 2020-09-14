class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="slider">
                <ul class="slides">
                    <li>
                        <img src="asset/jumbotron.jpg"> <!-- random image -->
                        <section class="row caption left-align">
                        <div class="col s12 m6">
                        <h1 class="jumbotron-text"><a>NEW</a><br>NORMAL</h1>
                            <h6>Tetap produktif dan aman dari covid-19<br> dengan tetap
                                mematuhi protokol <br> kesehatan.
                            </h6>
                        </div>
                        </section>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define('jumbotron-item', Jumbotron);