import { Client } from 'faundadb';

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY
});