import { checkError, client } from './client.js';

export async function getPosts() {
  const response = await client.from('bulletins').select('*');
  //   console.log('hello', response.data);
  return checkError(response);
}
