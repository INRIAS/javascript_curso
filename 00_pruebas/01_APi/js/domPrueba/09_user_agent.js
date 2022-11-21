const d = document,
    n = navigator,
    ua = n.userAgent;

export default function userAgentP(id) {
    const $id = d.getElementById(id),
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphon|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function () {//no se puede arrow function porque el this seria global y no local
                return this.android() || this.ios() || this.windows()
            }
        },

        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac() || this.windows()
            }
        },

        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            firefox: () => ua.match(/firefox/i),
            safari: () => ua.match(/safari/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return (
                    this.chrome() ||
                    this.firefox() ||
                    this.safari() ||
                    this.opera() ||
                    this.ie() ||
                    this.edge()
                )
            }
        };

    $id.innerHTML = `
    <ul>
        <li><b>User Agent:</b> ${ua}</li>
        <li><b>Plataforma:</b> ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
        <li><b>Navegador:</b> ${isBrowser.any()}</li>
    </ul>`;

    if (isMobile.any()) {
        window.location.href="https://youtube.com";
    };
    if (isDesktop.any()) {
        $id.innerHTML+=`<a href="#">Descarga</a> la app para una mejor experiencia`
    }
}