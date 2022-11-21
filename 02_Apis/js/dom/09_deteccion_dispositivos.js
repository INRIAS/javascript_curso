const d = document,
    n = navigator,
    ua = n.userAgent;
export default function userDevideInfo(id) {
    // console.log(ua);
    const $id = d.getElementById(id),
        isMobile = {
            android: () => ua.match(/android/i),//Su funcion es detectar la reg Exp dentro dentro de match
            ios: () => ua.match(/iphone|ipad|ipod/i),//i es una badera que permite validar entre mayusculas y minusculas
            windows: () => ua.match(/windows phone/i),
            any: function () {
                return this.android() || this.ios() || this.windows();//no importa el dispositimo movil
            }
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),//Su funcion es detectar la reg Exp dentro dentro de match
            mac: () => ua.match(/mac os/i),//i es una badera que permite validar entre mayusculas y minusculas
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac() || this.windows();//no importa el dispositimo movil u version
            }
        },
        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return (
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera() ||
                    this.ie() ||
                    this.edge()
                );
            }
        };

        $id.innerHTML=`
        <ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
        `
        console.log(ua);

        if (isBrowser.chrome()) {
            $id.innerHTML+=`<p><mark>Este Contenido solo de ve en Chrome</mark></p>`
        }
        if (isBrowser.edge()) {
            $id.innerHTML+=`<p><mark>Este Contenido solo de ve en edge</mark></p>`
        }
        if (isBrowser.ie()) {
            $id.innerHTML+=`<p><mark>Este Contenido solo de ve en Internet Explorer</mark></p>`
        }
        if (isDesktop.windows()) {
            $id.innerHTML+=`<p><mark>Descarga el pack para Windows</mark></p>`
        }

        //Redirecciones
        if (isMobile.android()) {
            window.location.href="https://jonmircha.com"
        }
        

}