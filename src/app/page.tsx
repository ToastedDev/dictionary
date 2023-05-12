"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <h1 className="text-7xl font-bold text-center">
        <span className="text-orange-600">Toasted</span>Dictionary
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(`/word/${input.current!.value}`);
        }}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <Input ref={input} placeholder="Type in a word..." />
        <Button type="submit" className="font-regular">
          Search!
        </Button>
      </form>
    </div>
  );
}
