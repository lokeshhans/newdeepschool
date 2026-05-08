import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPhoneCall,
} from "react-icons/fi";

import school from "../assets/school.webp";

const stats = [
  { value: "100%", label: "Board Result" },
  { value: "31+", label: "Merit Students" },
  { value: "25+", label: "Years Experience" },
];

const highlights = [
  "CBSE Pattern Education",
  "Science & Commerce Streams",
  "Experienced Teachers",
  "Safe & Disciplined Campus",
  "Regular Tests & Guidance",
  "Smart Learning Environment",
];

export default function AdmissionReal() {
  return (
    <section
      id="admission"
      className="relative overflow-hidden bg-gradient-to-br from-[#07152d] via-[#0b2247] to-[#102d5c] min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={school}
          alt="New Deep Public School"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-20"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07152d]/95 via-[#07152d]/85 to-[#07152d]/70" />

      {/* Floating Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              🎓 Admission Open 2026–27
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
              Build Your Child’s
              <span className="block text-amber-400">
                Bright Future
              </span>
              at New Deep Public School
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
              A trusted English medium school in Palwal focused on strong
              academics, discipline, values, and real career preparation from
              Nursery to Class 12th.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-4 py-3"
                >
                  <FiCheckCircle className="text-amber-400 flex-shrink-0" />
                  <span className="text-sm text-gray-200 font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="tel:9813279231"
                className="group bg-amber-400 hover:bg-amber-300 text-black px-7 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all duration-300 shadow-2xl"
              >
                <FiPhoneCall />
                Call For Admission
              </a>

              <a
                href="https://wa.me/919813279231"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/20 bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-2xl font-bold flex items-center gap-2 backdrop-blur-md transition-all duration-300"
              >
                WhatsApp Now
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-14">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-5 text-center"
                >
                  <h3 className="text-3xl md:text-4xl font-black text-amber-400">
                    {item.value}
                  </h3>

                  <p className="text-gray-300 text-sm mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute -inset-4 bg-amber-400/20 blur-3xl rounded-full" />

            {/* Image Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] overflow-hidden shadow-2xl">

              <img
                src={school}
                alt="New Deep Public School Campus"
                loading="lazy"
                decoding="async"
                className="w-full h-[520px] md:h-[650px] object-cover object-center hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-3xl p-5 shadow-xl">

                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-red-500 font-bold">
                      Haryana Topper School
                    </p>

                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mt-1">
                      Admissions Open
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">
                      Nursery to Class 12th
                    </p>
                  </div>

                  <div className="bg-amber-400 text-black px-5 py-4 rounded-2xl text-center min-w-[90px]">
                    <p className="text-2xl font-black">2026</p>
                    <p className="text-xs font-semibold">
                      SESSION
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}