"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function CTA() {
  return (
    <section id="cta" className="section-space">
      <div className="container-page">
        <motion.div
          className="rounded-2xl bg-brand-accent px-6 py-10 text-center dark:bg-[#324451] md:px-12 md:py-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="mb-5 text-2xl text-brand-text dark:text-slate-100 md:text-4xl">
            You Do Not Have to Navigate This Alone
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-brand-text/85 dark:text-slate-200 md:text-lg">
            Take the first step toward feeling more grounded and supported. Schedule a consultation and we can discuss
            what you need most right now.
          </p>
          <motion.a
            href="mailto:hello@drmayareynolds.com?subject=Therapy%20Consultation"
            className="inline-flex w-full justify-center rounded-lg bg-brand-primary px-6 py-3 font-semibold text-brand-onprimary transition hover:opacity-90 dark:bg-cyan-200 dark:text-slate-900 sm:w-auto sm:px-8"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Your Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
