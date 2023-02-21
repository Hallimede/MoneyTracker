import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
    newRecord: (data: IRecordItem) => void;
}

interface ClientToServerEvents {
    hello: () => void;
}

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();