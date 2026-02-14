"use client";

import { motion } from "framer-motion";
import { faqs } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function FAQ() {
  return (
    <section id="faq" className="section-space">
      <motion.div
        className="container-page"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={fadeUp} className="mb-10 text-center text-2xl text-brand-primary dark:text-cyan-200 md:text-4xl">
          Frequently Asked Questions
        </motion.h2>
        <motion.div variants={staggerContainer} className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((item) => (
            <motion.details
              key={item.question}
              variants={fadeUp}
              className="rounded-xl border border-brand-primary/20 bg-brand-surface p-4 shadow-soft dark:border-brand-primary/35 dark:bg-slate-900/70 md:p-5"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-brand-primary dark:text-cyan-200 md:text-lg">
                {item.question}
              </summary>
              <p className="pt-3 leading-relaxed text-brand-text/85 dark:text-slate-200">{item.answer}</p>
            </motion.details>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
