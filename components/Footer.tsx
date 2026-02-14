"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-slate-700 bg-slate-900/85 py-8"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="container-page flex flex-col items-start justify-between gap-3 text-sm text-slate-300 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
        <p>Seattle, WA | In-person and virtual sessions across Washington</p>
      </div>
    </motion.footer>
  );
}
