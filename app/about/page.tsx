"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  BookOpen,
  Building2,
  FileText,
  GraduationCap,
  Users,
  Target,
  Heart,
  Lightbulb,
  Handshake,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { FOUNDER, MISSION, CONTACT, BASE_PATH } from "@/lib/constants";

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

export default function AboutPage() {
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
              About Us
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Bringing Expert Radiology to{" "}
              <span className="text-[var(--secondary-light)]">Everyone</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-white/90">
              Advantage Imaging & Research Institute was conceived with the objective of
              providing expert radiology services to the city of Chennai at reasonable costs,
              making high-end diagnostic imaging accessible to all.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold mb-6"
              >
                Our Story
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--foreground-muted)] mb-6"
              >
                Radiology is a relatively young branch of Medicine. Its history began in 1895
                when Wilhelm Roentgen took the first X-ray. This branch is dependent upon
                advances in the fields of engineering and computers. Recent years have seen
                dramatic improvements in various modalities used to scan the human body.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--foreground-muted)] mb-6"
              >
                Today&apos;s Radiologist needs to perform scans on complex machines and interpret
                the thousands of sections obtained with the help of dedicated software on fast
                computers. At Advantage Imaging, our team of Radiologists and technologists
                are highly skilled at such tasks with resultant improved accuracy.
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="text-[var(--foreground-muted)] mb-6"
              >
                All high-end radiology machines are typically clustered within large corporate
                hospitals, making them out of reach for the common man. Our center has placed
                sophisticated radiology equipment within the reach of all, in the heart of
                Chennai. This also benefits small and medium-sized hospitals and nursing homes.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <p className="font-semibold text-[var(--primary)] mb-3">
                  Inaugurated by Tamil Nadu Health Minister
                </p>
                <p className="text-[var(--foreground-muted)]">
                  Advantage Imaging & Research Institute was recently inaugurated by
                  Thiru Ma. Subramanian, Health Minister of Tamil Nadu, in the presence
                  of Dha. Velu, MLA of Mylapore.
                </p>
              </motion.div>

              {/* Team Photo */}
              <motion.div variants={fadeInUp} className="mt-8">
                <Image
                  src={`${BASE_PATH}/images/about/mission.png`}
                  alt="Our Team at Advantage Imaging"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
                <p className="text-center text-sm text-[var(--foreground-muted)] mt-3">
                  Our dedicated team of radiologists and technologists
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-[var(--background-alt)] rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-[var(--primary)]" />
                  Our Vision
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  Accurate and accessible radiology reports for all patients by highly
                  skilled Radiologists, improving patient care outcomes. Encouraging
                  innovative life-saving procedures and surgeries based on planning
                  and innovations in radiology imaging.
                </p>
              </div>
              <div className="bg-[var(--background-alt)] rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-[var(--secondary)]" />
                  What Sets Us Apart
                </h3>
                <ul className="space-y-3">
                  {[
                    "Tailored studies targeting specific disease conditions",
                    "Detailed reports with images as roadmaps for clinicians",
                    "Multidisciplinary collaboration for critical cases",
                    "Wide bore MRI that reduces claustrophobia",
                    "HEPA filtered scan rooms for infection prevention",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--foreground-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
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
              Leadership
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold"
            >
              Meet Our Founder
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <Image
                  src={`${BASE_PATH}/images/doctor/doctor.png`}
                  alt={FOUNDER.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold mb-2">{FOUNDER.name}</h3>
                <p className="text-[var(--foreground-muted)] mb-2">{FOUNDER.title}</p>
                <p className="text-[var(--secondary)] font-medium mb-4">
                  {FOUNDER.experience} Experience
                </p>
                <div className="flex justify-center gap-2 flex-wrap">
                  {FOUNDER.qualifications.map((qual, index) => (
                    <span
                      key={index}
                      className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {qual}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bio & Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold mb-4">Background</h4>
                <div className="space-y-4 text-[var(--foreground-muted)]">
                  <p>
                    Dr. Rochita Venkataramanan completed her undergraduate studies at the
                    prestigious Grant Medical College and Sir J J Group of Hospitals at Mumbai
                    in 1989. She was selected for postgraduate training in Radiology at the
                    Tata Memorial Hospital Mumbai, India&apos;s leading institution for Oncology.
                  </p>
                  <p>
                    She completed her MD as well as DNB in 1993. Her residency at the Tata
                    Memorial Hospital gave her deep insight into Oncology-related imaging and
                    a passion to help patients suffering from cancer.
                  </p>
                  <p>
                    In Chennai, she established the first 64 slice CT scan in India at the
                    Apollo Heart Centre in 2005. In 2008, she established the 320 slice CT
                    services, and in 2020 participated in establishing the only 640 slice
                    CT scan in India at Apollo Heart Centre.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "5 Radiology Signs",
                    description: "Published new diagnostic signs in international journals that are used by radiologists worldwide",
                  },
                  {
                    icon: Building2,
                    title: "CT Pioneer in India",
                    description: "Established first 64, 320, and 640 slice CT services in India at Apollo Hospitals",
                  },
                  {
                    icon: BookOpen,
                    title: "ISGAR Founder",
                    description: "Founded the Indian Society of Gastrointestinal and Abdominal Radiology (ISGAR)",
                  },
                  {
                    icon: FileText,
                    title: "JGAR Editor-in-Chief",
                    description: "Founded and leads the Journal of Gastrointestinal and Abdominal Radiology",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <h5 className="font-semibold mb-2">{item.title}</h5>
                    <p className="text-sm text-[var(--foreground-muted)]">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Published Signs Section */}
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
              Research Contributions
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Published Radiology Signs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Dr. Rochita Venkataramanan has published five new radiology signs in leading
              international journals. These signs help accurately diagnose specific diseases
              and are used by radiologists worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Cluster of Black Pearls Sign",
                description: "Helps identify sarcoidosis in lymph glands and differentiates this benign condition from cancerous nodes and tuberculosis on CT scan.",
              },
              {
                name: "Omental Rim Sign",
                description: "Differentiates abdominal peritoneal cancer from tuberculosis, crucial for accurate diagnosis and treatment planning.",
              },
              {
                name: "Leash Sign",
                description: "Identifies early extrauterine pregnancy on ultrasound doppler, a potentially life-threatening condition due to intra-abdominal bleeding.",
              },
              {
                name: "Cluster of Grape Sign",
                description: "Differentiates liver cancer from liver infection by a worm called Fasciola hepatica.",
              },
              {
                name: "Tunnel Sign",
                description: "Another sign for differentiating Fasciola hepatica infection from liver cancer, improving diagnostic accuracy.",
              },
            ].map((sign, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-[var(--border)] rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg mb-2">{sign.name}</h3>
                <p className="text-[var(--foreground-muted)] text-sm">{sign.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
              Our Purpose
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold"
            >
              Mission Statement
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {MISSION.map((item, index) => {
              const icons = [Target, Heart, Users, Handshake, GraduationCap, Users, Lightbulb];
              const IconComponent = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-sm flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <p className="text-[var(--foreground)]">{item}</p>
                </motion.div>
              );
            })}
          </motion.div>
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
              Experience Expert Care
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              With over 30 years of expertise, we&apos;re committed to providing you with
              accurate diagnoses and compassionate care.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Hello, I would like to book an appointment at Advantage Imaging."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Book an Appointment
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
