import type { MediadorChat, Usuario } from "../Mediador/MediadorChat.js";

// Componente concreto 2
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

  // Solo el admin puede silenciar — la accion la ejecuta el servidor
  silenciarUsuario(objetivo: Usuario): void {
    console.log(`  ${this.nombre} solicita al servidor silenciar a "${objetivo.nombre}".`);
    this.mediador.notificar(this, `CMD:SILENCIAR:${objetivo.nombre}`);
  }
}
