"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="section-space">
      <motion.div
        className="container-page rounded-2xl border border-brand-primary/20 bg-brand-surface p-6 shadow-soft dark:border-brand-primary/35 dark:bg-slate-900/70 md:p-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="mb-6 text-2xl text-brand-primary dark:text-cyan-200 md:text-4xl">
          Meet Dr. Maya Reynolds
        </h2>
        <motion.p variants={fadeUp} className="mb-5 max-w-3xl text-base leading-relaxed text-brand-text/85 dark:text-slate-200 md:text-lg">
          I am a licensed psychologist specializing in anxiety, trauma recovery, and life transitions. My approach is
          warm, collaborative, and grounded in evidence-based therapies.
        </motion.p>
        <motion.p variants={fadeUp} className="max-w-3xl text-base leading-relaxed text-brand-text/85 dark:text-slate-200 md:text-lg">
          Therapy with me is not about fixing you. It is about helping you understand yourself more deeply, build
          resilience, and create lasting emotional balance.
        </motion.p>
      </motion.div>
    </section>
  );
}
