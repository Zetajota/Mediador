import { Administrador } from "../Colegas/index.js";
// Responsabilidad unica: determinar privilegios y formato segun el rol del usuario.
// Evita que ServidorChat mezcle logica de negocio con logica de comunicacion.
export class GestorDeRoles {
    esAdministrador(usuario) {
        return usuario instanceof Administrador;
    }
    // Prefijo que se antepone al nombre del remitente al mostrar el mensaje
    prefijoDe(usuario) {
        return this.esAdministrador(usuario) ? "[ADMIN] " : "";
    }
    // Los administradores tienen mayor prioridad de entrega (se procesan primero)
    prioridad(usuario) {
        return this.esAdministrador(usuario) ? 1 : 0;
    }
}
//# sourceMappingURL=GestorDeRoles.js.map