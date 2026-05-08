    import React from "react";
import { motion } from "framer-motion";

import resultPoster from "../assets/result-poster.webp";

export default function ResultShowcase() {
  return (
    <section
      id="results"
      className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            Academic Excellence
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight">
            Class 10th Board Result
            <br />
            <span className="text-amber-500">Session 2024–2025</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
            Our students achieved outstanding academic success with a
            100% result, multiple merit holders, and excellent board scores.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">

              <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                <p className="text-4xl font-extrabold text-amber-500">100%</p>
                <p className="text-gray-600 mt-1 text-sm font-medium">
                  Overall Result
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                <p className="text-4xl font-extrabold text-green-600">31</p>
                <p className="text-gray-600 mt-1 text-sm font-medium">
                  Merit Students
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                <p className="text-4xl font-extrabold text-blue-600">67</p>
                <p className="text-gray-600 mt-1 text-sm font-medium">
                  Total Students
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                <p className="text-4xl font-extrabold text-purple-600">29</p>
                <p className="text-gray-600 mt-1 text-sm font-medium">
                  First Division
                </p>
              </div>

            </div>

            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-400 rounded-3xl p-7 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-3">
                🏆 Haryana Top Performers
              </h3>

              <p className="text-amber-100 text-sm leading-relaxed">
                Students of New Deep Public School have consistently delivered
                excellent academic performance through discipline, dedicated
                teachers, and focused preparation.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  CBSE Pattern
                </span>

                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  Expert Faculty
                </span>

                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  Smart Learning
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#admission"
                className="bg-navy-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Apply for Admission →
              </a>

              <a
                href="tel:9813279231"
                className="bg-white border border-gray-200 text-navy-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-sm"
              >
                📞 Call Now
              </a>

            </div>
          </motion.div>

          {/* Right Side Poster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-amber-300 blur-3xl opacity-20 rounded-full" />

            {/* Poster */}
            <div className="relative bg-white p-3 md:p-5 rounded-[2rem] shadow-2xl border border-gray-100">

              <img
                src={resultPoster}
                alt="New Deep Public School Result 2024-25"
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-5 py-3 rounded-2xl shadow-xl">
                <p className="text-2xl font-extrabold">100%</p>
                <p className="text-xs font-semibold uppercase tracking-wide">
                  Result
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}