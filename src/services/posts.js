import { checkError, client } from './client.js';

export async function getPosts() {
  const response = await client.from('bulletins').select('*');
  //   console.log('hello', response.data);
  return checkError(response);
}

export async function createPost(title, description) {
  const response = await client.from('posts').insert({ title: title, description });
  //check the insert obj
  return checkError(response);
}
