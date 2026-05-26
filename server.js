/**
 * Phusion Passenger startup file para Hostinger Node.js.
 *
 * Hostinger ejecuta este archivo cuando recibe un request HTTP.
 * Aquí arrancamos Next.js en modo production y delegamos el
 * manejo de requests al handler de Next.
 *
 * Notas:
 * - Passenger inyecta process.env.PORT con el puerto que tiene que
 *   escuchar este proceso. Lo respetamos.
 * - Cuando hagas deploy nuevo, hay que tocar `tmp/restart.txt` para
 *   que Passenger mate el proceso viejo y arranque éste nuevo.
 *   (El auto-deploy de Hostinger ya lo hace; si no, ejecutar:
 *    `touch tmp/restart.txt` en el server.)
 */

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "localhost";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Empleum: error handling request", err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    })
      .once("error", (err) => {
        console.error("Empleum: server error", err);
        process.exit(1);
      })
      .listen(port, () => {
        console.log(`Empleum listo · http://${hostname}:${port}`);
      });
  })
  .catch((err) => {
    console.error("Empleum: failed to prepare Next.js", err);
    process.exit(1);
  });
