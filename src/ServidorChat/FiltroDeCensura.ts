// Responsabilidad unica: detectar y censurar contenido prohibido.
// El ServidorChat la delega; los usuarios no saben que existe.
export class FiltroDeCensura {
  private readonly prohibidas: readonly string[] = ["spam", "insulto", "ban"];

  // Reemplaza palabras prohibidas con asteriscos del mismo largo
  filtrar(mensaje: string): string {
    let resultado = mensaje;
    for (const palabra of this.prohibidas) {
      const regex = new RegExp(palabra, "gi");
      resultado = resultado.replace(regex, "*".repeat(palabra.length));
    }
    return resultado;
  }

  // Devuelve true si el mensaje contiene al menos una palabra prohibida
  contieneContenidoProhibido(mensaje: string): boolean {
    return this.prohibidas.some((p) => mensaje.toLowerCase().includes(p));
  }
}
