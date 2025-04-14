"use server";

import { createPostSlug } from "@/lib/createSlug";
import getSession from "@/lib/getSession";
import { db } from "@/server/db";
import { posts } from "@/server/db/schema";
import { redirect } from "next/navigation";
import { postSchema } from "schema";
import { eq } from "drizzle-orm";


export const createPost = async (formData: FormData) => {
  const session = await getSession();
  const user = session?.user;

  if (!session || !user) {
    redirect("/login");
  }

  const postFormData = Object.fromEntries(formData.entries());
  const validatedFormData = postSchema.safeParse(postFormData);

  if (!validatedFormData.success) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }

  const { title, description, coverImage, content } = validatedFormData.data;
  try {
    const slug = await createPostSlug(title);
    const post = {
      ...validatedFormData.data,
      userId: user.id,
      slug,
      image: coverImage,
    };

    await db.insert(posts).values(post);

    return {
      success: true,
      data: {
        title,
        description,
        coverImage,
        content,
      },
    };
  } catch (error) {
    console.log("Error creating post", error);
    return {
      error: {
        title: "An error occurred while creating the post.",
      },
    };
  }
};



export const deletePost = async (postId: string) => {
  try {
    await db.delete(posts).where(eq(posts.id, postId));
    return { success: true };
  } catch (error) {
    console.error("Error deleting post:", error);
    return { success: false, message: "Failed to delete post" };
  }
};






//   const session = await getSession();
//   const user = session?.user;

//   if (!session || !user) {
//     redirect("/login");
//   }

//   try {
//     // Check if the post exists and belongs to the user
//     const post = await db.select().from(posts).where(posts.id.eq(postId)).first();

//     if (!post) {
//       return {
//         success: false,
//         message: "Post not found.",
//       };
//     }

//     if (post.userId !== user.id) {
//       return {
//         success: false,
//         message: "You are not authorized to delete this post.",
//       };
//     }

//     // Delete the post
//     await db.delete(posts).where(posts.id.eq(postId));

//     return {
//       success: true,
//       message: "Post deleted successfully.",
//     };
//   } catch (error) {
//     console.log("Error deleting post", error);
//     return {
//       error: {
//         title: "An error occurred while deleting the post.",
//       },
//     };
//   }
// };