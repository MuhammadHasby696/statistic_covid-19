class provinsiData extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="dataprovinsi" class="scrollspy">
            <div class="container">
                <table class="responsive-table striped highlight">
                    <thead>
                        <tr>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>

                    <tbody id="provTable">
                    </tbody>
                </table>
            </div>
        </section>
        `;
    }
}

customElements.define('provinsi-data', provinsiData);