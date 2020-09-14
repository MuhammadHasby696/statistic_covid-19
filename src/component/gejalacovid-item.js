class gejalacovidItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="gejala" class="scrollspy">
            <div class="containerr">
                <div class="flexcontent">
                    <div class="gambar center">
                        <img src="../asset/gejala.png" class="responsive-img">
                    </div>
                    <div class="konten">
                        <h3>Gejala Covid-19</h3>
                        <p>Gejala awal infeksi virus Corona atau COVID-19 bisa menyerupai gejala flu, yaitu demam, pilek, batuk kering, sakit tenggorokan, dan sakit kepala. Setelah itu, gejala dapat hilang dan sembuh atau malah memberat. Penderita dengan gejala yang berat bisa mengalami demam tinggi, batuk berdahak bahkan berdarah, sesak napas, dan nyeri dada. Gejala-gejala tersebut muncul ketika tubuh bereaksi melawan virus Corona.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('gejalacovid-item', gejalacovidItem);