import { ServidorChat } from "./ServidorChat/index.js";
import { UsuarioEstandar, Administrador } from "./Componentes/index.js";

console.log("────────────────────────────────────────────────────────");
console.log(" PATRON MEDIADOR — Sistema de Coordinación de Comunicaciones en Tiempo Real");
console.log("────────────────────────────────────────────────────────\n");

const servidor = new ServidorChat();

const Sergio = new UsuarioEstandar("Sergio");
const Zeta = new UsuarioEstandar("Zeta");
const DaniCp = new UsuarioEstandar("DaniCp");
const Yoshua = new Administrador("Yoshua");

console.log("-- Conexiones ------------------------------------------");
servidor.registrarUsuario(Sergio);
servidor.registrarUsuario(Zeta);
servidor.registrarUsuario(DaniCp);
servidor.registrarUsuario(Yoshua);

console.log("\n-- Mensajes en la sala ---------------------------------");
Sergio.enviar("Hola a todos.");
console.log();

Zeta.enviar("Cuidado con el spam en este chat.");
console.log();

DaniCp.enviar("Bienvenidos. Mantengan el orden.");
console.log();

console.log("-- Accion administrativa --------------------------------");
Yoshua.silenciarUsuario(DaniCp);
console.log();

DaniCp.enviar("Esto no deberia llegar a nadie.");
