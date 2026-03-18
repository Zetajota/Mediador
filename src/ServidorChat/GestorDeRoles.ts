import { Administrador } from "../Componentes/index.js";
import type { Usuario } from "../Mediador/MediadorChat.js";

export class GestorDeRoles {
  esAdministrador(usuario: Usuario): boolean {
    return usuario instanceof Administrador;
  }

  prefijoDe(usuario: Usuario): string {
    return this.esAdministrador(usuario) ? "[ADMIN] " : "";
  }

  prioridad(usuario: Usuario): number {
    return this.esAdministrador(usuario) ? 1 : 0;
  }
}
