import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = Number(process.env.PORT) || 5000;
const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
let messages;

app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', database: messages ? 'connected' : 'not-configured' });
});

app.post('/api/contact', async (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body.email === 'string' ? req.body.email.trim() : '';
  const message = typeof req.body.message === 'string' ? req.body.message.trim() : '';

  if (!name || !email || !message || name.length > 100 || email.length > 254 || message.length > 4000) {
    return res.status(400).json({ error: 'Please provide a name, valid email, and message.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  if (!messages) return res.status(503).json({ error: 'The contact form is not configured yet. Please email Sonu directly.' });

  try {
    await messages.insertOne({ name, email, message, createdAt: new Date() });
    return res.status(201).json({ message: 'Thanks for reaching out. Your message has been received.' });
  } catch (error) {
    console.error('Could not save contact message:', error.message);
    return res.status(500).json({ error: 'We could not send your message. Please try again or email Sonu directly.' });
  }
});

const mongoUri = process.env.MONGODB_URI;
if (mongoUri) {
  const client = new MongoClient(mongoUri);
  try {
    await client.connect();
    messages = client.db().collection('contact_messages');
    await messages.createIndex({ createdAt: -1 });
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
}

app.listen(port, () => console.log(`Portfolio API listening on http://localhost:${port}`));
