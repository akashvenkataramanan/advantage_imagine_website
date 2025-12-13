// Base path for GitHub Pages deployment
export const BASE_PATH = '/advantage_imagine_website';

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
    weekdays: "8:00 AM - 8:00 PM",
    sunday: "By Appointment Only",
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.26!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjAiTiA4MMKwMTUnMzYuMCJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin",
  googleMapsLink: "https://maps.google.com/?q=No.178+Royapettah+High+Road+Mylapore+Chennai",
};

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/health-checkups", label: "Health Checkups" },
  { href: "/equipment", label: "Equipment" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
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
    "Published author of 5 new radiology diagnostic signs in international journals",
    "Founder & President, Indian Society of Gastrointestinal & Abdominal Radiology (ISGAR)",
    "Founder & Chief Editor, Journal of Gastrointestinal & Abdominal Radiology (JGAR)",
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
    name: "United Imaging uCT 780",
    tagline: "160-Slice CT with AI Positioning",
    description: "Advanced 160-slice CT scanner featuring 0.3-second rotation speed and AI-powered automatic positioning. Auto ALARA technology ensures the lowest possible radiation dose while maintaining exceptional image quality for cardiac, pediatric, and bariatric imaging.",
    features: [
      "160-slice coverage with 0.3s rotation speed",
      "Complete cardiac scan in just 4 seconds",
      "AI-powered automatic patient positioning",
      "Auto ALARA low-dose technology",
      "70 kVp scan mode for reduced radiation",
      "1024 x 1024 reconstruction matrix",
      "0.5mm collimation for fine detail",
      "Suitable for cardiac, pediatric & bariatric patients",
    ],
    specs: {
      slices: "160",
      rotation: "0.3 seconds",
      collimation: "0.5mm",
      matrix: "1024 x 1024",
      doseReduction: "Auto ALARA + 70kVp mode",
    },
    image: "/images/ct-scanner.jpg",
  },
  {
    id: "mri",
    name: "United Imaging uMR 570",
    tagline: "Super Fast 70cm Wide-Bore MRI for Anxiety-Free Scanning",
    description: "Premium 1.5 Tesla super fast MRI with industry-leading 70cm wide bore and short 150cm magnet length, designed specifically to reduce claustrophobia and anxiety. High gradient of 45 mT/m and exceptional slew rate of 200 T/m/s enable rapid, high-quality imaging. Supports patients up to 250kg with uCS Compressed Sensing for faster, more comfortable scans.",
    features: [
      "Super fast scanner with 200 T/m/s slew rate",
      "High gradient: 45 mT/m for superior imaging",
      "70cm extra-wide bore opening",
      "150cm short magnet - less enclosed feeling",
      "1.5 Tesla field strength",
      "Supports patients up to 250 kg",
      "uCS Compressed Sensing for faster scans",
      "Dedicated coils for all body parts",
      "Whole body MRI for cancer screening",
    ],
    specs: {
      bore: "70cm wide",
      length: "150cm short",
      fieldStrength: "1.5 Tesla",
      gradient: "45 mT/m",
      slewRate: "200 T/m/s",
      maxWeight: "250 kg",
    },
    image: "/images/mri.jpg",
  },
  {
    id: "ultrasound",
    name: "Digital Ultrasound with Elastography",
    tagline: "Advanced imaging with shear wave technology",
    description: "High-resolution ultrasound machines with shear wave elastography capability to assess liver fibrosis and other conditions non-invasively. Complete Doppler capabilities for vascular assessment.",
    features: [
      "High resolution imaging",
      "Shear wave elastography",
      "Non-invasive liver fibrosis assessment",
      "All abdominal applications",
      "Color & spectral Doppler capability",
      "Musculoskeletal imaging",
    ],
    image: "/images/ultrasound.jpg",
  },
  {
    id: "xray",
    name: "Digital X-Ray",
    tagline: "Full spine and full leg capability",
    description: "State-of-the-art digital X-ray with exceptional image quality and the capability for whole spine and whole lower limb imaging - invaluable for orthopedic assessment and pre-surgical planning.",
    features: [
      "High resolution digital imaging",
      "Whole spine imaging capability",
      "Whole lower limb imaging",
      "Instant digital results",
      "Low radiation exposure",
      "Orthopedic assessment ready",
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
};

// Statistics
export const STATS = [
  { value: "30+", label: "Years Experience" },
  { value: "160", label: "Slice CT Scanner" },
  { value: "1.5T", label: "MRI Power" },
];

// Trust Indicators
export const TRUST_INDICATORS = [
  {
    icon: "Award",
    title: "Inaugurated by Health Minister",
    description: "Honorable Tamil Nadu Health Minister M. H. Subramanian",
  },
  {
    icon: "GraduationCap",
    title: "Expert Founder & Chief Radiologist",
    description: "Founded and led by expert radiologist with 30+ years experience who is a published author, founder and president of Indian Society of Gastrointestinal and Abdominal Radiology (ISGAR), founder and chief editor of Journal of Gastrointestinal and Abdominal Radiology (JGAR)",
  },
];
// Gallery Categories
export const GALLERY_CATEGORIES = {
  equipment: {
    title: "State-of-the-Art Equipment",
    description: "Our advanced CT, MRI, and imaging technology",
    images: [
      { src: "/images/equipment/ct-scanner-1.jpg", alt: "160-slice CT Scanner Room" },
      { src: "/images/equipment/ct-scanner-2.jpg", alt: "CT Scanner - Advanced Imaging System" },
      { src: "/images/equipment/mri-1.jpg", alt: "1.5 Tesla Wide-Bore MRI Scanner" },
      { src: "/images/equipment/ultrasound-room.jpg", alt: "Ultrasound Examination Room" },
      { src: "/images/equipment/ct-scanner.jpg", alt: "CT Scanner - Patient Positioning" },
      { src: "/images/equipment/mri-machine.jpg", alt: "MRI Machine - Clinical Setup" },
    ],
  },
  facility: {
    title: "Our Beautiful Facility",
    description: "Healing environment with gardens and comfortable spaces",
    images: [
      { src: "/images/clinic/building-exterior.jpg", alt: "Advantage Imaging Building Exterior with Gardens" },
      { src: "/images/clinic/building-front.jpg", alt: "Main Building Entrance" },
      { src: "/images/clinic/clinic.jpg", alt: "Clinic Surrounded by Beautiful Gardens" },
      { src: "/images/clinic/spacious-waiting.jpg", alt: "Spacious and Cheerful Waiting Area" },
      { src: "/images/clinic/third-floor-waiting.jpg", alt: "Third Floor Waiting Hall" },
      { src: "/images/clinic/cheerful-interior.jpg", alt: "Cheerful Interior Design" },
      { src: "/images/clinic/waiting-hall.jpg", alt: "Comfortable Patient Waiting Area" },
    ],
  },
  team: {
    title: "Our Dedicated Team",
    description: "Expert radiologists, technicians, and caring staff",
    images: [
      { src: "/images/team/mission-team.jpg", alt: "Mission Team - Expert Radiologists" },
      { src: "/images/team/technician-team.jpg", alt: "Technical Team - Imaging Specialists" },
      { src: "/images/team/nursing-team.jpg", alt: "Nursing Team - Compassionate Care" },
      { src: "/images/doctor/founder.jpg", alt: "Dr. Rochita Venkataramanan - Founder & Chief Radiologist" },
    ],
  },
  scans: {
    title: "Sample Diagnostic Images",
    description: "High-quality scan examples showcasing our imaging capabilities",
    images: [
      { src: "/images/scans/coronary-toi.jpg", alt: "Coronary CT Angiography" },
      { src: "/images/scans/cardiac-mri.jpg", alt: "Cardiac MRI - Heart Imaging" },
      { src: "/images/scans/cardiac-scar-1.jpg", alt: "Cardiac MRI - Scar Assessment" },
      { src: "/images/scans/cardiac-scar-2.jpg", alt: "Cardiac MRI - Myocardial Scar" },
      { src: "/images/scans/ct-ffr.jpg", alt: "CT FFR - Coronary Flow Assessment" },
      { src: "/images/scans/brain-angiogram.jpg", alt: "MRI Brain with Angiogram" },
      { src: "/images/scans/brain-perfusion.jpg", alt: "MRI Brain with Perfusion Imaging" },
      { src: "/images/scans/mrcp.jpg", alt: "MRCP - Bile Duct Imaging" },
      { src: "/images/scans/breast-mri.jpg", alt: "Breast MRI - Cancer Screening" },
      { src: "/images/scans/lumbar-spine.jpg", alt: "MRI Lumbar Spine" },
      { src: "/images/scans/pelvis-mri.jpg", alt: "MRI Pelvis" },
      { src: "/images/scans/knee-joint.jpg", alt: "MRI Knee Joint" },
      { src: "/images/scans/shoulder-joint.jpg", alt: "MRI Shoulder Joint" },
      { src: "/images/scans/angiogram-limbs.jpg", alt: "Angiogram of Lower Limbs" },
      { src: "/images/scans/small-bowel-crohns.jpg", alt: "Small Bowel MRI - Crohn's Disease" },
      { src: "/images/scans/ca-esophagus.jpg", alt: "Esophageal Cancer Imaging" },
      { src: "/images/scans/ca-prostate-dwi.jpg", alt: "Prostate Cancer - DWI MRI" },
      { src: "/images/scans/ca-pancreas-dwi.jpg", alt: "Pancreatic Cancer - DWI MRI" },
    ],
  },
  inauguration: {
    title: "Inauguration Ceremony",
    description: "Inaugurated by Hon. Health Minister M. H. Subramanian",
    images: [
      { src: "/images/inauguration/womens-day-group.jpg", alt: "Inauguration Ceremony - Team Celebration" },
    ],
  },
};
