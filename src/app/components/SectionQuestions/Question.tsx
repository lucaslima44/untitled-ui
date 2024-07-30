"use client";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
interface QuestionProps {
  title: string;
  response: string;
}
export function Question({ title, response }: QuestionProps) {
  const [open, setOpen] = useState(false);
  function handleOpenQuestion() {
    setOpen(!open);
  }
  return (
    <div className="w-full first:pt-0 last:pb-0 pt-6 pb-8">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={handleOpenQuestion}
      >
        <h3 className="text-gray-900 text-lg/normal font-semibold">{title}</h3>
        {open ? (
          <CircleMinus size={24} className="text-brand-600" />
        ) : (
          <CirclePlus size={24} className="text-brand-600" />
        )}
      </button>
      {open && (
        <p className="mt-2 text-gray-600 leading-normal py-0 xl:pr-12">{response}</p>
      )}
    </div>
  );
}
