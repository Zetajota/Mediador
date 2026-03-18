import type { MediadorChat, Usuario } from "../Mediador/MediadorChat.js";
export declare class ServidorChat implements MediadorChat {
    private readonly usuarios;
    private readonly silenciados;
    private readonly filtro;
    private readonly gestor;
    registrarUsuario(usuario: Usuario): void;
    notificar(remitente: Usuario, mensaje: string): void;
}
//# sourceMappingURL=ServidorChat.d.ts.map