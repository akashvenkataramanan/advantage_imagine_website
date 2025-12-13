"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Lightbulb, BookOpen } from "lucide-react";
import { BLOG_CATEGORIES } from "@/lib/blog";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const iconMap: { [key: string]: any } = {
  FileText,
  Lightbulb,
  BookOpen,
};

export default function BlogPage() {
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
              Radiology Insights & Education
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Case discussions, imaging insights, and patient education from our expert team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Blog Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {BLOG_CATEGORIES.map((category, index) => {
              const IconComponent = iconMap[category.icon] || FileText;
              return (
                <motion.div
                  key={category.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{category.title}</h3>
                  <p className="text-[var(--foreground-muted)]">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center bg-[var(--background-alt)] rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Blog Posts Coming Soon</h2>
            <p className="text-[var(--foreground-muted)] text-lg max-w-2xl mx-auto">
              We're preparing insightful case discussions, radiology insights, and patient education content.
              Check back soon for valuable information from our expert radiologists!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
