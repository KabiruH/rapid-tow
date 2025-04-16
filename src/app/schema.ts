export const schemaData = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  "@id": "https://www.rapidtowandrecovery.com",
  "name": "Rapid Tow Recovery Texas",
  "description": "24/7 emergency towing and roadside assistance services throughout Texas",
  "url": "https://www.rapidtowandrecovery.com",
  "logo": "RPR.png",
  "image": "RPR.jpg",
  "telephone": "+1-888-673-7630",
  "areaServed": {
    "@type": "State",
    "name": "Texas",
    "containedInPlace": {
      "@type": "Country",
      "name": "United States"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street", // Replace with actual address
    "addressLocality": "Houston", // Replace with your primary city
    "addressRegion": "TX",
    "postalCode": "77001", // Replace with actual postal code
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.7604", // Houston coordinates (update as needed)
    "longitude": "-95.3698"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://facebook.com/rapidtowrecoverytexas",
    "https://x.com/rapidtowtexas",
    "https://instagram.com/rapidtowtexas"
  ],
  "priceRange": "$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "31.9686", // Approximate center of Texas
      "longitude": "-99.9018"
    },
    "geoRadius": "350000" // Adjust based on your actual service area
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Towing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Towing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accident Recovery"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Breakdown Assistance"
        }
      }
    ]
  }
} as const;