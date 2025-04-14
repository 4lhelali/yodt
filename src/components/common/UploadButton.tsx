"use client";

import { useState } from "react";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import type { UseFormReturn } from "react-hook-form";
import type { z } from "zod";
import type { postSchema } from "schema";

const ImageUploadButton = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof postSchema>>;
}) => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleUploadComplete = (res: { url: string }[]) => {
    const url = res[0]!.url;
    setUploadedImageUrl(url);
    form.setValue("coverImage", url);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={handleUploadComplete}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
      {uploadedImageUrl && (
        <div className="mt-4 overflow-hidden rounded-lg border shadow-md">
          <Image
            src={uploadedImageUrl || "/placeholder.svg"}
            alt="Uploaded image"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploadButton;
