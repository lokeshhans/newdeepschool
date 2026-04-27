import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import principal from "../assets/principal.webp"

const reasons = [
  {
    icon: '🛡️',
    title: 'Child Safety First',
    desc: 'CCTV cameras, secured gates, and verified staff. Har parent ki sabse badi tension — safety — hum seriously lete hain.',
    proof: '✔ Monitored campus daily',
    highlight: true,
  },
  {
    icon: '👁️',
    title: 'Personal Attention',
    desc: 'Limited students per class. Har bachche par dhyaan diya jata hai — koi ignore nahi hota.',
    proof: '✔ Small class strength',
  },
  {
    icon: '🎓',
    title: 'Experienced Teachers',
    desc: 'Teachers jo sirf padhaate nahi — samjhate hain. Saalon ka experience aur patience.',
    proof: '✔ Long-term faculty',
  },
  {
    icon: '💰',
    title: 'Affordable Fees',
    desc: 'Quality education jo middle-class families afford kar sake. No hidden charges.',
    proof: '✔ Transparent structure',
    highlight: true,
  },
  {
    icon: '📍',
    title: 'Located in Palwal',
    desc: 'School paas mein hone se time bachta hai, bachcha safe rehta hai, aur routine stable hota hai.',
    proof: '✔ Easy daily commute',
  },
  {
    icon: '📞',
    title: 'Responsive School',
    desc: 'Call karo — response milega. Parents ke liye communication open hai.',
    proof: '✔ Fast response',
  },
]

export default function WhyChooseUsPro() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="why" className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            Why Parents Choose Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Real Reasons Parents Trust Us <br />
            <span className="text-amber-500">With Their Child</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Ye sirf claims nahi hain — ye woh reasons hain jo parents khud batate hain.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl p-6 border transition-all duration-300 ${
                r.highlight
                  ? 'bg-navy-900 text-white border-navy-700 shadow-xl'
                  : 'bg-white border-gray-200 hover:shadow-lg'
              }`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{r.icon}</div>

              {/* Title */}
              <h3 className={`font-bold text-lg mb-2 ${r.highlight ? 'text-white' : 'text-gray-900'}`}>
                {r.title}
              </h3>

              {/* Desc */}
              <p className={`text-sm leading-relaxed mb-3 ${
                r.highlight ? 'text-blue-200' : 'text-gray-600'
              }`}>
                {r.desc}
              </p>

              {/* Proof line */}
              <p className={`text-xs font-semibold ${
                r.highlight ? 'text-amber-300' : 'text-green-600'
              }`}>
                {r.proof}
              </p>

              {/* hover underline */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300 rounded-b-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* HUMAN TRUST STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mt-20 bg-white border rounded-3xl p-8 shadow-md flex flex-col md:flex-row items-center gap-6"
        >
          <img
            src={principal}
            alt="Principal"
            className="w-24 h-24 rounded-full object-top shadow"
          />

          <div>
            <p className="text-gray-700 text-sm leading-relaxed">
              “Hum sirf padhai nahi karwate — hum bachchon ko samajhte hain. Har bachcha important hai.”
            </p>
            <p className="text-gray-500 text-xs mt-2">
              — Principal, New Deep Public School
            </p>
          </div>
        </motion.div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-10 text-center shadow-xl"
        >
          <h3 className="text-white text-3xl font-bold mb-3">
            Admission Open 2026–27
          </h3>

          <p className="text-amber-100 mb-6 max-w-lg mx-auto">
            Seats limited hain. Abhi enquiry karein — kal wait karna pad sakta hai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9813279231"
              className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold shadow hover:bg-gray-100 transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919813279231"
              className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold shadow hover:bg-[#20ba5a] transition"
            >
              💬 WhatsApp
            </a>
          </div>

          <p className="text-xs text-white/80 mt-4">
            * Limited seats • First come first serve
          </p>
        </motion.div>

      </div>
    </section>
  )
}