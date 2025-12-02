"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Heart, User, Users, Stethoscope } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const healthPackages = [
  {
    name: "Health Check Basic",
    icon: Stethoscope,
    description: "Essential screening for overall health",
    includes: [
      "Complete Blood Count with ESR",
      "Glucose (Fasting/HbA1c/Post Prandial)",
      "Thyroid Free T4/TSH",
      "Serum Calcium",
      "Liver Function Test",
      "Lipid Profile",
      "Renal Function Test",
      "Urine Routine",
      "Chest X-Ray + ECG + USG",
      "Physician & Surgical Consultation",
    ],
    color: "blue",
  },
  {
    name: "Heart Check",
    icon: Heart,
    description: "Comprehensive cardiac assessment",
    includes: [
      "Complete Blood Count with ESR",
      "Glucose (Fasting/HbA1c/Post Prandial)",
      "Thyroid Free T4/TSH",
      "Serum Calcium, Liver & Lipid Profile",
      "Renal Function Test",
      "ECG",
      "Coronary CT Angiogram",
      "Chest CT",
      "Echocardiogram",
      "Physician Consultation",
    ],
    color: "red",
    highlight: true,
  },
  {
    name: "Whole Body Check",
    icon: User,
    description: "Complete health screening with MRI",
    includes: [
      "Complete Blood Count with ESR",
      "Glucose (Fasting/HbA1c/Post Prandial)",
      "Thyroid Free T4/TSH",
      "Serum Calcium",
      "Liver Function Test, Lipid Profile",
      "Renal Function Test",
      "Urine Routine",
      "Chest X-Ray + ECG + USG",
      "Whole Body MRI",
      "Physician & Surgical Consultation",
    ],
    color: "purple",
    highlight: true,
  },
  {
    name: "Men <50 Advanced",
    icon: User,
    description: "Tailored for men under 50",
    includes: [
      "Complete Blood Count with ESR",
      "Glucose (Fasting/HbA1c/Post Prandial)",
      "Thyroid Free T4/TSH, Serum Calcium",
      "Liver Function Test, Lipid Profile",
      "Renal Function Test",
      "Vitamin D / Vitamin B12",
      "Urine Routine",
      "Chest X-Ray + ECG + USG",
      "Physician & Surgical Consultation",
    ],
    color: "blue",
  },
  {
    name: "Men >50 Advanced",
    icon: User,
    description: "Comprehensive screening for men over 50",
    includes: [
      "Complete Blood Count with ESR",
      "Glucose (Fasting/HbA1c/Post Prandial)",
      "Thyroid Free T4/TSH, Serum Calcium",
      "Liver Function Test, Lipid Profile",
      "Renal Function Test",
      "Vitamin D / Vitamin B12",
      "PSA (Prostate Specific Antigen)",
      "Urine Routine",
      "Chest X-Ray + ECG + USG",
      "Physician & Surgical Consultation",
    ],
    color: "teal",
  },
  {
    name: "Women Intermediate",
    icon: Users,
    description: "Essential women's health screening",
    includes: [
      "Complete Blood Count with ESR",
      "Glucose (Fasting/HbA1c/Post Prandial)",
      "Free T4/TSH, Serum Calcium",
      "Liver Function Test, Lipid Profile",
      "Renal Function Test",
      "Urine Routine",
      "PAP Smear (LBC Method)",
      "Chest X-Ray + ECG + USG",
      "Physician, Gynaec & Surgical Consultation",
    ],
    color: "pink",
  },
  {
    name: "Women Advanced",
    icon: Users,
    description: "Comprehensive women's health screening",
    includes: [
      "Complete Blood Count with ESR",
      "Glucose (Fasting/HbA1c/Post Prandial)",
      "Free T4/TSH, Serum Calcium",
      "Liver Function Test, Lipid Profile",
      "Renal Function Test",
      "Vitamin D / Vitamin B12",
      "PAP Smear (LBC Method)",
      "Urine Routine",
      "Chest X-Ray + ECG + USG",
      "Physician & Surgical Consultation",
    ],
    color: "pink",
  },
  {
    name: "Back & Joint Pain",
    icon: Stethoscope,
    description: "Musculoskeletal assessment",
    includes: [
      "Complete Blood Count",
      "Glucose (Fasting)",
      "CRP / ASO / TSH / Calcium",
      "RA Factor / Albumin / ALP / PTH",
      "Blood Urea, Serum Creatinine",
      "Uric Acid, Vitamin D",
      "X-Ray (One Region)",
      "Orthopedic Consultation",
    ],
    color: "orange",
  },
];

