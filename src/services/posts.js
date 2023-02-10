import { checkError, client } from './client.js';

export async function getPosts() {
  const response = await client.from('bulletins').select('*');
  //   console.log('hello', response.data);
  return checkError(response);
}

export async function createPost(title, description) {
  const response = await client.from('bulletins').insert({ title, description });
  console.log('response', response);
  return checkError(response);
}
