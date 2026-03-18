import { Administrador } from "../Colegas/index.js";
import type { Usuario } from "../Mediador/MediadorChat.js";

// Responsabilidad unica: determinar privilegios y formato segun el rol del usuario.
// Evita que ServidorChat mezcle logica de negocio con logica de comunicacion.
export class GestorDeRoles {
  esAdministrador(usuario: Usuario): boolean {
    return usuario instanceof Administrador;
  }

  // Prefijo que se antepone al nombre del remitente al mostrar el mensaje
  prefijoDe(usuario: Usuario): string {
    return this.esAdministrador(usuario) ? "[ADMIN] " : "";
  }

  // Los administradores tienen mayor prioridad de entrega (se procesan primero)
  prioridad(usuario: Usuario): number {
    return this.esAdministrador(usuario) ? 1 : 0;
  }
}
