import { Button } from "@/components/ui/button";
import { db } from "@/server/db";
import { posts, users } from "@/server/db/schema";
import { format } from "date-fns";
import { eq } from "drizzle-orm";
import { Moon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

const postPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const postResult = await db.select().from(posts).where(eq(posts.slug, slug));

  if (postResult.length === 0) {
    notFound();
  }

  const post = postResult[0];
  if (!post) return;

  const author = await db
    .select()
    .from(users)
    .where(eq(users.id, post.userId))
    .then((res) => res[0]);
  if (!author) return;

  // Fetch comments (assuming you have a comments table)
  // const comments = await db.select().from(comments).where(eq(comments.postId, post.id));

  return (
    <div className={`min-h-screen p-8 ${"bg-white text-gray-900"}`}>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex flex-col items-start justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
          <div className="w-full sm:max-w-[calc(100%-70px)]">
            <h1 className="line-clamp-2 text-2xl font-bold sm:text-3xl">
              {post.title}
            </h1>
            <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
              {post.category}
            </p>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
              Published on {format(new Date(post.createdAt), "MMMM d, yyyy")}
            </p>
          </div>
          <div className="flex gap-2">
            {/* <ShareButton
              title={post.title}
              url={`${window.location.origin}/${blogSlug}/${slug}`}
            /> */}
            <Button
              // onClick={toggleDarkMode}
              variant="secondary"
              size="icon"
              className="shrink-0"
              // aria-label={
              //   isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              // }
            >
              {/* {isDarkMode ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
                )} */}
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
        </div>

        {post.image != "https://image.alhaymex.com/placeholder?shape=grid" && (
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={post.image!}
              alt={`${post.title}'s cover image`}
              fill
              className="object-cover object-center transition-transform duration-300 hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <p className="line-clamp-2 text-sm">{post.category}</p>
            </div>
          </div>
        )}
        <div className="[&_a:hover]:text-blue-600 [&_a]:text-blue-500 [&_a]:underline [&_a]:transition-colors [&_a]:duration-200 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_code]:rounded [&_code]:bg-gray-700 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-gray-200 [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:leading-tight [&_h2]:mb-4 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:leading-tight [&_h3]:mb-4 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:leading-tight [&_img]:my-6 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg [&_li]:mb-2 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_p]:leading-relaxed [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-gray-800 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-gray-200 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6">
          <div dangerouslySetInnerHTML={{ __html: post.content ?? "" }} />
        </div>
      </div>
    </div>
  );
};

export default postPage;
