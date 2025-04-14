"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { deleteEvent } from "@/actions/events";

const DeleteButton2 = ({ eventId }: { eventId: string }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={() => {
        startTransition(async () => {
          await deleteEvent(eventId);
        });
      }}
      disabled={isPending}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
};

export default DeleteButton2;
