"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section-space">
      <div className="container-page">
        <h2 className="mb-10 text-center text-2xl text-brand-primary dark:text-cyan-200 md:text-4xl">
          Client Reflection
        </h2>
        <div className="mx-auto max-w-3xl">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.person}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl border border-brand-accent/40 bg-brand-surface p-6 text-center shadow-soft dark:border-brand-accent/55 dark:bg-slate-900/70 md:p-8"
            >
              <p className="mb-4 text-lg leading-relaxed text-brand-text/90 dark:text-slate-100 md:text-xl">
                &ldquo;{item.quote}&rdquo;
              </p>
              <cite className="text-sm font-medium not-italic text-brand-primary dark:text-cyan-200">{item.person}</cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
