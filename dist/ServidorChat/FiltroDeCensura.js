export class FiltroDeCensura {
    prohibidas = ["spam", "insulto", "ban"];
    filtrar(mensaje) {
        let resultado = mensaje;
        for (const palabra of this.prohibidas) {
            const regex = new RegExp(palabra, "gi");
            resultado = resultado.replace(regex, "*".repeat(palabra.length));
        }
        return resultado;
    }
    contieneContenidoProhibido(mensaje) {
        return this.prohibidas.some((p) => mensaje.toLowerCase().includes(p));
    }
}
//# sourceMappingURL=FiltroDeCensura.js.map