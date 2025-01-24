export default async function Post(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return result.json();
}
