class globalData extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="global" class="scrollspy">
            <div class=" container">
                <h3 class="center">Data Global Covid-19</h3>
                <div class="row center">
                    <div class="gambar" class="responsive-img">
                        <img src="../asset/global.png" width="430px">
                    </div>
                    <div class="col s12 m4 l4">
                        <p>Total Positif</p>
                        <h3 id="globalinfection" class="red-text text-darken-1"></h3>
                    </div>
                    <div class="col s12 m4 l4">
                        <p>Total Sembuh</p>
                        <h3 id="globalrecovery" class="teal-text text-darken-2"></h3>
                    </div>
                    <div class="col s12 m4 l4">
                        <p>Total Meninggal</p>
                        <h3 id="globaldeath" class="deep-purple-text text-darken-2"></h3>
                    </div>
                </div>
                <p class="center">Update Data Terakhir : <b id="globallastupdate"></b></p>
            </div>
        </section>
        `;
    }
}

customElements.define('global-data', globalData);