import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const classes = [
  {
    label: 'Nursery / KG',
    tag: 'Early Years',
    color: 'bg-rose-100 text-rose-700',
    desc: 'Learning through play, stories, rhymes, and activities that build curiosity and confidence from day one.',
  },
  {
    label: 'Class 1 – 2',
    tag: 'Primary',
    color: 'bg-amber-100 text-amber-700',
    desc: 'Strong focus on reading, writing, and basic maths with fun classroom activities and daily practice.',
  },
  {
    label: 'Class 3 – 5',
    tag: 'Upper Primary',
    color: 'bg-emerald-100 text-emerald-700',
    desc: 'Introduction to Science & Social Studies with regular tests and personal attention to every child.',
  },
  {
    label: 'Class 6 – 8',
    tag: 'Middle School',
    color: 'bg-sky-100 text-sky-700',
    desc: 'Balanced learning with academics, computer education, sports, and overall personality development.',
  },
  {
    label: 'Class 9 – 10',
    tag: 'Secondary',
    color: 'bg-violet-100 text-violet-700',
    desc: 'Board exam preparation with experienced teachers, doubt sessions, and focused revision strategy.',
  },
  {
    label: 'Class 11 – 12',
    tag: 'Senior Secondary',
    color: 'bg-orange-100 text-orange-700',
    desc: 'Science & Commerce streams with career guidance, practical learning, and exam-focused teaching.',
  },
]

const approach = [
  {
    icon: '👩‍🏫',
    title: 'Experienced Teachers',
    desc: 'Our teachers don’t just teach — they guide, support, and ensure every child truly understands concepts.',
  },
  {
    icon: '📊',
    title: 'Continuous Evaluation',
    desc: 'Weekly tests & regular feedback help students improve step-by-step without pressure.',
  },
  {
    icon: '🤝',
    title: 'Parent Connection',
    desc: 'We keep parents informed through PTMs and regular updates about their child’s progress.',
  },
  {
    icon: '🎯',
    title: 'Strong Foundation',
    desc: 'We focus on core subjects and real understanding — not just marks, but lifelong skills.',
  },
]

export default function Academics() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="academics" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">
            Academics
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Classes from Nursery to 12th <br />
            <span className="text-amber-500">Built for Real Learning</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We focus on strong basics, regular practice, and personal attention — so every student grows with confidence.
          </p>
        </motion.div>

        {/* Class Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {classes.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${c.color}`}>
                {c.tag}
              </span>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                {c.label}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {c.desc}
              </p>

              {/* subtle underline effect */}
              <div className="mt-4 h-[2px] w-0 bg-amber-500 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Teaching Approach */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative bg-navy-900 rounded-3xl p-10 md:p-14 overflow-hidden"
        >
          {/* subtle background effect */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent)]"></div>

          <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-12">
            How We Teach Our Students
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  {a.icon}
                </div>

                <h4 className="text-white font-semibold text-base mb-2">
                  {a.title}
                </h4>

                <p className="text-blue-200 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}