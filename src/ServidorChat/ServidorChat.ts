import type { MediadorChat, Usuario } from "../Mediador/MediadorChat.js";
import { FiltroDeCensura } from "./FiltroDeCensura.js";
import { GestorDeRoles } from "./GestorDeRoles.js";

// MediadorConcreto: ServidorChat
// No solo retransmite — coordina FiltroDeCensura y GestorDeRoles
// para tomar decisiones que ninguno de los usuarios conoce.
export class ServidorChat implements MediadorChat {
  private readonly usuarios: Usuario[] = [];
  private readonly silenciados: Set<string> = new Set();

  // Helpers internos: el mediador delega responsabilidades especificas
  // para no convertirse en un "God Object".
  private readonly filtro = new FiltroDeCensura();
  private readonly gestor = new GestorDeRoles();

  registrarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
    usuario.setMediador(this);
    console.log(`  [Servidor] "${usuario.nombre}" se ha conectado.`);
  }

  // Punto central de coordinacion — aqui reside la logica del Mediador.
  // Diferencia clave frente al Observer: el servidor no solo distribuye,
  // sino que interpreta, filtra y prioriza segun contexto y roles.
  notificar(remitente: Usuario, mensaje: string): void {
    // Comando administrativo: silenciar un usuario
    if (mensaje.startsWith("CMD:SILENCIAR:")) {
      const objetivo = mensaje.replace("CMD:SILENCIAR:", "");
      this.silenciados.add(objetivo);
      console.log(`  [Servidor] "${objetivo}" ha sido silenciado por ${remitente.nombre}.`);
      return;
    }

    // Decision 0: si el remitente esta silenciado, el servidor bloquea el envio completo
    if (this.silenciados.has(remitente.nombre)) {
      console.log(`  [Servidor] Mensaje de "${remitente.nombre}" bloqueado (usuario silenciado).`);
      return;
    }

    // Decision 1: censura — el contenido se filtra antes de llegar a cualquier usuario
    const mensajeFiltrado = this.filtro.filtrar(mensaje);
    const fueCensurado = mensajeFiltrado !== mensaje;
    if (fueCensurado) {
      console.log(`  [Servidor] Mensaje de "${remitente.nombre}" contiene contenido prohibido. Censurado.`);
    }

    // Decision 2: prioridad de entrega segun rol — los administradores reciben primero
    const destinatarios = this.usuarios
      .filter((u) => u !== remitente)
      .sort((a, b) => this.gestor.prioridad(b) - this.gestor.prioridad(a));

    const prefijo = this.gestor.prefijoDe(remitente);

    // Decision 3: no entregar a usuarios silenciados
    for (const u of destinatarios) {
      if (this.silenciados.has(u.nombre)) {
        console.log(`  [Servidor] Entrega bloqueada para "${u.nombre}" (silenciado).`);
        continue;
      }
      u.recibir(`${prefijo}${remitente.nombre}`, mensajeFiltrado);
    }
  }
}
