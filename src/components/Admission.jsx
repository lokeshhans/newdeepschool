import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiPhone } from 'react-icons/fi'

const steps = [
  {
    step: '01',
    icon: '📋',
    title: 'Call or WhatsApp',
    desc: 'Call us on 9813279231 or send a WhatsApp message. Tell us your child\'s name and class. That\'s all we need to start.',
  },
  {
    step: '02',
    icon: '🏫',
    title: 'Visit Our School',
    desc: 'Come and see the school yourself. Meet the teachers, see the classrooms. We\'re open Monday–Saturday, 9AM to 2PM.',
  },
  {
    step: '03',
    icon: '✅',
    title: 'Confirm Admission',
    desc: 'Fill the simple form, submit documents, and your child\'s seat is confirmed. We\'ll guide you through every step.',
  },
]

const docs = [
  'Birth Certificate',
  'Aadhar Card (Child)',
  'Previous Class Marksheet / TC',
  'Passport Size Photos (4)',
  'Parent/Guardian ID Proof',
]

export default function Admission() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="admission" className="py-16 md:py-24 bg-navy-950 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-body font-bold px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Admission Open — Session 2026-27
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            How to Get Admission
          </h2>
          <p className="text-blue-200 font-body max-w-xl mx-auto">
            It's simple, quick, and we'll help you at every step.
            Don't wait — seats are filling up fast.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-3 z-10">
                  <FiArrowRight className="text-amber-500 w-5 h-5" />
                </div>
              )}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-amber-400 font-heading font-bold text-4xl opacity-50">
                    {s.step}
                  </span>
                  <span className="text-3xl">{s.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-blue-200 text-sm font-body leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom panel */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Documents needed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="font-heading text-white font-bold text-xl mb-4">
              📁 Documents Needed
            </h3>
            <ul className="space-y-2">
              {docs.map(d => (
                <li key={d} className="flex items-center gap-3 text-blue-200 text-sm font-body">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-xs font-body mt-4">
              * Koi document missing ho toh bhi pehle contact karein — hum guide kar denge.
            </p>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-amber-500 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-heading text-white font-bold text-xl mb-2">
                🎓 Seats Limited — Act Now
              </h3>
              <p className="text-amber-100 font-body text-sm mb-6 leading-relaxed">
                Har saal hamari seats jaldi bhar jaati hain. Is baar bhi same hoga.
                Aaj hi enquiry karein, wait mat karein.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="tel:9813279231"
                className="flex items-center justify-center gap-2 w-full bg-white text-amber-700 font-bold py-3 px-6 rounded-xl hover:bg-amber-50 transition-colors font-body"
              >
                <FiPhone className="w-5 h-5" />
                Call: 9813279231
              </a>
              <a
                href="https://wa.me/919813279231?text=Hello%2C%20main%20apne%20bachche%20ka%20admission%20karna%20chahta%20hoon.%20Please%20details%20batayein."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#20ba5a] transition-colors font-body"
              >
                💬 WhatsApp for Quick Reply
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
