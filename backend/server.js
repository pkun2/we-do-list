import express from 'express';
import cors from 'cors';
import rootRouter from './router/rootRouter.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', rootRouter);


app.listen(PORT, () => console.log(`${PORT}번 포트에서 서버 실행중🚀`));