import { checkError, client } from './client.js';

export async function getPosts() {
  const response = await client.from('bulletins').select('*');
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

export async function getPostDetail(id) {
  const response = await client.from('bulletins').select('*').match({ id }).single();
  return checkError(response);
}

export async function deletePost(id) {
  const response = await client.from('bulletins').delete().match({ id }).single();
  return checkError(response);
}
