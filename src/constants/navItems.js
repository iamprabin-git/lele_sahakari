// constants/navItems.js
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  TOUR_ROUTE,
  TESTIMONIALS_ROUTE,
  CONTACT_ROUTE,
  GALLERY_ROUTE,
  SERVICES_ROUTE,
} from "./routes";

export const NAV_ITEMS = [
  { 
    id: 1, 
    title: "Home", 
    url: HOME_ROUTE 
  },
  { 
    id: 2, 
    title: "About", 
    url: ABOUT_ROUTE 
  },
  { 
    id: 3, 
    title: "Services",
    url: SERVICES_ROUTE,
    subItems: [
      {
        id: 31,
        title: "Deposits",
        url: "/services/deposits",
        subItems: [
          { id: 311, title: "Savings Accounts", url: "/services/deposits/savings" },
          { id: 312, title: "Fixed Deposits", url: "/services/deposits/fixed" },
          { id: 313, title: "Recurring Deposits", url: "/services/deposits/recurring" },
          { id: 314, title: "Current Accounts", url: "/services/deposits/current" },
        ]
      },
      {
        id: 32,
        title: "Loans",
        url: "/services/loans",
        subItems: [
          { id: 321, title: "Personal Loans", url: "/services/loans/personal" },
          { id: 322, title: "Home Loans", url: "/services/loans/home" },
          { id: 323, title: "Agricultural Loans", url: "/services/loans/agricultural" },
          { id: 324, title: "Business Loans", url: "/services/loans/business" },
        ]
      },
      {
        id: 33,
        title: "Remittance Services",
        url: "/services/remittance",
        subItems: [
          { id: 331, title: "Domestic Money Transfer", url: "/services/remittance/domestic" },
          { id: 332, title: "International Remittance", url: "/services/remittance/international" },
          { id: 333, title: "Mobile Wallet Services", url: "/services/remittance/mobile" },
          { id: 334, title: "Bill Payments", url: "/services/remittance/bill-payments" },
        ]
      },
      {
        id: 34,
        title: "Other Services",
        url: "/services/others",
        subItems: [
          { id: 341, title: "Insurance Products", url: "/services/others/insurance" },
          { id: 342, title: "Investment Schemes", url: "/services/others/investments" },
          { id: 343, title: "Credit Cards", url: "/services/others/credit-cards" },
          { id: 344, title: "Digital Banking", url: "/services/others/digital" },
        ]
      }
    ]
  },
  { 
    id: 4, 
    title: "Testimonials", 
    url: TESTIMONIALS_ROUTE 
  },
  { 
    id: 5, 
    title: "Gallery", 
    url: GALLERY_ROUTE 
  },
  { 
    id: 6, 
    title: "Contact", 
    url: CONTACT_ROUTE 
  },
];