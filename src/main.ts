import { ServidorChat } from "./ServidorChat/index.js";
import { UsuarioEstandar, Administrador } from "./Componentes/index.js";

console.log("────────────────────────────────────────────────────────");
console.log(" PATRON MEDIADOR — Sala de Chat");
console.log("────────────────────────────────────────────────────────\n");

const servidor = new ServidorChat();

const juan = new UsuarioEstandar("Juan");
const maria = new UsuarioEstandar("Maria");
const pedro = new UsuarioEstandar("Pedro");
const carlos = new Administrador("Carlos");

console.log("-- Conexiones ------------------------------------------");
servidor.registrarUsuario(juan);
servidor.registrarUsuario(maria);
servidor.registrarUsuario(pedro);
servidor.registrarUsuario(carlos);

console.log("\n-- Mensajes en la sala ---------------------------------");
juan.enviar("Hola a todos.");
console.log();

maria.enviar("Cuidado con el spam en este chat.");
console.log();

carlos.enviar("Bienvenidos. Mantengan el orden.");
console.log();

console.log("-- Accion administrativa --------------------------------");
carlos.silenciarUsuario(pedro);
console.log();

pedro.enviar("Esto no deberia llegar a nadie.");
