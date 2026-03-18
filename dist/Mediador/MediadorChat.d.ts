export interface MediadorChat {
    notificar(remitente: Usuario, mensaje: string): void;
}
export interface Usuario {
    readonly nombre: string;
    setMediador(mediador: MediadorChat): void;
    enviar(mensaje: string): void;
    recibir(remitente: string, mensaje: string): void;
}
//# sourceMappingURL=MediadorChat.d.ts.map