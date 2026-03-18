// Componente concreto 1
export class UsuarioEstandar {
    nombre;
    mediador;
    constructor(nombre) {
        this.nombre = nombre;
    }
    setMediador(mediador) {
        this.mediador = mediador;
    }
    enviar(mensaje) {
        console.log(`  ${this.nombre} -> servidor: "${mensaje}"`);
        this.mediador.notificar(this, mensaje);
    }
    recibir(remitente, mensaje) {
        console.log(`  [${this.nombre}] mensaje de ${remitente}: "${mensaje}"`);
    }
}
//# sourceMappingURL=UsuarioEstandar.js.map