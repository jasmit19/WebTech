const http = require('http');
const url = require('url');


const todos = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Clean room" },
  { id: 5, task: "Pay bills" }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathParts = parsedUrl.pathname.split('/').filter(Boolean);

  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Route: /todos
  if (pathParts.length === 1 && pathParts[0] === 'todos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos));
  }

  // Route: /todos/<id>
  else if (pathParts.length === 2 && pathParts[0] === 'todos') {
    const id = parseInt(pathParts[1]);
    const todo = todos.find(t => t.id === id);

    if (todo) {
      res.end(`<h1>Todo #${todo.id}</h1><p>${todo.task}</p>`);
    } else {
      res.writeHead(404);
      res.end(`<h1>Todo not found</h1>`);
    }
  }

  
  else {
    res.writeHead(404);
    res.end(`<h1>404 - Page Not Found</h1>`);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
