// Contact Information
export const CONTACT = {
  phone: ["+91-7305310444", "+91-7305320444", "+91-7305360444"],
  landline: "044-42132764",
  email: "advantageimaging@yahoo.com",
  whatsapp: "917305310444",
  address: {
    line1: "No. 178, Royapettah High Road",
    line2: "Mylapore, Chennai - 600004",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
  },
  hours: {
    weekdays: "7:00 AM - 9:00 PM",
    sunday: "9:00 AM - 7:00 PM",
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.26!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjAiTiA4MMKwMTUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin",
  googleMapsLink: "https://maps.google.com/?q=No.178+Royapettah+High+Road+Mylapore+Chennai",
};

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/equipment", label: "Equipment" },
  { href: "/contact", label: "Contact" },
];

// Founder Information
export const FOUNDER = {
  name: "Dr. Rochita Venkataramanan",
  title: "Founder & Chief Radiologist",
  image: "/images/doctor.jpg",
  qualifications: ["MD Radiology", "DNB Radiology"],
  experience: "30+ years",
  credentials: [
    "MD & DNB from Tata Memorial Hospital, Mumbai (1993)",
    "Pioneer of 64, 320 & 640 slice CT in India at Apollo Hospitals",
    "Former Director Clinical Radiology, Apollo Hospitals",
    "Founder & President, Indian Society of Gastrointestinal & Abdominal Radiology (ISGAR)",
    "Founder & Editor-in-Chief, Journal of Gastrointestinal & Abdominal Radiology (JGAR)",
    "Published 5 new radiology diagnostic signs in international journals",
  ],
  achievements: [
    {
      icon: "Award",
      title: "5 Radiology Signs",
      description: "Published new diagnostic signs used worldwide",
    },
    {
      icon: "Building2",
      title: "CT Pioneer",
      description: "Established first 64, 320 & 640 slice CT in India",
    },
    {
      icon: "BookOpen",
      title: "ISGAR Founder",
      description: "Founded national radiology society",
    },
    {
      icon: "FileText",
      title: "Journal Editor",
      description: "Editor-in-Chief of JGAR",
    },
  ],
};

// Mission Statement
export const MISSION = [
  "To provide accessible, high quality, cost effective Radiology imaging investigations to the community.",
  "To provide both basic as well as advanced Radiology investigations and Radiology subspecialty services cost effectively.",
  "To place utmost priority on the benefit of the patient and provide compassionate care to all patients.",
  "To serve the community with humility and hard work.",
  "To establish honest and transparent work ethics and provide an atmosphere of dignity, respect and encouragement to every individual working with us.",
  "To collaborate with clinical colleagues for medical research.",
  "To encourage creativity and innovation in the field of Radiology and Healthcare.",
];

// Equipment Data
export const EQUIPMENT = [
  {
    id: "ct-scanner",
    name: "160 Slice CT Scanner",
    tagline: "Cardiac CT in just 4 seconds",
    description: "High-speed cardiac and whole-body scanner with superior resolution detectors. Capable of capturing images of the beating heart and coronary arteries with exceptional clarity.",
    features: [
      "Complete heart scan in 4 seconds",
      "High resolution detectors for sharp images",
      "Works even with high heart rates",
      "Whole body scanning capability",
      "Low radiation dose technology",
    ],
    image: "/images/ct-scanner.jpg",
  },
  {
    id: "mri",
    name: "1.5T Wide Bore MRI",
    tagline: "Comfort meets precision",
    description: "Premium 1.5 Tesla MRI with 70cm wide bore design that significantly reduces claustrophobia. High gradient coils provide exceptionally detailed images of all body parts.",
    features: [
      "70cm wide bore - less claustrophobia",
      "Shorter tunnel design",
      "Dedicated coils for all body parts",
      "Whole body MRI for cancer detection",
      "High gradient for detailed imaging",
    ],
    image: "/images/mri.jpg",
  },
  {
    id: "ultrasound",
    name: "Digital Ultrasound",
    tagline: "Advanced imaging with elastography",
    description: "High-resolution ultrasound machines with shear wave elastography capability to assess liver fibrosis and other conditions non-invasively.",
    features: [
      "High resolution imaging",
      "Shear wave elastography",
      "Liver fibrosis detection",
      "All abdominal applications",
      "Doppler capability",
    ],
    image: "/images/ultrasound.jpg",
  },
  {
    id: "xray",
    name: "Digital X-Ray",
    tagline: "Full spine and full leg capability",
    description: "State-of-the-art digital X-ray with exceptional image quality and the capability for whole spine and whole lower limb imaging - invaluable for orthopedic assessment.",
    features: [
      "High X-ray quality",
      "Whole spine imaging",
      "Whole lower limb imaging",
      "Instant digital results",
      "Low radiation exposure",
    ],
    image: "/images/xray.jpg",
  },
];

