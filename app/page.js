import AllPost from "@/lib/AllPost";
import Link from "next/link";

export default async function Home() {
  const posts = await AllPost();
  console.log(posts);
  return (
    <main className="bg-gray-100">
      <div className="container mx-auto py-10 ">
        <h1 className="text-4xl text-orange-600 font-semibold mb-6">
          My All Post
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link href={`/Components/${post.id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
