import type { MediadorChat, Usuario } from "../Mediador/MediadorChat.js";
import { FiltroDeCensura } from "./FiltroDeCensura.js";
import { GestorDeRoles } from "./GestorDeRoles.js";

// Mediador concreto
export class ServidorChat implements MediadorChat {
  private readonly usuarios: Usuario[] = [];
  private readonly silenciados: Set<string> = new Set();
  private readonly filtro = new FiltroDeCensura();
  private readonly gestor = new GestorDeRoles();

  registrarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
    usuario.setMediador(this);
    console.log(`  [Servidor] "${usuario.nombre}" se ha conectado.`);
  }

  notificar(remitente: Usuario, mensaje: string): void {
    // Comando del admin para silenciar un usuario
    if (mensaje.startsWith("CMD:SILENCIAR:")) {
      const objetivo = mensaje.replace("CMD:SILENCIAR:", "");
      this.silenciados.add(objetivo);
      console.log(`  [Servidor] "${objetivo}" ha sido silenciado por ${remitente.nombre}.`);
      return;
    }

    // Si el remitente esta silenciado, se bloquea el envio
    if (this.silenciados.has(remitente.nombre)) {
      console.log(`  [Servidor] Mensaje de "${remitente.nombre}" bloqueado (usuario silenciado).`);
      return;
    }

    // Filtrar contenido prohibido
    const mensajeFiltrado = this.filtro.filtrar(mensaje);
    if (mensajeFiltrado !== mensaje) {
      console.log(`  [Servidor] Mensaje de "${remitente.nombre}" contiene contenido prohibido. Censurado.`);
    }

    // Ordenar destinatarios por rol y entregar
    const destinatarios = this.usuarios
      .filter((u) => u !== remitente)
      .sort((a, b) => this.gestor.prioridad(b) - this.gestor.prioridad(a));

    const prefijo = this.gestor.prefijoDe(remitente);

    for (const u of destinatarios) {
      if (this.silenciados.has(u.nombre)) {
        console.log(`  [Servidor] Entrega bloqueada para "${u.nombre}" (silenciado).`);
        continue;
      }
      u.recibir(`${prefijo}${remitente.nombre}`, mensajeFiltrado);
    }
  }
}
