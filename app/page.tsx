import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import { Component as AnimatedBackground } from "@/components/ui/raycast-animated-blue-background";
import { Cover } from "@/components/ui/cover";
import { AnimatedTooltipPreview } from "@/components/ui/animated-tooltip-demo";
import GradelabAnimatedCardsCompact from "@/components/ui/gradelab-animated-cards-compact";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-screen h-80 relative overflow-hidden flex items-center justify-center">
          <AnimatedBackground />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <GradelabAnimatedCardsCompact />
          </div>
        </div>

        <main className="flex flex-col gap-6 mt-8 justify-center px-6 pb-10">
          {/* Headline Section */}
          <div className="text-center">
            <h1 className="font-bold tracking-tight text-zinc-900 text-4xl leading-tight md:text-5xl max-w-2xl mx-auto mb-4">
              Grade Handwritten Exams in Seconds
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto">
              98% accurate, AI-powered, and 10x faster than manual grading.
            </p>
          </div>

          {/* Form Section */}
          <div className="flex justify-center">
            <EmailForm />
          </div>

          {/* Social Proof Section */}
          <div className="text-center mt-6">
            <div className="flex justify-center">
              <AnimatedTooltipPreview />
            </div>
          </div>

          {/* Backed By Section */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm font-medium mb-3">We are backed by</p>
            <div className="flex justify-center">
              <Image
                src="/logocloud.png"
                alt="Backed by Google Cloud, AWS, NVIDIA, Microsoft, and Cloudflare"
                width={600}
                height={60}
                className="max-w-full h-auto grayscale opacity-70"
                priority={false}
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
