"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/lib/motion";

const officeImages = [
  { src: "/office1.svg", alt: "Warm seating area in Dr. Reynolds therapy office" },
  { src: "/office2.svg", alt: "Private therapy room with natural lighting" },
  { src: "/office3.svg", alt: "Comfortable office corner for reflective conversation" }
];

export default function Office() {
  return (
    <section id="office" className="section-space bg-brand-surface/60 text-center dark:bg-slate-900/40">
      <motion.div
        className="container-page"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={fadeUp} className="mb-6 text-2xl text-brand-primary dark:text-cyan-200 md:text-4xl">
          A Calm Space for Healing
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-brand-text/80 dark:text-slate-200 md:mb-12 md:text-lg">
          My private office in Seattle is designed to feel peaceful, confidential, and welcoming, a place where you
          can slow down and focus fully on your well-being. In-person and secure virtual sessions are available.
        </motion.p>
        <div className="grid gap-6 md:grid-cols-3">
          {officeImages.map((item) => (
            <motion.div
              key={item.src}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              className="overflow-hidden rounded-xl shadow-soft"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={700}
                height={500}
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
