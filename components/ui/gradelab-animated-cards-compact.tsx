"use client";

import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/animated-card-diagram"
import { Visual2 } from "@/components/ui/animated-card-diagram"
import { useState } from "react";

// Custom Visual2 component for Question Generation with different hover tags
function QuestionGenerationVisual({ mainColor, secondaryColor, gridColor }: {
  mainColor: string;
  secondaryColor: string;
  gridColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  const questionItems = [
    { id: 1, translateX: "100", translateY: "50", text: "Blooms" },
    { id: 2, translateX: "100", translateY: "-50", text: "MCQ" },
    { id: 3, translateX: "125", translateY: "0", text: "Quiz" },
    { id: 4, translateX: "-125", translateY: "0", text: "Syllabus" },
    { id: 5, translateX: "-100", translateY: "50", text: "True/False" },
    { id: 6, translateX: "-100", translateY: "-50", text: "Fill Blanks" },
  ];

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={
          {
            "--color": mainColor,
            "--secondary-color": secondaryColor,
          } as React.CSSProperties
        }
      />
      <div className="relative h-[180px] w-[356px] overflow-hidden rounded-t-lg">
        {/* Reuse the same visual structure but with different items */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[7] flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover/animated-card:opacity-100">
          {questionItems.map((item, index) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute flex items-center justify-center gap-1 rounded-full border border-zinc-200 bg-white/70 px-1.5 py-0.5 backdrop-blur-sm transition-all duration-500 dark:border-zinc-800 dark:bg-black/70"
              style={{
                transform: hovered
                  ? `translate(${item.translateX}px, ${item.translateY}px)`
                  : "translate(0px, 0px)",
              }}
            >
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: index < 3 ? mainColor : secondaryColor }}
              />
              <span className="ml-1 text-[10px] text-black dark:text-white">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        
        {/* Progress circle and other visual elements */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute top-0 left-0 z-[7] flex h-[360px] w-[356px] transform items-center justify-center transition-transform duration-500 group-hover/animated-card:-translate-y-[90px] group-hover/animated-card:scale-110">
          <div className="relative flex h-[120px] w-[120px] items-center justify-center text-[#00000050] dark:text-white">
            <div className="donut-chart-container relative">
              <svg width="120" height="120" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  opacity={0.2}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={secondaryColor}
                  strokeWidth="14"
                  fill="transparent"
                  strokeDasharray={251.2}
                  strokeDashoffset={hovered ? 0 : 251.2}
                  transform="rotate(-90 50 50)"
                  style={{
                    transition: "stroke-dashoffset 0.5s cubic-bezier(0.6, 0.6, 0, 1)",
                  }}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={mainColor}
                  strokeWidth="14"
                  fill="transparent"
                  strokeDasharray={251.2}
                  strokeDashoffset={hovered ? 83.7 : 219.8}
                  transform="rotate(-90 50 50)"
                  style={{
                    transition: "stroke-dashoffset 0.5s cubic-bezier(0.6, 0.6, 0, 1)",
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-gilroy text-xl text-black dark:text-white">
                  {hovered ? "100" : "12.5"}%
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[6] flex translate-y-full items-center justify-center opacity-0 transition-all duration-500 group-hover/animated-card:translate-y-0 group-hover/animated-card:opacity-100">
          <svg
            width="356"
            height="180"
            viewBox="0 0 356 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="356" height="180" fill="url(#paint0_linear_29_3)" />
            <defs>
              <linearGradient
                id="paint0_linear_29_3"
                x1="178"
                y1="0"
                x2="178"
                y2="180"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.35" stopColor={mainColor} stopOpacity="0" />
                <stop offset="1" stopColor={mainColor} stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Grid layer */}
        <div
          style={{ "--grid-color": gridColor } as React.CSSProperties}
          className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] bg-center opacity-70 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"
        />
      </div>
    </>
  );
}

export default function GradelabAnimatedCardsCompact() {
  return (
    <div className="flex flex-col items-center gap-3 scale-80 md:scale-95 lg:scale-100">
      {/* AI Grading Engine Card */}
      <AnimatedCard className="w-[300px] md:w-[356px]">
        <CardVisual className="h-[150px] md:h-[180px] w-[300px] md:w-[356px]">
          <Visual2 
            mainColor="#84cc16" 
            secondaryColor="#65a30d" 
            gridColor="#80808020"
          />
        </CardVisual>
        <CardBody>
          <CardTitle>AI Grading Engine</CardTitle>
          <CardDescription>
            Auto-score essays & assignments against custom rubrics in under 60 seconds
          </CardDescription>
        </CardBody>
      </AnimatedCard>
      
      {/* Question Generation Card */}
      <AnimatedCard className="w-[300px] md:w-[356px]">
        <CardVisual className="h-[150px] md:h-[180px] w-[300px] md:w-[356px]">
          <QuestionGenerationVisual 
            mainColor="#84cc16" 
            secondaryColor="#65a30d" 
            gridColor="#80808020"
          />
        </CardVisual>
        <CardBody>
          <CardTitle>AI Question Generator</CardTitle>
          <CardDescription>
            Create diverse quizzes from any syllabus with Blooms taxonomy support
          </CardDescription>
        </CardBody>
      </AnimatedCard>
    </div>
  )
}
