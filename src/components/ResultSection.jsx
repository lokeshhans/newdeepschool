import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 👉 Replace with your real student images
import s1 from "../assets/students/s1.webp";
import s2 from "../assets/students/s2.webp";
import s3 from "../assets/students/s3.webp";
import s4 from "../assets/students/s4.webp";
import s5 from "../assets/students/s5.webp";
import s6 from "../assets/students/s6.webp";
import s7 from "../assets/students/s7.webp";
import s8 from "../assets/students/s8.webp";
import s9 from "../assets/students/s9.webp";
import s10 from "../assets/students/s10.webp";
import s11 from "../assets/students/s11.webp";
import s12 from "../assets/students/s12.webp";
import s13 from "../assets/students/s13.webp";
import s14 from "../assets/students/s14.webp";
import s15 from "../assets/students/s15.webp";
import s16 from "../assets/students/s16.webp";
import s17 from "../assets/students/s17.webp";
import s18 from "../assets/students/s18.webp";
import s19 from "../assets/students/s19.webp";
import s20 from "../assets/students/s20.webp";
import s21 from "../assets/students/s21.webp";
import s22 from "../assets/students/s22.webp";
import s23 from "../assets/students/s23.webp";
import s24 from "../assets/students/s24.webp";
import s25 from "../assets/students/s25.webp";
import s26 from "../assets/students/s26.webp";

const students = [
  { name: "Umesh Pathak", marks: "476/500", percent: "95%", img: s1 },
  { name: "Ravinder Singh", marks: "473/500", percent: "94%", img: s2 },

  { name: "Manish", marks: "470/500", percent: "94%", img: s3 },
  { name: "Nitish", marks: "467/500", percent: "93%", img: s4 },
  { name: "Uma", marks: "465/500", percent: "93%", img: s5 },
  { name: "Raj", marks: "461/500", percent: "92%", img: s6 },
  { name: "Vishal", marks: "453/500", percent: "90%", img: s7 },
  { name: "Soniya", marks: "451/500", percent: "90%", img: s8 },
  { name: "Khushi", marks: "448/500", percent: "90%", img: s9 },

  { name: "Manoj Kumar", marks: "447/500", percent: "89%", img: s10 },
  { name: "Prachi", marks: "444/500", percent: "89%", img: s11 },
  { name: "Rajesh", marks: "444/500", percent: "89%", img: s12 },
  { name: "Ruhi", marks: "438/500", percent: "87%", img: s13 },
  { name: "Krishna", marks: "436/500", percent: "87%", img: s14 },
  { name: "Sanjana", marks: "433/500", percent: "86%", img: s15 },
  { name: "Rakesh", marks: "429/500", percent: "86%", img: s16 },

  { name: "Sparsh", marks: "428/500", percent: "86%", img: s17 },
  { name: "Uttam", marks: "426/500", percent: "85%", img: s18 },
  { name: "Vandna", marks: "422/500", percent: "84%", img: s19 },
  { name: "Kavita", marks: "421/500", percent: "84%", img: s20 },
  { name: "Manshi", marks: "421/500", percent: "84%", img: s21 },
  { name: "Ritika", marks: "421/500", percent: "84%", img: s22 },
  { name: "Suhani", marks: "419/500", percent: "83%", img: s23 },

  { name: "Paras", marks: "417/500", percent: "83%", img: s24 },
  { name: "Mohit", marks: "409/500", percent: "81%", img: s25 },
  { name: "Vanshika", marks: "400/500", percent: "80%", img: s26 },
];
export default function ResultSection() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % students.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? students.length - 1 : prev - 1));
  };

  const student = students[index];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10">
          Class 10th Result <br />
          <span className="text-amber-500">Session 2024–2025</span>
        </h2>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-10 text-3xl text-gray-400 hover:text-black"
          >
            ‹
          </button>

          {/* Animated Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) next();
                if (info.offset.x > 50) prev();
              }}
              className="bg-gray-50 rounded-3xl p-6 md:p-10 shadow-lg w-full max-w-md"
            >
              <img
                src={student.img}
                alt={student.name}
                loading="lazy"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-full object-cover mb-5 border-4 border-amber-400 transition-all duration-300"
              />

              <h3 className="text-xl font-bold text-navy-900">
                {student.name}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Marks: <b>{student.marks}</b>
              </p>

              <p className="text-green-600 font-bold text-lg mt-1">
                {student.percent}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Next Button */}
          <button
            onClick={next}
            className="absolute right-0 md:-right-10 text-3xl text-gray-400 hover:text-black"
          >
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {students.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-amber-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
