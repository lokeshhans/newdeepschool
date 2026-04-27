import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'

const WHATSAPP = 'https://wa.me/919813279231?text=Hello%2C%20main%20New%20Deep%20Public%20School%20mein%20admission%20ke%20baare%20mein%20jaanna%20chahta%20hoon.'

export default function StickyApply() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-white border-t border-gray-200 px-4 py-3 flex gap-3 shadow-2xl">
            <a
              href="tel:9813279231"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-navy-800 text-navy-800 font-bold py-3 rounded-xl font-body text-sm"
            >
              <FiPhone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-amber-500 text-white font-bold py-3 rounded-xl font-body text-sm"
            >
              🎓 Apply Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
