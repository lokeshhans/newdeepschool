import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import school from "../assets/school.webp";

const values = [
  {
    icon: "📚",
    title: "Academic Excellence",
    desc: "Strong foundation learning with regular tests, doubt support, and board-focused preparation.",
  },
  {
    icon: "🛡️",
    title: "Safe Campus",
    desc: "CCTV surveillance, disciplined environment, and caring teachers ensure student safety.",
  },
  {
    icon: "❤️",
    title: "Personal Attention",
    desc: "Every child is guided individually with proper teacher support and mentoring.",
  },
  {
    icon: "🌱",
    title: "Overall Growth",
    desc: "Sports, activities, confidence-building, and values-based education for complete development.",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "900+", label: "Students Passed" },
  { value: "30+", label: "Qualified Teachers" },
];

export default function AboutPremium() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-yellow-50/40 to-white"
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/40 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-5">
              🎓 Trusted School in Palwal
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Shaping Bright Futures
              <span className="block text-amber-500">
                Since 2001
              </span>
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
              New Deep Public School was founded with one simple mission —
              to provide quality education, strong discipline, and real learning
              opportunities for every child in Palwal.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-base md:text-lg">
              Our experienced teachers focus on academics, values, confidence,
              and practical growth so students become successful both inside
              and outside the classroom.
            </p>

            {/* Mission Card */}
            <div className="mt-8 bg-gradient-to-r from-[#081C3A] to-[#102D5C] rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />

              <p className="text-amber-400 font-bold uppercase tracking-widest text-xs mb-3">
                Our Mission
              </p>

              <h3 className="text-2xl font-black mb-3">
                Education With Discipline & Values
              </h3>

              <p className="text-blue-100 text-sm leading-relaxed">
                We aim to create responsible, confident, and career-ready students
                through quality education, moral values, and strong academic guidance.
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">

              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-5 text-center shadow-lg border border-gray-100"
                >
                  <h3 className="text-3xl font-black text-amber-500">
                    {item.value}
                  </h3>

                  <p className="text-xs text-gray-500 mt-2 font-medium">
                    {item.label}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#admission"
                className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
              >
                Apply for Admission →
              </a>

              <a
                href="tel:9813279231"
                className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-2xl font-bold shadow-sm transition-all duration-300"
              >
                📞 Call Now
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Main Image */}
            <div className="relative group">

              <img
                src={school}
                alt="New Deep Public School"
                loading="lazy"
                decoding="async"
                className="w-full h-[520px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl">
                <p className="text-xs text-red-500 font-bold uppercase tracking-widest">
                  Admission Open
                </p>

                <h4 className="text-xl font-black text-gray-900">
                  2026–27
                </h4>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">

                <div className="flex items-center justify-between gap-4 flex-wrap">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-600 font-bold">
                      New Deep Public School
                    </p>

                    <h3 className="text-2xl font-black text-gray-900 mt-1">
                      Palwal, Haryana
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Nursery to Class 12th • CBSE Pattern
                    </p>
                  </div>

                  <div className="bg-green-500 text-white px-5 py-4 rounded-2xl text-center min-w-[90px] shadow-lg">
                    <h4 className="text-2xl font-black">
                      100%
                    </h4>

                    <p className="text-xs font-semibold uppercase">
                      Result
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Value Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300"
                >

                  <div className="text-4xl mb-4">
                    {v.icon}
                  </div>

                  <h3 className="text-lg font-black text-gray-900 mb-2">
                    {v.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mt-24 text-center"
        >

          <p className="text-2xl md:text-3xl font-black text-gray-900 leading-relaxed max-w-4xl mx-auto">
            “We don’t just prepare students for exams —
            we prepare them for life.”
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            — New Deep Public School, Palwal
          </p>

        </motion.div>

      </div>
    </section>
  );
}