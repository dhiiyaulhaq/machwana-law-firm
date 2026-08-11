export const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",

  name: "Machwana Law Office",

  url: "https://machwanalawoffice.com",

  logo: "https://machwanalawoffice.com/logo.png",

  image:
    "https://machwanalawoffice.com/og-image.jpg",

  description:
    "Machwana Law Office provides strategic legal services in corporate law, litigation, bankruptcy, mergers & acquisitions, arbitration, and competition law.",


  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Jl. Pulo Raya V No.18",

    addressLocality:
      "Kebayoran Baru",

    addressRegion:
      "Jakarta Selatan, DKI Jakarta",

    postalCode:
      "12170",

    addressCountry:
      "ID",
  },


  geo: {
    "@type": "GeoCoordinates",

    latitude:
      "-6.246798693715479",

    longitude:
      "106.80750531010841",
  },


  telephone:
    "+62 811 8692 778",


  email:
    "info@machwanalawoffice.com",


  openingHoursSpecification: [
    {
      "@type":
        "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],

      opens:
        "08:30",

      closes:
        "17:30",
    },
  ],


  areaServed: {
    "@type":
      "Country",

    name:
      "Indonesia",
  },


  serviceType: [
    "Bankruptcy & Suspension of Payment",

    "Litigation & Dispute Resolution",

    "Merger & Acquisitions",

    "Arbitration & Alternative Dispute Resolution",

    "Competition Law",

    "Corporate & Commercial",
  ],


  sameAs: [
    "https://instagram.com/machwana.lawoffice",
  ],


  contactPoint: {
    "@type":
      "ContactPoint",

    telephone:
      "+62 811 8692 778",

    contactType:
      "Legal Consultation",

    availableLanguage: [
      "Indonesian",
      "English",
    ],
  },
};