// Services Data
export const SERVICES = {
  ct: {
    title: "CT Scan Services",
    icon: "Scan",
    description: "160 slice high-speed CT with cardiac and whole-body capability",
    categories: [
      {
        name: "Head & Neck",
        items: ["Brain Plain", "Brain Contrast", "Head 3D", "PNS", "Temporal Bones", "Orbits", "Neck Plain", "Neck Contrast", "Neck Angiogram"],
      },
      {
        name: "Chest",
        items: ["Chest Plain", "Chest Contrast", "Virtual Bronchoscopy", "Pulmonary Angiogram"],
      },
      {
        name: "Abdomen",
        items: ["Abdomen Plain", "Abdomen Two Phase", "Abdomen Triphasic", "CT Enterography", "Virtual Colonoscopy", "Liver Transplant Protocol", "KUB with Angiogram & Urogram"],
      },
      {
        name: "Musculoskeletal",
        items: ["Spine (Cervical/Dorsal/Lumbar)", "Whole Spine", "Bony Pelvis", "Joint Imaging", "Whole Lower Limb", "CT Myelogram"],
      },
      {
        name: "Vascular Imaging",
        items: ["Brain Angiogram", "Brain Perfusion", "Coronary Angiogram", "Coronary Calcium Scoring", "Aorta Angiogram", "Peripheral Angiogram", "TAVR/TMVR Protocol"],
      },
    ],
  },
  mri: {
    title: "MRI Services",
    icon: "CircleDot",
    description: "1.5T wide bore MRI with dedicated coils for all body parts",
    categories: [
      {
        name: "Brain & Spine",
        items: ["Brain Plain", "Brain Contrast", "Brain MR Angiogram", "Brain Perfusion", "Cervical Spine", "Dorsal Spine", "Lumbar Spine", "Whole Spine Survey"],
      },
      {
        name: "Body",
        items: ["Chest Plain/Contrast", "Cardiac MRI", "Abdomen Plain/Contrast", "MRCP", "Pelvis", "Prostate", "Rectal Cancer Staging"],
      },
      {
        name: "Specialized",
        items: ["Breast MRI", "Fetal MRI", "Whole Body MRI", "MR Angiogram (Aorta/Limbs)", "MR Venogram"],
      },
      {
        name: "Musculoskeletal",
        items: ["Knee Joint", "Shoulder Joint", "Hip Joint", "Ankle Joint", "Hand/Foot", "Soft Tissue"],
      },
    ],
  },
  ultrasound: {
    title: "Ultrasound & Doppler",
    icon: "Radio",
    description: "High resolution ultrasound with shear wave elastography",
    categories: [
      {
        name: "Ultrasound",
        items: ["Upper Abdomen", "Pelvis", "Transvaginal", "Breast", "Thyroid", "Neck", "Joints", "Soft Tissues"],
      },
      {
        name: "Doppler",
        items: ["Limb Arterial", "Limb Venous", "Carotid/Neck", "Renal", "Abdominal Aorta"],
      },
    ],
  },
  xray: {
    title: "Digital X-Ray",
    icon: "Layers",
    description: "High quality digital X-ray with full spine capability",
    categories: [
      {
        name: "Standard Views",
        items: ["Per View X-Ray", "Whole Spine", "Lower Extremity Standing"],
      },
    ],
  },
  clinical: {
    title: "Clinical Packages",
    icon: "Stethoscope",
    description: "Comprehensive multimodality evaluation packages",
    categories: [
      {
        name: "Evaluation Packages",
        items: ["Oncology Staging & Resectability", "Tumor Response Post Therapy", "Chronic Abdominal Pain", "Weight Loss Evaluation", "Anemia Evaluation", "Fever of Unknown Origin"],
      },
    ],
  },
  interventional: {
    title: "Interventional Procedures",
    icon: "Syringe",
    description: "Image-guided minimally invasive procedures",
    categories: [
      {
        name: "Procedures",
        items: ["CT/USG Guided Biopsy", "CT/USG Guided Drainage"],
      },
    ],
  },
};

// Statistics
export const STATS = [
  { value: "30+", label: "Years Experience" },
  { value: "160", label: "Slice CT Scanner" },
  { value: "1.5T", label: "MRI Power" },
  { value: "5", label: "Published Signs" },
];

// Trust Indicators
export const TRUST_INDICATORS = [
  {
    icon: "Award",
    title: "Inaugurated by Health Minister",
    description: "Tamil Nadu Health Minister Ma. Subramanian",
  },
  {
    icon: "GraduationCap",
    title: "Tata Memorial Trained",
    description: "India's premier cancer hospital",
  },
  {
    icon: "Building2",
    title: "Apollo Hospitals Pioneer",
    description: "Former Director Clinical Radiology",
  },
  {
    icon: "Globe",
    title: "International Recognition",
    description: "5 diagnostic signs used worldwide",
  },
];
