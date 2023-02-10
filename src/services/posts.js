import { checkError, client } from './client.js';

export async function getPosts() {
  const response = await client.from('bulletins').select('*');
  //   console.log('hello', response.data);
  return checkError(response);
}

export async function createPost(title, description) {
  const response = await client.from('bulletins').insert({ title, description });
  return checkError(response);
}

export async function updatePost(id, title, description) {
  const response = await client.from('bulletins').update({ title, description }).match({ id });
  return checkError(response);
}