export default function HealthCheckupsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--secondary-light)] font-medium mb-4"
            >
              Preventive Care
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Targeted Health Checkup{" "}
              <span className="text-[var(--secondary-light)]">Packages</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-white/90 mb-8">
              Comprehensive health screening packages designed for early detection
              and preventive care. Customized for different age groups, genders,
              and specific health concerns.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to know about health checkup packages at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Get Package Pricing
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Preventive Checkups */}
      <section className="py-16 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Detection",
                description: "Catch health issues before they become serious problems",
                icon: "🔍",
              },
              {
                title: "Peace of Mind",
                description: "Know your health status with comprehensive screening",
                icon: "💚",
              },
              {
                title: "Expert Analysis",
                description: "Reports by experienced radiologists with 30+ years expertise",
                icon: "👨‍⚕️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[var(--foreground-muted)] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Choose Your Health Package
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Select a package that suits your age, gender, and health requirements.
              Contact us on WhatsApp for current pricing and availability.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {healthPackages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden ${
                    pkg.highlight ? "ring-2 ring-[var(--primary)]" : ""
                  }`}
                >
                  <div className={`p-6 ${
                    pkg.color === "red" ? "bg-red-500" :
                    pkg.color === "purple" ? "bg-purple-500" :
                    pkg.color === "pink" ? "bg-pink-500" :
                    pkg.color === "teal" ? "bg-teal-500" :
                    pkg.color === "orange" ? "bg-orange-500" :
                    "bg-[var(--primary)]"
                  } text-white`}>
                    <IconComponent className="w-8 h-8 mb-3" />
                    <h3 className="font-bold text-xl">{pkg.name}</h3>
                    <p className="text-white/80 text-sm">{pkg.description}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-[var(--foreground-muted)] mb-4">
                      Package Includes:
                    </p>
                    <ul className="space-y-2">
                      {pkg.includes.slice(0, 6).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--foreground)]">{item}</span>
                        </li>
                      ))}
                      {pkg.includes.length > 6 && (
                        <li className="text-sm text-[var(--primary)] font-medium">
                          + {pkg.includes.length - 6} more items
                        </li>
                      )}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 bg-[var(--background-alt)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Transparent, Competitive Pricing
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] mb-8"
            >
              We believe in transparent pricing. Contact us on WhatsApp for
              current package rates and any customization you may need.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to get pricing for health checkup packages at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Get Price Estimate on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${CONTACT.phone[0]}`}
                className="inline-flex items-center gap-2 border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who Should Get Screened */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Who Should Get Screened?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Age 30+",
                description: "Annual basic health checks help establish baseline health metrics",
                icon: "📅",
              },
              {
                title: "Family History",
                description: "Those with family history of heart disease, diabetes, or cancer",
                icon: "👨‍👩‍👧‍👦",
              },
              {
                title: "Lifestyle Factors",
                description: "Smokers, sedentary lifestyle, or high-stress professionals",
                icon: "🏃",
              },
              {
                title: "Post 50",
                description: "Comprehensive cardiac and cancer screening becomes essential",
                icon: "❤️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[var(--foreground-muted)] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Take Control of Your Health Today
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Early detection saves lives. Book your health checkup at Advantage Imaging
              and get expert analysis from our experienced team.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to book a health checkup at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Book Your Health Checkup
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
