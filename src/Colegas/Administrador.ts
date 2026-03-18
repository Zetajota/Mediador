import type { MediadorChat, Usuario } from "../Mediador/MediadorChat.js";

// ColegaConcreto2
export class Administrador implements Usuario {
  readonly nombre: string;
  private mediador!: MediadorChat;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  setMediador(mediador: MediadorChat): void {
    this.mediador = mediador;
  }

  enviar(mensaje: string): void {
    console.log(`  ${this.nombre} -> servidor: "${mensaje}"`);
    this.mediador.notificar(this, mensaje);
  }

  recibir(remitente: string, mensaje: string): void {
    console.log(`  [${this.nombre}] mensaje de ${remitente}: "${mensaje}"`);
  }

  // Accion exclusiva del Administrador: pasa por el mediador via comando interno.
  // El Administrador no silencia directamente — lo solicita al servidor.
  silenciarUsuario(objetivo: Usuario): void {
    console.log(`  ${this.nombre} solicita al servidor silenciar a "${objetivo.nombre}".`);
    this.mediador.notificar(this, `CMD:SILENCIAR:${objetivo.nombre}`);
  }
}
