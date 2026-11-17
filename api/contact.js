import { getContactCollection } from './_mongo.js';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const body = request.body || {};
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !message || name.length > 100 || email.length > 254 || message.length > 4000) {
    return response.status(400).json({ error: 'Please provide a name, valid email, and message.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return response.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    const collection = await getContactCollection();
    if (!collection) {
      return response.status(503).json({ error: 'The contact form is not configured yet. Please email Sonu directly.' });
    }

    await collection.insertOne({ name, email, message, createdAt: new Date() });
    return response.status(201).json({ message: 'Thanks for reaching out. Your message has been received.' });
  } catch (error) {
    console.error('Could not save contact message:', error.message);
    return response.status(500).json({ error: 'We could not send your message. Please try again or email Sonu directly.' });
  }
}
