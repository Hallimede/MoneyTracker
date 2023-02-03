import express, { Express, Request, Response } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import { summaryRouter } from './routes/summary';
import { recordRouter } from './routes/record';
import { Socket, Server } from 'socket.io';
import { createServer } from 'http'

const app: Express = express();

app.use(express.json());
app.use('/summary', summaryRouter);
app.use('/record', recordRouter);

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World!');
});

const dbUri: string = "mongodb+srv://admin:admin@cluster0.iioeiyf.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions).then(() => {
    console.log("Connected to MongoDB");
}).catch((err: mongoose.Error) => console.log(err));

const server = createServer(app);
export const io = new Server(server);

io.on('connection', (socket: Socket) => {
    console.log('A user connected', socket.id);
    socket.on('disconnect', function () {
        console.log('socket disconnected : ' + socket.id)
    })
});

server.listen(3080, () => {
    console.log('Server listening on port 3080, http://localhost:3080/');
});

