import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import logo from "../assets/logo.webp";

const WHATSAPP =
  "https://wa.me/919813279231?text=Hello%2C%20main%20New%20Deep%20Public%20School%20mein%20admission%20ke%20baare%20mein%20jaanna%20chahta%20hoon.";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* Replace with real logo later */}
              <img
                src={logo}
                alt="New Deep Public School Logo"
                className="w-10 h-10 object-contain"
              />

              <div>
                <h2 className="font-bold text-white text-base">
                  New Deep Public School
                </h2>
                <p className="text-blue-300 text-xs">
                  Mohan Nagar, Palwal, Haryana
                </p>
              </div>
            </div>

            <p className="text-blue-200 text-sm leading-relaxed mb-5 max-w-sm">
              Quality education, caring teachers, and a safe environment for
              every child. Trusted by parents in Palwal for building strong
              academic foundations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919813279231"
                className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 px-4 py-2 rounded-lg text-sm font-bold transition"
              >
                <FiPhone className="w-4 h-4" />
                Call Now
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] px-4 py-2 rounded-lg text-sm font-bold transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ["About Us", "#about"],
                ["Facilities", "#facilities"],
                ["Academics", "#academics"],
                ["Admission", "#admission"],
                ["Gallery", "#gallery"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-blue-200 hover:text-amber-400 text-sm transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">
              Contact Info
            </h3>

            <div className="space-y-3 text-sm">
              {/* Phone */}
              <a
                href="tel:+919813279231"
                className="flex items-start gap-3 text-blue-200 hover:text-amber-400 transition"
              >
                <FiPhone className="w-4 h-4 mt-1" />
                +91 98132 79231
              </a>

              {/* Email */}
              <a
                href="mailto:newdeeppulicschool28@gmail.com"
                className="flex items-start gap-3 text-blue-200 hover:text-amber-400 transition"
              >
                <FiMail className="w-4 h-4 mt-1" />
                newdeeppulicschool28@gmail.com
              </a>

              {/* Address + Map */}
              <a
                href="https://maps.google.com/?q=Mohan+Nagar+Palwal+Haryana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-blue-200 hover:text-amber-400 transition"
              >
                <FiMapPin className="w-4 h-4 mt-1" />
                Mohan Nagar, Palwal, Haryana <br /> PIN: 121102
              </a>

              {/* Timing */}
              <div className="flex items-start gap-3 text-blue-200">
                <span className="mt-1">⏰</span>
                <span>
                  Mon – Sat: 8AM – 4PM <br />
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} New Deep Public School, Palwal. All
            rights reserved.
          </p>

          {/* SEO Line */}
          <p className="text-blue-400 text-xs text-center sm:text-right">
            Best School in Palwal Haryana · Admission Open 2026–27 · Nursery to
            Senior Classes
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p className="mb-2">
            Developed by {"  "}
            <a
              href="https://instagram.com/growupcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-600 hover:underline"
            >
              GrowUp Craft
            </a>
          </p>

          <div className="flex justify-center gap-4 text-sm">
            <a href="tel:8930296001" className="hover:text-gray-800 transition">
              📞 8930296001
            </a>
            <span>Lokesh hans</span>

            <a
              href="https://instagram.com/growupcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
