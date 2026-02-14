"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-space" aria-labelledby="hero-title">
      <div className="container-page grid items-center gap-12 md:grid-cols-2 md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h1 id="hero-title" className="mb-6 text-3xl leading-tight text-brand-primary dark:text-cyan-200 sm:text-5xl md:text-6xl">
            Compassionate Therapy for Anxiety, Trauma & Life Transitions in Seattle
          </h1>
          <p className="mb-8 max-w-prose text-base leading-relaxed text-brand-text/85 dark:text-slate-200 sm:text-lg">
            Hi, I am Dr. Maya Reynolds, a licensed clinical psychologist helping adults overcome anxiety, burnout,
            and past trauma so they can live with greater calm, clarity, and confidence.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#cta"
              className="w-full rounded-lg bg-brand-primary px-6 py-3 text-center font-medium text-brand-onprimary shadow-soft transition hover:opacity-90 dark:bg-cyan-200 dark:text-slate-900 sm:w-auto"
            >
              Start Therapy
            </a>
            <a
              href="#cta"
              className="w-full rounded-lg border border-brand-primary px-6 py-3 text-center font-medium text-brand-primary transition hover:bg-brand-primary/5 dark:border-cyan-200 dark:text-cyan-200 dark:hover:bg-cyan-200/10 sm:w-auto"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <Image
            src="/maya.svg"
            alt="Dr. Maya Reynolds in her Seattle therapy office"
            width={720}
            height={840}
            priority
            className="rounded-2xl object-cover shadow-soft"
          />
        </motion.div>
      </div>
    </section>
  );
}
