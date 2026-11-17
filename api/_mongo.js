import { MongoClient } from 'mongodb';

let collectionPromise;

export function getContactCollection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return Promise.resolve(null);

  if (!collectionPromise) {
    const client = new MongoClient(uri);
    collectionPromise = client.connect()
      .then(() => client.db().collection('contact_messages'))
      .catch((error) => {
        collectionPromise = undefined;
        throw error;
      });
  }

  return collectionPromise;
}
