import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/server/db";
import { posts } from "@/server/db/schema";
import { Edit, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import DeleteButton from "@/components/ui/deleteButtonFPost";

const PostsPage = async () => {
  const allPosts = await db.select().from(posts);

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="mb-6 text-3xl font-bold">Posts</h1>
        <Button className="flex items-center" asChild>
          <Link href="/dashboard/posts/create">
            <Plus className="mr-2 h-4 w-4" />
            <span>Create Post</span>
          </Link>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px] cursor-pointer">Title</TableHead>
              <TableHead className="w-[100px] cursor-pointer">Date</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>
                  {new Date(post.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {post.category}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <DeleteButton postId={post.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PostsPage;
