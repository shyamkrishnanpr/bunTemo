import { Server } from "socket.io";

export const setupSocket = (server: any) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
        },
    });

    io.on("connection", (socket) => {
        console.log("a user connected");
        socket.on("disconnect", () => {
            console.log("user disconnected");
        });
    });

    console.log(`scocket listening on http://localhost:3005...`);

};

