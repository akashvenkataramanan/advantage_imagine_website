"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GALLERY_CATEGORIES, BASE_PATH } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof GALLERY_CATEGORIES>("equipment");
  const categories = Object.keys(GALLERY_CATEGORIES) as (keyof typeof GALLERY_CATEGORIES)[];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our state-of-the-art facility, advanced equipment, and caring team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-[var(--primary)] text-white shadow-lg"
                    : "bg-white text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)]/10"
                }`}
              >
                {GALLERY_CATEGORIES[category].title}
              </button>
            ))}
          </div>

          {/* Category Description */}
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-3">
              {GALLERY_CATEGORIES[activeCategory].title}
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg">
              {GALLERY_CATEGORIES[activeCategory].description}
            </p>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            key={`grid-${activeCategory}`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {GALLERY_CATEGORIES[activeCategory].images.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Image
                  src={`${BASE_PATH}${image.src}`}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
