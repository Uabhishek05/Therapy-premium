"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Services() {
  return (
    <section id="services" className="section-space">
      <motion.div
        className="container-page"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="mb-10 text-center text-2xl text-brand-primary dark:text-cyan-200 md:text-4xl">
          How I Can Support You
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="rounded-2xl border border-brand-primary/20 bg-brand-surface p-6 shadow-soft dark:border-brand-primary/35 dark:bg-slate-900/70"
            >
              <h3 className="mb-4 text-xl text-brand-primary dark:text-cyan-200 md:text-2xl">{service.title}</h3>
              <p className="text-base leading-relaxed text-brand-text/85 dark:text-slate-200">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
