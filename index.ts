import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Массив пользователей (username, password)
const users = [
  { username: 'test', password: '1234', name: 'Test User' },
  { username: 'admin', password: 'admin', name: 'Admin User' },
];

app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.json({ success: false, message: 'Invalid credentials' });
  }

  return res.json({ success: true, user: { name: user.name, username: user.username } });
});

app.listen(PORT, () => {
  console.log(`Mock server running at http://localhost:${PORT}`);
});
