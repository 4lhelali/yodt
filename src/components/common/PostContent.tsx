"use client";

import type { Post } from "@/server/db/schema";
import React from "react";

const PostContent = ({ props }: { props: Post }) => {
  return <div>{props.title}</div>;
};

export default PostContent;
