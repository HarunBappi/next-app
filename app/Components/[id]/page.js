import Post from "@/lib/post";

export default async function Details({ params }) {
  const { id } = params;
  const post = await Post(id);
  return (
    <div>
      <h2>{post.title}</h2>
    </div>
  );
}
