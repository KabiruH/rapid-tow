export const schemaData = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  "@id": "https://www.rapidtowandrecovery.com",
  "name": "Rapid Tow Recovery Texas",
  "description": "24/7 emergency towing and roadside assistance services throughout Texas. Serving all major highways and cities with fast, reliable service for breakdowns, accidents, and roadside emergencies.",
  "url": "https://www.rapidtowandrecovery.com",
  "logo": "RPR.jpg",
  "image": "RPR.jpg",
  "telephone": "+1-888-673-7630",
  "email": "help@rapidtowandrecovery.com",
  "areaServed": [
    {
      "@type": "State",
      "name": "Texas",
      "containedInPlace": {
        "@type": "Country",
        "name": "United States"
      }
    },
    {
      "@type": "City",
      "name": "Houston",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Dallas",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Austin",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "San Antonio",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    },
    {
      "@type": "City",
      "name": "Fort Worth",
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.7604",
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
  "priceRange": "$-$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "USD",
  "availableLanguage": ["English", "Spanish"],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "31.9686",
      "longitude": "-99.9018"
    },
    "geoRadius": "350000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Towing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Towing",
          "description": "24/7 emergency towing services for all vehicle types across Texas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accident Recovery",
          "description": "Professional accident scene recovery and vehicle transport services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Breakdown Assistance",
          "description": "Roadside assistance for vehicle breakdowns including jump starts and fuel delivery"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tire Change Service",
          "description": "Fast tire change services for flats and blowouts on Texas roads and highways"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lockout Assistance",
          "description": "Vehicle lockout services when you're locked out of your car or truck"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Battery Jump Start",
          "description": "Battery jump start service for dead or discharged vehicle batteries"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fuel Delivery",
          "description": "Emergency fuel delivery when you run out of gas on Texas highways"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Winching",
          "description": "Vehicle winching and recovery from ditches, mud, and off-road situations"
        }
      }
    ]
  },
  "knowsAbout": [
    "Interstate 10 (I-10) in Texas",
    "Interstate 35 (I-35) in Texas",
    "Interstate 45 (I-45) in Texas",
    "Interstate 20 (I-20) in Texas",
    "Interstate 30 (I-30) in Texas",
    "US Highway 59 in Texas",
    "US Highway 290 in Texas",
    "US Highway 281 in Texas",
    "Texas State Highway Beltway 8",
    "Loop 610 Houston",
    "Texas roadside emergencies",
    "vehicle breakdowns in Texas",
    "emergency tire changes",
    "highway accident recovery",
    "Galveston Causeway assistance",
    "Sam Houston Tollway towing",
    "Dallas North Tollway assistance",
    "Austin Mopac Expressway breakdowns",
    "Houston Westpark Tollway",
    "San Antonio Loop 1604"
  ],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rapidtowandrecovery.com"
  },

  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "tel:+1-888-673-7630",
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/MobileWebPlatform",
        "http://schema.org/DesktopWebPlatform"
      ]
    },
    "result": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.rapidtowandrecovery.com",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+1-888-673-7630",
        "contactType": "emergency",
        "availableLanguage": ["English", "Spanish"],
        "areaServed": "Texas"
      }
    }
  }
} as const;