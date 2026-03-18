export class FiltroDeCensura {
  private readonly prohibidas: readonly string[] = ["spam", "insulto", "ban"];

  filtrar(mensaje: string): string {
    let resultado = mensaje;
    for (const palabra of this.prohibidas) {
      const regex = new RegExp(palabra, "gi");
      resultado = resultado.replace(regex, "*".repeat(palabra.length));
    }
    return resultado;
  }

  contieneContenidoProhibido(mensaje: string): boolean {
    return this.prohibidas.some((p) => mensaje.toLowerCase().includes(p));
  }
}
