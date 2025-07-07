import image1 from "../assets/boardMember/uttam.png";

// Helper function to generate WhatsApp links
function getWhatsAppLink(phone) {
  const cleaned = phone.replace(/\D/g, "");
  return `https://wa.me/${cleaned}`;
}

export const teamMembers = [
  {
    id: 1,
    name: "Uttam Gopali",
    designation: "Chairman",
    email: "sarah@wealthbridge.com",
    phone: "+9779851182568",
    imageUrl: image1,
    bio: "With over 10 years in Co-oprative",
    social: {
      facebook: "https://linkedin.com/in/sarahjohnson",
      whatsapp: getWhatsAppLink("+9779851182568"),
      instagram: "https://instagram.com/sarahj_finance",
    },
    expertise: ["Strategic Planning", "Wealth Management", "Corporate Finance"],
  },
  // Update other members similarly
  {
    id: 2,
    name: "Michael Chen",
    designation: "Chief Investment Officer",
    email: "michael@wealthbridge.com",
    phone: "+1 (555) 234-5678",
    imageUrl: image1,
    bio: "Michael leads our investment strategy...",
    social: {
      facebook: "https://linkedin.com/in/michaelchen",
      whatsapp: getWhatsAppLink("+1 (555) 234-5678"),
      instagram: "https://instagram.com/michaelc_finance",
    },
    expertise: ["Portfolio Management", "Asset Allocation", "Risk Analysis"],
  },
  // Repeat for other members...
  {
    id: 3,
    name: "Michael Chen",
    designation: "Chief Investment Officer",
    email: "michael@wealthbridge.com",
    phone: "+1 (555) 234-5678",
    imageUrl: image1,
    bio: "Michael leads our investment strategy...",
    social: {
      facebook: "https://linkedin.com/in/michaelchen",
      whatsapp: getWhatsAppLink("+1 (555) 234-5678"),
      instagram: "https://instagram.com/michaelc_finance",
    },
    expertise: ["Portfolio Management", "Asset Allocation", "Risk Analysis"],
  },
  {
    id: 4,
    name: "Michael Chen",
    designation: "Chief Investment Officer",
    email: "michael@wealthbridge.com",
    phone: "+1 (555) 234-5678",
    imageUrl: image1,
    bio: "Michael leads our investment strategy...",
    social: {
      facebook: "https://linkedin.com/in/michaelchen",
      whatsapp: getWhatsAppLink("+1 (555) 234-5678"),
      instagram: "https://instagram.com/michaelc_finance",
    },
    expertise: ["Portfolio Management", "Asset Allocation", "Risk Analysis"],
  },
  {
    id: 5,
    name: "Michael Chen",
    designation: "Chief Investment Officer",
    email: "michael@wealthbridge.com",
    phone: "+1 (555) 234-5678",
    imageUrl: image1,
    bio: "Michael leads our investment strategy...",
    social: {
      facebook: "https://linkedin.com/in/michaelchen",
      whatsapp: getWhatsAppLink("+1 (555) 234-5678"),
      instagram: "https://instagram.com/michaelc_finance",
    },
    expertise: ["Portfolio Management", "Asset Allocation", "Risk Analysis"],
  },
  {
    id: 6,
    name: "Michael Chen",
    designation: "Chief Investment Officer",
    email: "michael@wealthbridge.com",
    phone: "+1 (555) 234-5678",
    imageUrl: image1,
    bio: "Michael leads our investment strategy...",
    social: {
      facebook: "https://linkedin.com/in/michaelchen",
      whatsapp: getWhatsAppLink("+1 (555) 234-5678"),
      instagram: "https://instagram.com/michaelc_finance",
    },
    expertise: ["Portfolio Management", "Asset Allocation", "Risk Analysis"],
  },
  {
    id: 7,
    name: "Michael Chen",
    designation: "Chief Investment Officer",
    email: "michael@wealthbridge.com",
    phone: "+1 (555) 234-5678",
    imageUrl: image1,
    bio: "Michael leads our investment strategy...",
    social: {
      facebook: "https://linkedin.com/in/michaelchen",
      whatsapp: getWhatsAppLink("+1 (555) 234-5678"),
      instagram: "https://instagram.com/michaelc_finance",
    },
    expertise: ["Portfolio Management", "Asset Allocation", "Risk Analysis"],
  },
];
