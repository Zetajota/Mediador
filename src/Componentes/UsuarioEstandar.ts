import type { MediadorChat, Usuario } from "../Mediador/MediadorChat.js";

// Componente concreto 1
export class UsuarioEstandar implements Usuario {
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
}
