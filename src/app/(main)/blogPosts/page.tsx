import { db } from "@/server/db";
import { posts } from "@/server/db/schema";
import { desc } from "drizzle-orm";
import PostCard from "@/components/common/PostCard";

const BlogPage = async () => {

  const recentPosts = await db
    .select()
    .from(posts)
    .orderBy(desc(posts.createdAt))
    

    return(
      <section className="mx-auto max-w-7xl py-12">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold text-primary font-serif ">Popular Posts</h2>
        <div className="mx-auto h-1 w-24 bg-secondary"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
    )
}

export default BlogPage;