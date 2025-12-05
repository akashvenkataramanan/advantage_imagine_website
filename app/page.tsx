"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Award,
  GraduationCap,
  Building2,
  Globe,
  Scan,
  CircleDot,
  Radio,
  Layers,
  ArrowRight,
  CheckCircle,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { CONTACT, STATS, EQUIPMENT, SERVICES, FOUNDER, TRUST_INDICATORS, BASE_PATH } from "@/lib/constants";

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

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Award,
  GraduationCap,
  Building2,
  Globe,
  Scan,
  CircleDot,
  Radio,
  Layers,
  Stethoscope,
  Syringe,
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Image
                src={`${BASE_PATH}/images/logo/hero-logo.jpg`}
                alt="Advantage Imaging Logo"
                width={300}
                height={150}
                className="w-48 md:w-64 lg:w-80 h-auto"
                priority
              />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--secondary-light)] font-medium mb-4"
            >
              Welcome to Advantage Imaging
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Best CT & MRI Scan Center in{" "}
              <span className="text-[var(--secondary-light)]">Chennai</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 mb-8">
              Advanced 160-slice CT & 1.5T wide-bore MRI with a healing garden environment.
              Led by Expert and experienced radiologist with 30+ years experience. Anxiety-free scans in Mylapore.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to book a scan at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Book Your Scan
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to get a price estimate for scans at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Get Price Estimate
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {TRUST_INDICATORS.map((indicator, index) => {
              const IconComponent = iconMap[indicator.icon] || Award;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{indicator.title}</h3>
                  <p className="text-[var(--foreground-muted)] text-sm">
                    {indicator.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About the Center Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-[var(--secondary)] font-medium mb-2"
              >
                About Our Center
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Bringing High-End Radiology to{" "}
                <span className="text-[var(--primary)]">Every Patient</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[var(--foreground-muted)] mb-4">
                <strong className="text-[var(--primary)]">Inaugurated by Hon. Health Minister Ma. Subramanian</strong>,
                Advantage Imaging & Research Institute brings world-class radiology to the heart of Mylapore, Chennai.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-[var(--foreground-muted)] mb-6">
                High-end radiology machines are typically clustered within large corporate
                hospitals. Our center brings sophisticated equipment within reach of all &ndash;
                at affordable costs, without compromising on quality.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-3 mb-8">
                {[
                  "Advanced 160-slice CT and 1.5T wide-bore MRI",
                  "Detailed reports with images as roadmaps for clinicians",
                  "Wide bore MRI that reduces claustrophobia",
                  "HEPA filtered scan rooms for infection prevention",
                  "Beautiful garden environment for reduced anxiety",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground)]">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all"
                >
                  Learn More About Us
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Building Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Image
                src={`${BASE_PATH}/images/clinic/clinic.jpg`}
                alt="Advantage Imaging Center Building with flowering gardens"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
              <p className="text-center text-sm text-[var(--foreground-muted)]">
                Our center in Mylapore, surrounded by beautiful flowering gardens
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healing Environment Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-green-600 font-medium mb-2"
            >
              A Healing Environment
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Reducing Scan Anxiety with{" "}
              <span className="text-green-600">Nature</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Unlike cold, sterile imaging centers, Advantage Imaging offers a warm,
              nature-rich environment to help patients and families feel calm and relaxed.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Ground-Level Gardens</h3>
              <p className="text-[var(--foreground-muted)] text-sm">
                Beautiful flowering gardens surround our building, creating a
                welcoming first impression that eases anxiety before your scan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌺</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Rooftop Terrace Garden</h3>
              <p className="text-[var(--foreground-muted)] text-sm">
                Our 5th-floor terrace garden offers a peaceful retreat where
                patients and families can relax, enjoy tea, and unwind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Staff-Tended with Care</h3>
              <p className="text-[var(--foreground-muted)] text-sm">
                Our founder is a passionate gardener, and the Advantage Imaging
                team helps care for and maintain these healing green spaces.
              </p>
            </motion.div>
          </div>

          {/* Staff Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Image
              src={`${BASE_PATH}/images/clinic/cheerful-interior.jpg`}
              alt="Spacious and cheerful clinic environment at Advantage Imaging"
              width={1000}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto mx-auto max-w-4xl"
            />
            <p className="text-center text-sm text-[var(--foreground-muted)] mt-4">
              Our spacious and cheerful clinic designed for your comfort
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--secondary)] font-medium mb-2"
            >
              Our Equipment
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              State-of-the-Art Technology
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Advanced diagnostic imaging equipment that matches corporate hospital
              standards, now accessible to everyone.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {EQUIPMENT.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="h-40 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-4xl font-bold mb-1">
                      {index === 0 ? "160" : index === 1 ? "1.5T" : index === 2 ? "HD" : "DR"}
                    </div>
                    <div className="text-sm text-white/80">
                      {index === 0 ? "Slice CT" : index === 1 ? "MRI" : index === 2 ? "Ultrasound" : "X-Ray"}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-[var(--secondary)] text-sm font-medium mb-3">
                    {item.tagline}
                  </p>
                  <ul className="space-y-2">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]">
                        <CheckCircle className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Equipment Room Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Image
              src={`${BASE_PATH}/images/equipment/room.png`}
              alt="State-of-the-art scanning room at Advantage Imaging"
              width={1200}
              height={500}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
            >
              View All Equipment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--secondary)] font-medium mb-2"
            >
              Our Services
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Comprehensive Diagnostic Imaging
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              From routine scans to advanced subspecialty imaging, we offer a complete
              range of radiology services tailored to your needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(SERVICES).slice(0, 6).map(([key, service]) => {
              const IconComponent = iconMap[service.icon] || Scan;
              return (
                <motion.div
                  key={key}
                  variants={fadeInUp}
                  className="bg-white border border-[var(--border)] rounded-xl p-6 hover:shadow-lg hover:border-[var(--primary)]/20 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                    <IconComponent className="w-7 h-7 text-[var(--primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-[var(--foreground-muted)] text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.categories[0].items.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[var(--background-alt)] text-[var(--foreground-muted)] px-2 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                    {service.categories[0].items.length > 3 && (
                      <span className="text-xs text-[var(--primary)] font-medium">
                        +{service.categories[0].items.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Health Checkups Preview Section */}
      <section className="py-20 bg-[var(--background-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--secondary)] font-medium mb-2"
            >
              Preventive Care
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Targeted Health Checkup Packages
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Comprehensive health screening packages designed for early detection
              and preventive care. Customized for different age groups and health needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "Basic Health Check", desc: "CBC, Glucose, Thyroid, USG, X-Ray, ECG", icon: "🏥" },
              { name: "Heart Check", desc: "Coronary CT Angio, Echo, Full Cardiac Assessment", icon: "❤️" },
              { name: "Whole Body Check", desc: "Whole Body MRI, Complete Blood Work, Full Imaging", icon: "🔬" },
              { name: "Women's Health", desc: "Pap Smear, Mammography, Complete Screening", icon: "👩" },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{pkg.icon}</div>
                <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                <p className="text-[var(--foreground-muted)] text-sm mb-4">{pkg.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                "Hello, I would like to know about health checkup packages at Advantage Imaging."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Get Package Pricing on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Medical Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--secondary)] font-medium mb-2"
            >
              Medical Leadership
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Know Our Founder
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--background-alt)] rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={`${BASE_PATH}/images/doctor/doctor.png`}
                  alt={FOUNDER.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">{FOUNDER.name}</h3>
                  <p className="text-[var(--foreground-muted)]">{FOUNDER.title}</p>
                  <p className="text-[var(--secondary)] font-medium">
                    {FOUNDER.experience} Experience
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {FOUNDER.credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--primary)] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[var(--foreground)]">{credential}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all"
              >
                View Full Profile & Published Signs
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold">5 Published Radiology Signs</h3>
              <p className="text-[var(--foreground-muted)]">
                Dr. Rochita Venkataramanan has contributed five diagnostic signs to
                international radiology literature, now used by radiologists worldwide:
              </p>
              <div className="grid gap-4">
                {[
                  "Cluster of Black Pearls Sign - Identifies sarcoidosis vs cancer",
                  "Omental Rim Sign - Differentiates peritoneal cancer from TB",
                  "Leash Sign - Detects early extrauterine pregnancy",
                  "Cluster of Grape Sign - Distinguishes liver cancer from infection",
                  "Tunnel Sign - Identifies Fasciola hepatica infection",
                ].map((sign, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm text-[var(--foreground)]">{sign}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Book Your Scan?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Get expert radiology services at affordable costs. Contact us for
              transparent pricing and easy scheduling via WhatsApp.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to get a price estimate for scans at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center gap-2"
              >
                Get Price Estimate on WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${CONTACT.phone[0]}`}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {CONTACT.phone[0]}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-[var(--secondary)] font-medium mb-2"
              >
                Visit Us
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Located in the Heart of{" "}
                <span className="text-[var(--primary)]">Mylapore</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-[var(--foreground-muted)]">
                      {CONTACT.address.line1}
                      <br />
                      {CONTACT.address.line2}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-[var(--foreground-muted)]">
                      Monday–Saturday: {CONTACT.hours.weekdays}
                      <br />
                      Sunday: {CONTACT.hours.sunday}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-[var(--foreground-muted)]">
                      {CONTACT.phone.join(" / ")}
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--primary-dark)] transition-colors"
                >
                  Get Directions
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-[var(--background-alt)]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.26!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f1eb72a8eb%3A0x1234567890abcdef!2sRoyapettah%20High%20Rd%2C%20Mylapore%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Advantage Imaging Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
