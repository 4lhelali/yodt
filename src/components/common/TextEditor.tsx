"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolbar from "./EditorToolbar";

import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import { type Extensions } from "@tiptap/react";

const TextEditor = ({
  content,
  onChange,
}: {
  content: string;
  onChange: (richText: string) => void;
}) => {
  const extensions = [
    StarterKit as Extensions[number],
    Underline as Extensions[number],
    TextAlign.configure({
      types: ["heading", "paragraph"],
      alignments: ["left", "center", "right", "justify"],
    }) as Extensions[number],
    Image.configure({
      HTMLAttributes: {
        class: "max-w-full h-auto",
      },
    }) as Extensions[number],
    Link.configure({
      openOnClick: false,
    }) as Extensions[number],
    TaskList as Extensions[number],
    TaskItem.configure({
      nested: true,
    }) as Extensions[number],
  ] satisfies Extensions;

  const editor = useEditor({
    extensions,
    content: content,
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div>
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />

      <style jsx global>{`
        .ProseMirror {
          padding: 1rem;
        }
        .ProseMirror h1 {
          font-size: 2em;
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        .ProseMirror h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        .ProseMirror h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        .ProseMirror blockquote {
          border-left: 4px solid #ccc;
          margin-left: 0;
          padding-left: 1em;
          font-style: italic;
        }
        .ProseMirror ul,
        .ProseMirror ol {
          padding-left: 1.5em;
        }
        .ProseMirror ul {
          list-style-type: disc;
        }
        .ProseMirror ol {
          list-style-type: decimal;
        }
        .ProseMirror a {
          color: #3b82f6;
          text-decoration: underline;
        }
        .ProseMirror a:hover {
          color: #2563eb;
        }
        .ProseMirror pre {
          background-color: #1f2937;
          color: #e5e7eb;
          font-family: "Courier New", Courier, monospace;
          padding: 0.75em 1em;
          border-radius: 0.375rem;
          overflow-x: auto;
        }
        .ProseMirror code {
          background-color: #374151;
          color: #e5e7eb;
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }
        .ProseMirror pre code {
          background-color: transparent;
          padding: 0;
          border-radius: 0;
          font-size: 1em;
        }
      `}</style>
    </div>
  );
};

export default TextEditor;
