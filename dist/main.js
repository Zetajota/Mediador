import { ServidorChat } from "./ServidorChat/index.js";
import { UsuarioEstandar, Administrador } from "./Colegas/index.js";
// ─────────────────────────────────────────────────────────────
//  PATRON MEDIADOR — Sala de Chat
//
//  Diferencia clave frente al Observer:
//  el ServidorChat no solo distribuye mensajes, sino que
//  toma decisiones activas usando helpers internos:
//    - FiltroDeCensura: intercepta contenido prohibido
//    - GestorDeRoles:   prioriza entrega segun el rol del remitente
//  Ademas mantiene estado de presencia (usuarios silenciados).
//  Ninguno de los usuarios sabe nada de esto.
// ─────────────────────────────────────────────────────────────
console.log("────────────────────────────────────────────────────────");
console.log(" PATRON MEDIADOR — Sala de Chat");
console.log("────────────────────────────────────────────────────────\n");
// 1. Crear el Mediador Concreto
const servidor = new ServidorChat();
// 2. Crear los Colegas Concretos
const juan = new UsuarioEstandar("Juan");
const maria = new UsuarioEstandar("Maria");
const pedro = new UsuarioEstandar("Pedro");
const carlos = new Administrador("Carlos");
// 3. Registrar usuarios — el servidor les inyecta el mediador
console.log("-- Conexiones ------------------------------------------");
servidor.registrarUsuario(juan);
servidor.registrarUsuario(maria);
servidor.registrarUsuario(pedro);
servidor.registrarUsuario(carlos);
// 4. Mensajes normales
console.log("\n-- Mensajes en la sala ---------------------------------");
juan.enviar("Hola a todos.");
console.log();
// 5. Mensaje con contenido prohibido — el filtro actua en el servidor
maria.enviar("Cuidado con el spam en este chat.");
console.log();
// 6. Mensaje del Administrador — llega con prefijo [ADMIN] y primero a otros admins
carlos.enviar("Bienvenidos. Mantengan el orden.");
console.log();
// 7. Accion administrativa: silenciar — pasa por el mediador, no directo a Pedro
console.log("-- Accion administrativa --------------------------------");
carlos.silenciarUsuario(pedro);
console.log();
// 8. Pedro intenta hablar — el servidor bloquea la entrega
pedro.enviar("Esto no deberia llegar a nadie.");
//# sourceMappingURL=main.js.map