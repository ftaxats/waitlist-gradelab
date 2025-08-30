"use client";

import { cn } from "@/lib/utils";
import UnicornScene from "unicornstudio-react";
import Image from "next/image";

export const Component = () => {
  return (
    <div className={cn("absolute inset-0 w-full h-full")}>
        <UnicornScene 
        production={true} projectId="ed7SJMvTJEVxfqzypOOQ" width="100%" height="100%" />
        <div className="absolute inset-0 bg-[#8CC83C] mix-blend-color opacity-90"></div>
        
        {/* Gradelab Logo */}
        <div className="absolute top-6 left-6 z-20">
          <Image
            src="/Gradelab-ligh.png"
            alt="Gradelab Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
    </div>
  );
};
