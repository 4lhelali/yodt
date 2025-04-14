"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deletePost } from "@/actions/posts";
import { useTransition } from "react";

const DeleteButton = ({ postId }: { postId: string }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={() => {
        startTransition(async () => {
          await deletePost(postId);
        });
      }}
      disabled={isPending}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

export default DeleteButton;
