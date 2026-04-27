import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import addmissionBanner from "../assets/admission.webp"

export default function AdmissionBanner() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >

          {/* LEFT - IMAGE */}
          <div className="relative">
            <img
              src={addmissionBanner}  // 👉 save your image in public folder
              alt="Admission Open"
              className="rounded-3xl shadow-xl w-full object-cover"
            />

            {/* Badge */}
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow">
              Admission Open 2026
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">
              Admissions
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Secure Your Child’s Future Today
            </h2>

            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Admissions are now open from Pre-Nursery to Class 10. Limited seats available.
              Give your child a strong foundation with quality education and personal attention.
            </p>

            {/* BENEFITS */}
            <div className="space-y-3 mb-6">
              {[
                'Well-qualified & experienced teachers',
                'Regular tests & performance tracking',
                'Computer education from early classes',
                'Safe campus with CCTV',
                'Focus on discipline & values',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-green-600 mt-1">✔</span>
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+917000000000"
                className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-red-600 transition"
              >
                Call Now
              </a>

              <a
                href="#contact"
                className="border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Visit School
              </a>
            </div>

            {/* Note */}
            <p className="text-xs text-gray-300 mt-4">
              * Limited seats. Admission on first-come basis.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}