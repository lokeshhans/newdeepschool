import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import principal from "../assets/principal.webp"

export default function PrincipalSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Image */}
          <div className="relative">
            <img
              src={principal}
              alt="Principal"
              className="rounded-3xl shadow-lg w-full object-top h-[420px]"
            />

            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow">
              Principal
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
              Principal's Message
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              A Message to Every Parent
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              “At our school, we believe every child has the potential to
              succeed. Our goal is not just to prepare students for exams, but
              to prepare them for life. We focus on discipline, strong values,
              and clear understanding of concepts.”
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              “We work closely with parents to ensure every child gets personal
              attention. Your child’s growth, safety, and confidence are always
              our top priorities.”
            </p>

            {/* Name + Role */}
            <div className="border-t pt-4">
              <p className="font-bold text-gray-900"> Mr. M. R.  Chaunam  </p>
              <p className="text-sm text-gray-500">
                Principal, New Deep Public School
              </p>
            </div>

            {/* Optional highlights */}
            <div className="flex gap-6 mt-6 text-sm text-gray-600">
              <div>
                <p className="font-bold text-amber-600">25+ Years</p>
                <p>Experience</p>
              </div>
              <div>
                <p className="font-bold text-amber-600">900+</p>
                <p>Students Guided</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
