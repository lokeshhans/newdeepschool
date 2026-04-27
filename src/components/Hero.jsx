import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import principal from "../assets/school.webp"

export default function AdmissionReal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="admission" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - REAL IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <img
              src={principal} // 👉 use your extracted teacher image here
              alt="School Principal"
              className="rounded-3xl shadow-xl w-full h-[420px] object-top"
            />

            <div className="absolute bottom-4 left-4 bg-navy-900 text-white px-4 py-2 rounded-lg text-sm">
              New Deep Public School, Palwal
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">
              Admission Open 2026–27
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              From Class 10th to 12th <br />
              <span className="text-amber-500">Build Your Career Strong</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              At New Deep Public School, we focus on strong academic results,
              discipline, and real understanding. With experienced teachers and
              personal attention, students are fully prepared for board exams and future careers.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                '✔ Experienced Faculty',
                '✔ Board Exam Preparation',
                '✔ Science & Commerce Streams',
                '✔ Regular Tests & Doubt Classes',
                '✔ Career Guidance',
                '✔ Safe & Disciplined Environment',
              ].map((item, i) => (
                <div key={i} className="text-sm text-gray-700">
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="tel:9813279231"
                className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-red-600 transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919813279231"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold shadow hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* TRUST LINE */}
            <p className="text-xs text-gray-500 mt-4">
              Limited seats available • Admissions based on availability
            </p>

          </motion.div>

        </div>

        {/* EXTRA TRUST (VERY IMPORTANT) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mt-16 grid md:grid-cols-3 gap-6 text-center"
        >
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '900+', label: 'Students Passed' },
            { value: '30+', label: 'Qualified Teachers' },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <p className="text-3xl font-bold text-amber-500">{item.value}</p>
              <p className="text-gray-600 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}