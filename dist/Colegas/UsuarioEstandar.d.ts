import type { MediadorChat, Usuario } from "../Mediador/MediadorChat.js";
export declare class UsuarioEstandar implements Usuario {
    readonly nombre: string;
    private mediador;
    constructor(nombre: string);
    setMediador(mediador: MediadorChat): void;
    enviar(mensaje: string): void;
    recibir(remitente: string, mensaje: string): void;
}
//# sourceMappingURL=UsuarioEstandar.d.ts.map