
import connectDB from "./startup/db";
import { setupSocket } from "./startup/socket";
import { routeHandler } from "./routes/routes";


connectDB();

const server = Bun.serve({
  async fetch(req,res) {
    return await routeHandler(req,res);
  },
  port: 3005,
});

setupSocket(server);

console.log(`Listening on http://localhost:${server.port} ...`);
