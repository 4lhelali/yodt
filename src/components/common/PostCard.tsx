import type React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import type { Post } from "@/server/db/schema";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

const PostCard = (props: Post) => {
  const formattedDate = new Date(props.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={props.image ?? "https://image.alhaymex.com/placeholder"}
          alt={props.title}
          width={500}
          height={300}
          className="h-full w-full object-cover transition-transform hover:scale-105"
          unoptimized
        />
      </div>
      <CardHeader>
        <h3 className="text-lg font-semibold text-primary">{props.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="mr-1 h-4 w-4" />
          {formattedDate}
        </div>
      </CardHeader>
      <CardContent>
        <Badge className="rounded-full bg-secondary text-muted-foreground hover:bg-secondary/90">
          {props.category}
        </Badge>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full" asChild>
          <Link href={`/posts/${props.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
