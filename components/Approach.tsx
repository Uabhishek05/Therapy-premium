"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function Approach() {
  return (
    <section id="approach" className="section-space">
      <motion.div
        className="container-page rounded-2xl bg-brand-primary px-6 py-10 text-brand-onprimary dark:bg-cyan-200 dark:text-slate-900 md:px-12 md:py-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-5 text-2xl md:text-4xl">My Approach to Therapy</h2>
        <p className="max-w-3xl text-base leading-relaxed text-brand-onprimary/90 dark:text-slate-900/90 md:text-lg">
          I integrate Cognitive Behavioral Therapy (CBT), mindfulness practices, and trauma-informed care to tailor
          treatment to your needs. Sessions are collaborative, goal-focused, and paced according to your comfort.
        </p>
      </motion.div>
    </section>
  );
}
