import type { MediadorChat, Usuario } from "../Mediador/MediadorChat.js";
export declare class Administrador implements Usuario {
    readonly nombre: string;
    private mediador;
    constructor(nombre: string);
    setMediador(mediador: MediadorChat): void;
    enviar(mensaje: string): void;
    recibir(remitente: string, mensaje: string): void;
    silenciarUsuario(objetivo: Usuario): void;
}
//# sourceMappingURL=Administrador.d.ts.map