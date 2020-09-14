class indoData extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="indo" class="scrollspy">
            <div class="containerr">
                <div class="flexcontent">
                    <div class="konten center">
                        <h3>Data Indonesia</h3>
                        <div class="row">
                            <div class="col s12"
                                style="background-image: linear-gradient(to right top, #d32f2f, #dd353f, #e63c50, #ef4360, #f64c70);">
                                <p class="white-text">Total Positif</p>
                                <h3 id="indoinfection" class="white-text"></h3>
                            </div>
                            <div class="col s6"
                                style="background-image: linear-gradient(to right top, #009688, #02a394, #03b0a0, #06bdac, #08cbb9);">
                                <p class="white-text">Total Sembuh</p>
                                <h4 id="indorecovery" class="white-text"></h4>
                            </div>
                            <div class="col s6"
                                style="background-image: linear-gradient(to right top, #673ab7, #6c3cc2, #723fcd, #7741d8, #7d43e3);">
                                <p class="white-text">Total Meninggal</p>
                                <h4 id="indodeath" class="white-text"></h4>
                            </div>
                        </div>
                        <p>Update Data Terakhir : <b id="indolastupdate"></b></p>
                    </div>
                </div>
        </section>
        `;
    }
}

customElements.define('indo-data', indoData);