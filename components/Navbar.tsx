"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-30 border-b border-brand-primary/20 bg-brand-secondary/90 backdrop-blur dark:border-slate-700 dark:bg-slate-950/95"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-3" aria-label="Primary">
        <a href="#" className="max-w-[58vw] truncate text-base font-semibold tracking-tight text-brand-primary dark:text-cyan-300 sm:text-lg md:max-w-none md:text-xl">
          Dr. Maya Reynolds
        </a>
        <ul className="hidden items-center gap-6 text-base text-brand-text dark:text-slate-100 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                className="transition hover:text-brand-primary dark:hover:text-cyan-300"
                href={link.href}
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <motion.a
            href="#cta"
            className="hidden rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-brand-onprimary transition hover:opacity-90 dark:bg-cyan-200 dark:text-slate-900 sm:inline-flex md:px-5 md:py-2.5 md:text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Consultation
          </motion.a>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-brand-primary/40 px-3 py-2 text-xs font-semibold text-brand-primary dark:border-cyan-200/60 dark:text-cyan-200 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div id="mobile-menu" className="border-t border-brand-primary/20 bg-slate-950/95 md:hidden">
          <div className="container-page py-3">
            <ul className="grid gap-2 text-sm text-slate-100">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-2 py-2 transition hover:bg-slate-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#cta"
                  onClick={() => setIsOpen(false)}
                  className="mt-1 inline-flex rounded-lg bg-cyan-200 px-4 py-2 text-sm font-medium text-slate-900"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </motion.header>
  );
}
