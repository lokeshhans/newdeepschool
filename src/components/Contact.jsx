import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPhone, FiMapPin, FiMail, FiSend, FiCheck } from 'react-icons/fi'

const WHATSAPP = 'https://wa.me/919813279231?text=Hello%2C%20main%20New%20Deep%20Public%20School%20mein%20admission%20ke%20baare%20mein%20jaanna%20chahta%20hoon.'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', phone: '', childClass: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
  e.preventDefault();

  const msg = `Hello, main ${form.name} bol raha hoon.
Phone: ${form.phone}
Class: ${form.childClass || "Not specified"}
Message: ${form.message || "No message"}

Mujhe admission ke baare mein jaankari chahiye.`;

  const url = `https://wa.me/919813279231?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");

  setStatus('success');

  setForm({
    name: '',
    phone: '',
    childClass: '',
    message: ''
  });
};

  return (
    <section id="contact" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-amber-600 font-body font-bold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="section-title mt-2 mb-3">
            Admission ke liye<br />
            <span className="text-amber-500">Contact Karein</span>
          </h2>
          <p className="section-sub max-w-xl mx-auto">
            👉 Seats limited hain — aaj hi enquiry karein.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5 mb-8">
              <a href="tel:9813279231" className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-navy-200 hover:bg-navy-50 transition-all group">
                <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-navy-200 transition-colors">
                  <FiPhone className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <p className="font-body font-bold text-navy-900">Call Us</p>
                  <p className="text-amber-600 font-bold text-lg font-body">9813279231</p>
                  <p className="text-gray-400 text-xs font-body">Mon–Sat: 8AM – 4PM</p>
                </div>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <p className="font-body font-bold text-navy-900">WhatsApp</p>
                  <p className="text-green-600 font-bold text-lg font-body">+91 98132 79231</p>
                  <p className="text-gray-400 text-xs font-body">Quick replies — anytime</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <p className="font-body font-bold text-navy-900">Visit Us</p>
                  <p className="text-gray-600 font-body text-sm leading-relaxed">
                    New Deep Public School<br />
                    Palwal, Haryana — 121102
                  </p>
                  <a
                    href="https://maps.google.com/?q=Palwal+Haryana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 text-xs font-body font-bold hover:underline mt-1 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-48">
              <iframe
                title="School Location"
                src="https://maps.google.com/maps?q=Palwal,Haryana&output=embed&z=13"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-3xl p-6 md:p-8"
          >
            <h3 className="font-heading font-bold text-navy-900 text-xl mb-6">
              Send Enquiry
            </h3>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-heading font-bold text-navy-900 text-xl mb-2">Enquiry Bhej Di!</h4>
                <p className="text-gray-500 font-body text-sm">
                  Hum jald hi aapko call ya WhatsApp karenge. Shukriya!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-navy-700 text-sm font-body font-bold hover:underline"
                >
                  Ek aur bhejein →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-600 font-body mb-1.5">
                    Aapka Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Parent ya Guardian ka naam"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none font-body text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 font-body mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Apna mobile number daalein"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none font-body text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 font-body mb-1.5">
                    Bachche ki Class
                  </label>
                  <select
                    name="childClass"
                    value={form.childClass}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none font-body text-sm transition-all bg-white"
                  >
                    <option value="">Class select karein</option>
                    {['Nursery', 'KG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
                      'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 font-body mb-1.5">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Koi bhi sawal ho toh yahan likhein..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-100 outline-none font-body text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-base py-3.5"
                >
                  {status === 'loading' ? (
                    <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Enquiry Bhejein
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 font-body">
                  Ya seedha call karein:{' '}
                  <a href="tel:9813279231" className="text-amber-600 font-bold">9813279231</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
