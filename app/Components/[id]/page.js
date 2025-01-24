import Post from "@/lib/post";

export default async function Details({ params }) {
  const { id } = params;
  const post = await Post(id);
  return (
    <div className="w-8/12 mx-auto mt-10">
      <div className="card bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
}
