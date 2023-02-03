import { io, Socket } from "socket.io-client";
import type { RecordData } from "../views/Record";

interface ServerToClientEvents {
    newRecord: (data: RecordData) => void;
}

interface ClientToServerEvents {
    hello: () => void;
}

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();