"use client";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "react-hot-toast";
import confetti from "canvas-confetti";

export default function EmailForm() {
  const [email, setEmail] = useState<string>();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        toast.success("Welcome to Gradelab.io! We'll notify you when we launch!");
        
        // Trigger confetti blast
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) =>
          Math.random() * (max - min) + min;

        const interval = window.setInterval(() => {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          });
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          });
        }, 250);
      } else if (response.status === 409) {
        setEmail("");
        toast.error("This email is already on our waitlist!");
      } else {
        setEmail("");
        toast.error("Oops! Something went wrong!");
      }
    } catch (err) {
      setEmail("");
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} method="POST" className="mt-2 max-w-md w-full">
        <div className="flex flex-col gap-2 lg:flex-row">
          <label className="sr-only" htmlFor="email-address">
            Email address
          </label>
          <input
            autoComplete="email"
            className="text-zinc-900 block h-12 w-full appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:border-zinc-400 sm:text-sm"
            id="email-address"
            name="email"
            placeholder="johndoe@example.com"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="flex h-12 shrink-0 items-center justify-center gap-1 rounded-lg bg-[#000F2D] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700"
            type="submit"
          >
            <span>Join the Waitlist Free</span>
          </button>
        </div>
      </form>

      <div className="flex items-center gap-2 text-gray-500 mt-3 w-full justify-start">
        <LockClosedIcon className="w-3 h-3" />
        <p className="text-xs">
          Your email is secured
        </p>
      </div>
    </div>
  );
}
