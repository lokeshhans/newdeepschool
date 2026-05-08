import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import principal from "../assets/principal.webp";

const reasons = [
  {
    icon: "🛡️",
    title: "Child Safety First",
    desc: "CCTV surveillance, secured campus, verified staff, and disciplined environment. Parents trust us because safety comes before everything.",
    proof: "24×7 monitored campus",
    highlight: true,
  },
  {
    icon: "👨‍🏫",
    title: "Experienced Teachers",
    desc: "Teachers with years of classroom experience who focus on concepts, discipline, and personal mentoring.",
    proof: "Qualified & supportive faculty",
  },
  {
    icon: "🎯",
    title: "Personal Attention",
    desc: "Every child gets guidance, feedback, and support. No student is ignored in the classroom.",
    proof: "Small classroom strength",
  },
  {
    icon: "📚",
    title: "Strong Academic Focus",
    desc: "Regular tests, board preparation, doubt sessions, and structured study plans help students perform better.",
    proof: "Excellent board results",
    highlight: true,
  },
  {
    icon: "💰",
    title: "Affordable Education",
    desc: "Quality education designed for middle-class families without unnecessary financial burden.",
    proof: "Transparent fee structure",
  },
  {
    icon: "📍",
    title: "Located in Palwal",
    desc: "Convenient location means safer travel, less stress, and more time for studies and family.",
    proof: "Easy daily commute",
  },
];

const stats = [
  { number: "25+", label: "Years of Trust" },
  { number: "100%", label: "Board Result Focus" },
  { number: "30+", label: "Qualified Teachers" },
  { number: "900+", label: "Successful Students" },
];

export default function WhyChooseUsPro() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <section
      id="why"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#fffdf7]"
      ref={ref}
    >
      {/* Background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-amber-100 text-amber-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[3px]">
            Why Parents Trust Us
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            More Than A School.
            <span className="block text-amber-500">
              A Trusted Future.
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            New Deep Public School is trusted by families across Palwal
            because we focus on discipline, academics, safety, and real
            student growth.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20"
        >
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-black text-amber-500">
                {item.number}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group rounded-[2rem] p-7 border relative overflow-hidden transition-all duration-300 ${
                  r.highlight
                    ? "bg-navy-900 border-navy-800 text-white shadow-2xl"
                    : "bg-white border-gray-100 hover:shadow-xl"
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-5">
                    {r.icon}
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${
                    r.highlight ? "text-white" : "text-gray-900"
                  }`}>
                    {r.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    r.highlight
                      ? "text-blue-100"
                      : "text-gray-600"
                  }`}>
                    {r.desc}
                  </p>

                  <div className={`mt-5 inline-flex items-center px-4 py-2 rounded-full text-xs font-bold ${
                    r.highlight
                      ? "bg-white/10 text-amber-300"
                      : "bg-green-50 text-green-700"
                  }`}>
                    ✔ {r.proof}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sticky top-28"
          >
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={principal}
                  alt="Principal"
                  loading="lazy"
                  className="w-full h-[420px] object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                <div className="absolute bottom-6 left-6">
                  <p className="text-white text-sm uppercase tracking-widest">
                    Principal Message
                  </p>

                  <h3 className="text-3xl font-black text-white mt-1">
                    M. R. Chauhan
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  “Education is not only about marks. We believe in
                  discipline, confidence, values, and preparing students
                  for real life challenges.”
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <a
                    href="tel:9813279231"
                    className="flex-1 min-w-[180px] bg-amber-500 hover:bg-amber-600 text-white text-center py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg"
                  >
                    📞 Call Now
                  </a>

                  <a
                    href="https://wa.me/919813279231"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[180px] bg-[#25D366] hover:bg-[#20ba5a] text-white text-center py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg"
                  >
                    💬 WhatsApp
                  </a>

                </div>

                {/* Mini Trust */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-2xl font-black text-amber-500">
                      100%
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Result Focus
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-2xl font-black text-green-600">
                      Safe
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Campus
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-2xl font-black text-blue-600">
                      CBSE
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Pattern
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