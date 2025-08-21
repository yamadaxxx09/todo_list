const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build a server with Express' },
  { id: 3, text: 'Connect frontend and backend' },
];

app.get('/', (req, res) => {
  res.send('Todo API is running. Try GET /api/todos');
});

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  console.log('POST /api/todos body =', req.body); 
  const { text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'text is required' });
  }
  const newTodo = { id: Date.now(), text: text.trim() };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});


app.delete('/api/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const before = todos.length;
  todos = todos.filter(t => t.id !== id);
  if (todos.length === before) {
    return res.status(404).json({ error: 'not found' });
  }
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
