import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Sunita Sharma',
    child: 'Maa — Rahul, Class 5',
    location: 'Palwal',
    stars: 5,
    text: 'Teachers bahut supportive hain. Mere bete ko maths mein problem thi — teacher ne alag se time diya aur samjhaya. Ab uski marks improve ho gayi hain. Bahut khushi hui.',
    initial: 'S',
    color: 'bg-blue-500',
  },
  {
    name: 'Rajesh Yadav',
    child: 'Papa — Priya, Class 7',
    location: 'Palwal',
    stars: 5,
    text: 'School ka environment safe hai. Main subah kaam par jaata hoon — mujhe tension nahi hoti ki meri beti school mein theek hai ya nahi. CCTV bhi hai, teachers bhi caring hain.',
    initial: 'R',
    color: 'bg-green-500',
  },
  {
    name: 'Meena Gupta',
    child: 'Maa — Arjun, Class 3',
    location: 'Palwal',
    stars: 5,
    text: 'Fees reasonable hain aur school quality mein koi compromise nahi. Mere pados wale ki bhi beti padhti hai idhar. Unse suna tha, tabhi maine bhi yahan dakhila karaya.',
    initial: 'M',
    color: 'bg-amber-500',
  },
  {
    name: 'Vikas Narwal',
    child: 'Papa — Tanvi, Nursery',
    location: 'Rajiv nagar , Palwal',
    stars: 5,
    text: 'Nursery mein dakhila karaya tha — bachchi roz khushi se jaati hai school. Teachers bahut pyaar se rakhti hain chote bachhon ko. Ghar wapas aake sab kuch sunati hai. Acha lag raha hai.',
    initial: 'V',
    color: 'bg-purple-500',
  },
  {
    name: 'Anita Devi',
    child: 'Maa — Rohit, Class 9',
    location: 'Palwal',
    stars: 5,
    text: 'Class 9 ke baad mujhe dar tha board ki preparation ka. Lekin school ne extra classes bhi lagate hain. Teachers ka phone bhi available hota hai. Bohot confidence aaya hai mere bete ko.',
    initial: 'A',
    color: 'bg-red-400',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < count ? 'text-amber-400' : 'text-gray-200'}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-amber-600 font-body font-bold text-sm uppercase tracking-widest">
            Parent Reviews
          </span>
          <h2 className="section-title mt-2 mb-3">
            Palwal ke Parents<br />
            <span className="text-amber-500">Kya Kehte Hain</span>
          </h2>
          <p className="section-sub max-w-xl mx-auto">
            Yeh hamari marketing nahi — real parents ki real baatein hain.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl shadow-lg p-8 md:p-10 relative"
            >
              <div className="text-5xl text-navy-100 font-heading font-bold absolute top-6 right-8 select-none">
                "
              </div>
              <StarRating count={testimonials[current].stars} />
              <p className="text-gray-700 font-body text-lg leading-relaxed mt-4 mb-6">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonials[current].color} flex items-center justify-center text-white font-heading font-bold text-xl flex-shrink-0`}>
                  {testimonials[current].initial}
                </div>
                <div>
                  <p className="font-heading font-bold text-navy-900">{testimonials[current].name}</p>
                  <p className="text-gray-400 text-sm font-body">{testimonials[current].child} · {testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="p-2 rounded-full border border-gray-300 hover:border-navy-600 hover:text-navy-600 transition-colors">
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === current ? 'bg-navy-800 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full border border-gray-300 hover:border-navy-600 hover:text-navy-600 transition-colors">
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => setCurrent(i)}
              className={`bg-white rounded-2xl p-4 cursor-pointer border-2 transition-all ${
                current === i ? 'border-navy-600 shadow-md' : 'border-transparent hover:border-gray-200'
              }`}
            >
              <StarRating count={t.stars} />
              <p className="text-gray-600 text-xs font-body mt-2 line-clamp-3">"{t.text}"</p>
              <p className="text-navy-900 font-bold text-xs font-body mt-3">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
