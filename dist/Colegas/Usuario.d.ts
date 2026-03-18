import type { MediadorChat } from "../Mediador/MediadorChat.js";
export interface Usuario {
    readonly nombre: string;
    setMediador(mediador: MediadorChat): void;
    enviar(mensaje: string): void;
    recibir(remitente: string, mensaje: string, esAdmin: boolean): void;
}
//# sourceMappingURL=Usuario.d.ts.map