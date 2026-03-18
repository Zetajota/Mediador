import { Administrador } from "../Componentes/index.js";
export class GestorDeRoles {
    esAdministrador(usuario) {
        return usuario instanceof Administrador;
    }
    prefijoDe(usuario) {
        return this.esAdministrador(usuario) ? "[ADMIN] " : "";
    }
    prioridad(usuario) {
        return this.esAdministrador(usuario) ? 1 : 0;
    }
}
//# sourceMappingURL=GestorDeRoles.js.map