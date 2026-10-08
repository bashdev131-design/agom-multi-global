"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur transition hover:bg-white/20"
      >
        {open ? "×" : "☰"}
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-20 overflow-hidden rounded-2xl border border-white/10 bg-[#03162f]/95 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col p-3">
            <a
              href="#home"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Services
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Contact
            </a>

            <a
              href="https://wa.me/2348160044794?text=Hello%20AGOM%20Multi%20Global%20Service%20NG%20LTD%2C%20I%20would%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-yellow-400 px-4 py-3 text-center font-bold text-[#03162f] transition hover:bg-yellow-300"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}