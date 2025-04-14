"use client";

import { createPost } from "@/actions/posts";
import TextEditor from "@/components/common/TextEditor";
import ImageUploadButton from "@/components/common/UploadButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postSchema } from "schema";
import type * as z from "zod";

const CreatePostPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      description: "",
      coverImage: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof postSchema>) {
    try {
      setIsPending(true);

      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

      const result = await createPost(formData);

      if (!result.success) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: result.message,
        });
        return;
      }

      form.reset();
      router.push("/dashboard/posts");
      router.refresh();
    } catch (error) {
      console.log("Error creating post", error);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Create New Post</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter post title" {...field} />
                </FormControl>
                <FormDescription>
                  This will be the main title of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter a brief description of your post"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  A short summary of your post. This is optional but
                  recommended.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="coverImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cover Image URL (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter cover image URL" {...field} />
                </FormControl>
                <FormDescription>
                  Provide a URL for the cover image of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <ImageUploadButton form={form} />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <TextEditor content={field.value} onChange={field.onChange} />
                </FormControl>
                <FormDescription>
                  The main content of your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} type="submit">
            {isPending ? (
              <div className="flex items-center gap-2">
                <Loader2 className="mr-2 animate-spin" size={16} />
                Creating post...
              </div>
            ) : (
              "Create post"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreatePostPage;
