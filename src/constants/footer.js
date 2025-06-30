// lib/constants/footer.js
import { FaFacebookSquare } from "react-icons/fa";
export const FOOTER_DATA = {
  description: "Building a sustainable future through community cooperation. Together we thrive.",
  contact: {
    address: "123 Cooperative Way, Community City, CC 12345",
    phone: "+1 (555) 123-4567",
    email: "contact@cooperative.example",
  },
  links: [
    {
      title: "About Us",
      items: [
        { name: "Our Story", href: "/about" },
        { name: "Our Values", href: "/values" },
        { name: "Leadership", href: "/team" },
        { name: "Membership", href: "/join" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Financial Services", href: "/services/financial" },
        { name: "Community Programs", href: "/services/programs" },
        { name: "Education", href: "/services/education" },
        { name: "Resource Sharing", href: "/services/resources" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Blog & News", href: "/blog" },
        { name: "FAQs", href: "/faq" },
        { name: "Guides", href: "/resources" },
        { name: "Events", href: "/events" },
      ],
    },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Disclosures", href: "/disclosures" },
  ],
};

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com/cooperative",
    icon: <FaFacebookSquare />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/cooperative",
    icon: "twitter",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/cooperative",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/cooperative",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/cooperative",
    icon: "youtube",
  },
];