import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import classroom from "../assets/facility/classroom.webp"
import safety from "../assets/facility/safety.webp"
import ground from "../assets/facility/playGround.webp"


const facilities = [
  {
    title: 'Bright Classrooms',
    subtitle: 'Comfortable learning spaces',
    img: classroom,
    highlight: 'Focused learning environment',
    points: [
      'Spacious & ventilated classrooms',
      'Comfortable desks for every student',
      'Clean boards & distraction-free setup',
    ],
  },
  {
    title: 'Computer Lab',
    subtitle: 'Digital learning from early classes',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0',
    highlight: 'Future-ready students',
    points: [
      'Modern computer systems',
      'Regular practical sessions',
      'Basic to advanced computer knowledge',
    ],
  },
  {
    title: 'Library',
    subtitle: 'Reading culture we build daily',
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
    highlight: 'Improves thinking & focus',
    points: [
      '2000+ books available',
      'Storybooks to reference material',
      'Silent reading time encouraged',
    ],
  },
  {
    title: 'Playground',
    subtitle: 'Daily sports & physical growth',
    img: ground,
    highlight: 'Health + discipline',
    points: [
      'Cricket, football & outdoor games',
      'Daily physical activity',
      'Focus on fitness + teamwork',
    ],
  },
  {
    title: 'Campus Safety',
    subtitle: 'Safe & secure environment',
    img: safety,
    highlight: 'Peace of mind for parents',
    points: [
      'CCTV surveillance',
      'Secure entry & exit system',
      'Staff supervision at all times',
    ],
  },
  {
    title: 'Clean Facilities',
    subtitle: 'Hygiene we maintain daily',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
    highlight: 'Healthy environment',
    points: [
      'Separate clean washrooms',
      'Daily cleaning routine',
      'Safe drinking water facility',
    ],
  },
]

export default function FacilitiesPro() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="facilities" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
            Our Facilities
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Designed for Learning, <br />
            <span className="text-amber-500">Built for Growth</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Every facility in our school is carefully planned to support your child’s education,
            safety, and overall development.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden ">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-top group-hover:scale-110 transition duration-700"
                />

                {/* Overlay highlight */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <p className="text-white text-sm font-semibold">{f.highlight}</p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {f.title}
                </h3>

                <p className="text-amber-600 text-xs font-semibold uppercase mb-3">
                  {f.subtitle}
                </p>

                <ul className="space-y-2 mb-4">
                  {f.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-green-500">✔</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* micro CTA */}
                <p className="text-xs text-blue-600 font-semibold cursor-pointer">
                  Learn more →
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* HUMAN TRUST STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mt-20 bg-white border rounded-3xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Want to See These Facilities in Real Life?
            </h3>
            <p className="text-gray-600 text-sm">
              Book a school visit and experience our campus yourself.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="tel:9813279231"
              className="bg-navy-900 text-white px-5 py-3 rounded-xl text-sm font-bold"
            >
              📞 Call Now
            </a>
            <a
              href="#contact"
              className="border px-5 py-3 rounded-xl text-sm font-bold"
            >
              📍 Visit School
            </a>
          </div>
        </motion.div>

        {/* PREMIUM TRUST BLOCK */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mt-20 bg-navy-900 text-white rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-10">
            Trusted by Hundreds of Parents
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '900+', label: 'Students Educated' },
              { value: '30+', label: 'Qualified Staff' },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-4xl font-bold text-amber-400">{item.value}</p>
                <p className="text-blue-200 mt-2 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}