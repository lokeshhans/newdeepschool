import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import sports from "../assets/gallery/annual.webp";
import science from "../assets/gallery/science.webp";
import cultural from "../assets/gallery/cultural.webp";
import classroom from "../assets/gallery/classroom.webp";
import lab from "../assets/gallery/lab.webp";
import republic from "../assets/gallery/republic.webp";
import drawing from "../assets/gallery/drawing.webp";
import tour from "../assets/gallery/sport.webp";
import student from "../assets/gallery/student.webp";
import teacher from "../assets/gallery/teachers.webp";



export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { label: "Annual Sports Day", img: sports, span: "col-span-2 row-span-2" },
    { label: "Science Exhibition", img: science },
    { label: "Cultural Program", img: cultural },
    { label: "Classroom Activity", img: classroom },
    { label: "Computer Lab", img: lab },
    { label: "Republic Day", img: republic, span: "col-span-2" },
    { label: "Drawing Competition", img: drawing },
    { label: "Tour vrindavan", img: tour },
    { label: "Student", img: student },
    { label: "Teacher", img: teacher },

  ];

  const currentIndex = selectedImage
    ? galleryItems.findIndex((i) => i.label === selectedImage.label)
    : 0;

  const prev = () => {
    setSelectedImage(
      galleryItems[
        (currentIndex - 1 + galleryItems.length) % galleryItems.length
      ]
    );
  };

  const next = () => {
    setSelectedImage(
      galleryItems[(currentIndex + 1) % galleryItems.length]
    );
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-amber-600 font-bold text-sm uppercase tracking-widest">
            School Life
          </span>

          <h2 className="mt-2 mb-3 text-3xl md:text-4xl font-bold text-gray-900">
            A Glimpse Into Our <br />
            <span className="text-amber-500">Vibrant School Life</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            From classrooms to playgrounds — real moments from our school life.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              onClick={() => setSelectedImage(item)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span || ""}`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition">
                <p className="text-white text-sm font-semibold">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FULLSCREEN MODAL */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-5 text-white text-4xl"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-5 text-white text-4xl"
            >
              ›
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage.img}
              src={selectedImage.img}
              alt={selectedImage.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl"
            />

            {/* Label */}
            <p className="absolute bottom-6 text-white text-sm">
              {selectedImage.label}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}