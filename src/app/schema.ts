export const schemaData = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "@id": "https://rapidtowrecovery.co.ke",
    "name": "Rapid Tow Recovery Nairobi",
    "description": "24/7 emergency towing and roadside assistance services in Nairobi, Kenya",
    "url": "https://rapidtowrecovery.co.ke",
    "logo": "https://rapidtowrecovery.co.ke/logo.png",
    "image": "https://rapidtowrecovery.co.ke/building.jpg",
    "telephone": "+254-700-000000",
    "areaServed": {
      "@type": "City",
      "name": "Nairobi",
      "containedIn": "Nairobi County",
      "containedInPlace": {
        "@type": "Country",
        "name": "Kenya"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ngong Road",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.2921",
      "longitude": "36.8219"
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
      "https://facebook.com/rapidtowrecoverykenya",
      "https://twitter.com/rapidtowkenya",
      "https://instagram.com/rapidtowkenya"
    ],
    "priceRange": "KSh",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-1.2921",
        "longitude": "36.8219"
      },
      "geoRadius": "30000"
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