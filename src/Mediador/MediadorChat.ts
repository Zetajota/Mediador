// Interfaces del patron — viven juntas para evitar dependencia circular
export interface MediadorChat {
  notificar(remitente: Usuario, mensaje: string): void;
}

export interface Usuario {
  readonly nombre: string;
  setMediador(mediador: MediadorChat): void;
  enviar(mensaje: string): void;
  recibir(remitente: string, mensaje: string): void;
}
