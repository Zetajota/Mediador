// Interface del Mediador — define el contrato de comunicación central
// No importa de Colegas para evitar dependencia circular;
// Usuario se define en este mismo módulo (Mediador/Usuario.ts)
export interface MediadorChat {
  notificar(remitente: Usuario, mensaje: string): void;
}

// Interface Colega — se coloca aquí porque Usuario depende de MediadorChat,
// no al revés. Así Colegas solo importa de Mediador (una dirección).
export interface Usuario {
  readonly nombre: string;
  setMediador(mediador: MediadorChat): void;
  enviar(mensaje: string): void;
  recibir(remitente: string, mensaje: string): void;
}
