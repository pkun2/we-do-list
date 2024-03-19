import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    todos.push(req.body);
    res.status(201).send();
});

app.listen(PORT, () => console.log(`${PORT}번 포트에서 서버 실행중🚀`));