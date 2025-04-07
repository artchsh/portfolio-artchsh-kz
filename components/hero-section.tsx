import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaEnvelope, FaCode } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-6">
      {/* Optional: Subtle background shapes/elements for better glass effect */}
      <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 animate-pulse rounded-full bg-zinc-800/30 blur-3xl"></div>
      <div className="absolute -top-1/4 -right-1/4 h-80 w-80 animate-pulse rounded-full bg-zinc-700/20 blur-3xl animation-delay-4000"></div>

      <div
        className="
          z-10 w-full max-w-4xl rounded-2xl border border-white/10
          bg-zinc-800/20 p-8 text-center shadow-xl
          backdrop-blur-lg sm:p-12 md:p-16
        "
      >
        <div className="mb-5 flex items-center justify-center gap-3 text-zinc-400">
          <FaCode className="h-6 w-6 sm:h-7 sm:w-7" />
          <h2 className="text-xl font-medium tracking-wide text-zinc-300 sm:text-2xl md:text-3xl">
            Software Engineer
          </h2>
        </div>

        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Artyom Chshyogolev
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400 sm:text-lg md:mt-6 md:text-xl">
          Building innovative, efficient, and user-friendly solutions for the
          digital future.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            className={`${buttonVariants({
              variant: "default", // Assuming default is a solid, lighter style
              size: "lg",
            })} flex items-center gap-2 bg-zinc-100 text-zinc-900 transition-colors hover:bg-zinc-300`}
            href={"#contact-section"}
          >
            <FaEnvelope className="h-5 w-5" />
            Contact Me
          </Link>
          <Link
            className={`${buttonVariants({
              variant: "secondary", // Assuming secondary is more subtle/outline
              size: "lg",
            })} flex items-center gap-2 border border-zinc-600 bg-transparent text-zinc-300 transition-colors hover:border-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100`}
            href={"https://github.com/artchsh"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-5 w-5" />
            GitHub Profile
          </Link>
        </div>
      </div>
    </section>
  );
}