import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import logo from "../assets/logo.webp";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Academics", href: "#academics" },
  { label: "Admission", href: "#admission" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false); // 1. Close menu first
    setTimeout(() => {
      // 2. Scroll after animation settles (300ms matches Framer exit duration)
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="New Deep Public School Logo"
            className="w-14 h-14 object-contain"
          />
          <div className="leading-tight">
            <p className="font-heading font-bold text-navy-900 text-lg md:text-base">
              New Deep Public School
            </p>
            <p className="text-xs text-gray-500 font-body">Palwal, Haryana</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-600 text-gray-600 hover:text-navy-800 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:9813279231"
            className="flex items-center gap-2 text-navy-800 font-bold text-sm font-body hover:text-amber-600 transition-colors"
          >
            <FiPhone className="w-4 h-4" />
            9813279231
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-navy-800 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleMobileNavClick(e, l.href)}
                  className="text-gray-700 font-body font-semibold py-2 border-b border-gray-50"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 mt-2">
                <a
                  href="tel:9813279231"
                  className="btn-outline text-sm py-2 px-4 flex-1 text-center"
                >
                  📞 Call Us
                </a>
                <a
                  href="https://wa.me/919813279231?text=Hello%2C%20I%20want%20to%20know%20about%20admission%20in%20New%20Deep%20Public%20School."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4 flex-1 text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}