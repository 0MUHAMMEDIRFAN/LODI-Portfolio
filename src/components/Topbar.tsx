"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { SITE_NAME } from "@/constants";
import { IMAGE_PATHS } from "@/constants/files";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center items-center py-3 mb-6 top-0 left-0 z-50"
    >
      <div className="fixed top-3 z-50 backdrop-blur-3xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl px-4 sm:px-8 py-2 flex items-center w-full max-w-4xl mx-auto backdrop-saturate-150">
        <span className="font-bold text-xl sm:text-2xl tracking-wide mr-4 sm:mr-8 text-blue-400"><img src={IMAGE_PATHS.LOGO_SMALL} className="w-10" alt={SITE_NAME} /></span>
        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-4 sm:gap-6 text-base sm:text-lg font-medium flex-1 justify-end">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </li>
          {/* <li>
            <Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link>
          </li> */}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="sm:hidden ml-auto text-black focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white/95 border-t border-white/10 shadow-xl rounded-b-xl flex flex-col gap-2 py-4 px-6 z-50"
          >
            <li>
              <Link href="/" className="block py-2 px-2 rounded hover:bg-blue-400/10" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-2 rounded hover:bg-blue-400/10" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-2 rounded hover:bg-blue-400/10" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            {/* <li>
              <Link href="/pricing" className="block py-2 px-2 rounded hover:bg-blue-400/10" onClick={() => setMenuOpen(false)}>Pricing</Link>
            </li>
            <li>
              <Link href="/careers" className="block py-2 px-2 rounded hover:bg-blue-400/10" onClick={() => setMenuOpen(false)}>Careers</Link>
            </li> */}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
}
