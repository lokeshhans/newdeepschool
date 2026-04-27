import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import school from "../assets/school.webp"

const values = [
  {
    icon: '📚',
    title: 'Academic Excellence',
    desc: 'Strong focus on fundamentals with regular tests, ensuring students perform confidently in exams and beyond.',
  },
  {
    icon: '🛡️',
    title: 'Safe Environment',
    desc: 'CCTV monitoring, disciplined campus, and caring staff ensure your child feels secure every day.',
  },
  {
    icon: '❤️',
    title: 'Personal Attention',
    desc: 'Small class focus and teacher support so every student is guided properly — no one is ignored.',
  },
  {
    icon: '🌱',
    title: 'Overall Development',
    desc: 'Sports, cultural activities, and real-life skills help students grow into confident individuals.',
  },
]

const stats = [
  { value: '25+', label: 'Years of Trust' },
  { value: '900+', label: 'Students Educated' },
  { value: '30+', label: 'Qualified Teachers' },
]

export default function AboutPro() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              About Our School
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Trusted by Palwal Families <br />
              <span className="text-amber-500">for Over 25 Years</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
              New Deep Public School was built with one simple goal — to give every child
              in Palwal access to quality education, without high fees or long travel.
              Over the years, we’ve become a trusted name for parents who want both
              discipline and real learning.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              We are not a corporate chain. We are a local school that knows every student personally.
              Our teachers stay for years, guide patiently, and truly care about each child’s growth.
            </p>

            {/* MISSION BOX */}
            <div className="bg-navy-900 text-white rounded-2xl p-6 shadow-md mb-6">
              <h3 className="font-bold text-lg mb-2">Our Mission</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                To provide discipline-based, value-driven education that builds strong character,
                clear thinking, and confidence in every student.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((s, i) => (
                <div key={i} className="bg-white shadow-sm rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-amber-500">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#admission"
              className="inline-block bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-amber-600 transition"
            >
              Enquire About Admission →
            </a>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >

            {/* PRINCIPAL IMAGE */}
            <div className="relative mb-8">
              <img
                src={school} // 👉 use your real cropped teacher image
                alt="Principal"
                className="w-full h-[360px] object-cover rounded-3xl shadow-lg"
              />

              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow text-sm font-semibold">
                School Established 2001
              </div>
            </div>

            {/* VALUES */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* EXTRA TRUST LINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mt-20 text-center"
        >
          <p className="text-gray-700 text-lg font-medium">
            “We don’t just teach students — we guide them for life.”
          </p>
          <p className="text-gray-500 text-sm mt-2">
            — New Deep Public School, Palwal
          </p>
        </motion.div>

      </div>
    </section>
  )
}