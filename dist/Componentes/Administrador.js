// Componente concreto 2
export class Administrador {
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
    // Solo el admin puede silenciar — la accion la ejecuta el servidor
    silenciarUsuario(objetivo) {
        console.log(`  ${this.nombre} solicita al servidor silenciar a "${objetivo.nombre}".`);
        this.mediador.notificar(this, `CMD:SILENCIAR:${objetivo.nombre}`);
    }
}
//# sourceMappingURL=Administrador.js.map