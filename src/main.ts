import { ServidorChat } from "./ServidorChat/index.js";
import { UsuarioEstandar, Administrador } from "./Componentes/index.js";

console.log("────────────────────────────────────────────────────────");
console.log(" PATRON MEDIADOR — Sistema de Coordinación de Comunicaciones en Tiempo Real");
console.log("────────────────────────────────────────────────────────\n");

const servidor = new ServidorChat();

const Sergio = new UsuarioEstandar("Sergio");
const Zeta = new UsuarioEstandar("Zeta");
const DaniP = new UsuarioEstandar("DaniP");
const Yoshua = new Administrador("Yoshua");

console.log("-- Conexiones ------------------------------------------");
servidor.registrarUsuario(Sergio);
servidor.registrarUsuario(Zeta);
servidor.registrarUsuario(DaniP);
servidor.registrarUsuario(Yoshua);

console.log("\n-- Mensajes en la sala ---------------------------------");
Sergio.enviar("Hola a todos.");
console.log();

Zeta.enviar("Cuidado con el spam en este chat.");
console.log();

DaniP.enviar("Bienvenidos. Mantengan el orden.");
console.log();

console.log("-- Accion administrativa --------------------------------");
Yoshua.silenciarUsuario(DaniP);
console.log();

DaniP.enviar("Esto no deberia llegar a nadie.");
