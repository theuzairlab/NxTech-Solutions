export const HOMEPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.nxtechnova.com/#organization",
      "name": "NxTech Nova",
      "url": "https://www.nxtechnova.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nxtechnova.com/_next/image?url=%2Ficon.png&w=48&q=75",
        "caption": "NxTech Nova Logo"
      },
      "description": "NxTech Nova is a premier AI Marketing and Automation agency helping businesses scale with futuristic digital strategies.",
      "sameAs": [
        "https://www.facebook.com/people/Nxtech-Nova/61585957926987/",
        "https://x.com/Nxtechnova",
        "https://www.linkedin.com/company/nxtexhnova",
        "https://www.instagram.com/nxtechnova"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "url": "https://www.nxtechnova.com/contact",
        "contactType": "customer service"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nxtechnova.com/#website",
      "url": "https://www.nxtechnova.com/",
      "name": "NxTech Nova",
      "publisher": { "@id": "https://www.nxtechnova.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.nxtechnova.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.nxtechnova.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is AI Marketing at NxTech Nova and how does it benefit my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At NxTech Nova, AI Marketing goes beyond simple automation; we use proprietary AI models to decode customer behavior and automate precision decision-making for maximum ROI."
          }
        },
        {
          "@type": "Question",
          "name": "Will AI replace digital marketers in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. At NxTech Nova, we believe AI is the ultimate co-pilot, handling data heavy lifting while our strategists focus on creative strategy and human-centric storytelling."
          }
        },
        {
          "@type": "Question",
          "name": "How does NxTech Nova use AI to improve customer segmentation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use AI agents to analyze real-time behavioral patterns and intent data to create 'Hyper-Segments,' ensuring messages reach users when they are ready to convert."
          }
        },
        {
          "@type": "Question",
          "name": "What are the AI marketing agents developed by NxTech Nova?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our AI agents are autonomous systems designed to manage social media, nurture leads, and optimize ad spend 24/7 as a high-performance extension of your team."
          }
        },
        {
          "@type": "Question",
          "name": "Is AI marketing legit for small businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. NxTech Nova makes enterprise-level AI accessible, providing scalable solutions that allow small brands to out-compete industry giants."
          }
        }
      ]
    }
  ]
};

export const CONTACT_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.nxtechnova.com/#localbusiness",
      "name": "NxTech Nova",
      "image": "https://www.nxtechnova.com/wp-content/uploads/logo.png",
      "url": "https://www.nxtechnova.com",
      "telephone": "+44 7575 888810",
      "email": "Contact@nxtechnova.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "71-75 Shelton Street, Covent Garden",
        "addressLocality": "London",
        "postalCode": "WC2H 9JQ",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.5148", 
        "longitude": "-0.1235"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/nxtechnova",
        "https://www.linkedin.com/company/nxtechnova",
        "https://www.instagram.com/nxtechnova"
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.nxtechnova.com/contact/#webpage",
      "url": "https://www.nxtechnova.com/contact",
      "name": "Contact NxTech Nova | Global Digital Agency",
      "description": "Get in touch with NxTech Nova for expert SEO, Web Development, and AI Automation services. Global solutions delivered from our London hub.",
      "isPartOf": { "@id": "https://www.nxtechnova.com/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nxtechnova.com" },
          { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.nxtechnova.com/contact" }
        ]
      }
    }
  ]
};

export const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.nxtechnova.com/#organization",
      "name": "NxTech Nova",
      "url": "https://www.nxtechnova.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nxtechnova.com/wp-content/uploads/logo.png",
        "width": "600",
        "height": "60"
      },
      "description": "NxTech Nova is a premier digital agency specializing in AI automation, mobile app development, and strategic digital marketing to help businesses scale globally.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "71-75 Shelton Street, Covent Garden",
        "addressLocality": "London",
        "postalCode": "WC2H 9JQ",
        "addressCountry": "GB"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44 7575 888810",
        "contactType": "Customer Service",
        "email": "Contact@nxtechnova.com",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.facebook.com/nxtechnova",
        "https://www.linkedin.com/company/nxtechnova",
        "https://www.instagram.com/nxtechnova"
      ]
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.nxtechnova.com/about/#webpage",
      "url": "https://www.nxtechnova.com/about",
      "name": "About NxTech Nova | Our Mission & Tech Expertise",
      "description": "Learn about NxTech Nova's journey, our commitment to digital excellence, and how we leverage AI and modern technology to transform businesses.",
      "isPartOf": { "@id": "https://www.nxtechnova.com/#website" },
      "mainEntity": { "@id": "https://www.nxtechnova.com/#organization" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nxtechnova.com" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.nxtechnova.com/about" }
        ]
      }
    }
  ]
};

export const CASE_STUDIES_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.nxtechnova.com/case-studies/#webpage",
      "url": "https://www.nxtechnova.com/case-studies",
      "name": "Case Studies | NxTech Nova Real World Results",
      "description": "Explore our collection of case studies demonstrating how NxTech Nova helps businesses scale through AI automation, custom development, and data-driven marketing.",
      "isPartOf": { "@id": "https://www.nxtechnova.com/#website" },
      "about": {
        "@type": "Thing",
        "name": "Business Case Studies"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.nxtechnova.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Case Studies",
            "item": "https://www.nxtechnova.com/case-studies"
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.nxtechnova.com/#organization",
      "name": "NxTech Nova",
      "url": "https://www.nxtechnova.com"
    }
  ]
};

export const BLOG_LISTING_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://www.nxtechnova.com/blog/#blog",
      "name": "NxTech Nova Insights",
      "description": "Latest updates, guides, and insights on AI Automation, Web Development, and Digital Marketing from the NxTech Nova team.",
      "url": "https://www.nxtechnova.com/blog",
      "publisher": {
        "@id": "https://www.nxtechnova.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.nxtechnova.com/blog/#webpage",
      "url": "https://www.nxtechnova.com/blog",
      "name": "Blog | NxTech Nova",
      "isPartOf": { "@id": "https://www.nxtechnova.com/#website" },
      "description": "Official blog of NxTech Nova featuring expert articles on digital transformation and tech trends.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nxtechnova.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.nxtechnova.com/blog" }
        ]
      }
    }
  ]
};

export const PRIVACY_POLICY_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.nxtechnova.com/privacy-policy/#webpage",
      "url": "https://www.nxtechnova.com/privacy-policy",
      "name": "Privacy Policy | NxTech Nova",
      "description": "Our privacy policy outlines how NxTech Nova collects, uses, and protects your personal data in compliance with global standards.",
      "isPartOf": { "@id": "https://www.nxtechnova.com/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nxtechnova.com" },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.nxtechnova.com/privacy-policy" }
        ]
      }
    }
  ]
};

export const TERMS_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.nxtechnova.com/terms-of-service/#webpage",
      "url": "https://www.nxtechnova.com/terms-of-service",
      "name": "Terms and Conditions | NxTech Nova",
      "description": "Read the terms and conditions for using NxTech Nova's services, including our web development, SEO, and AI automation solutions.",
      "isPartOf": { "@id": "https://www.nxtechnova.com/#website" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nxtechnova.com" },
          { "@type": "ListItem", "position": 2, "name": "Terms and Conditions", "item": "https://www.nxtechnova.com/terms-of-service" }
        ]
      }
    }
  ]
};

export const SITE_NAVIGATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      "@id": "https://www.nxtechnova.com/#main-nav",
      "name": [
        "Home",
        "Services",
        "AI Automation",
        "Web Development",
        "Digital Marketing",
        "Case Studies",
        "Blog",
        "About Us",
        "Contact Us"
      ],
      "url": [
        "https://www.nxtechnova.com/",
        "https://www.nxtechnova.com/services",
        "https://www.nxtechnova.com/services/ai-automation-marketing",
        "https://www.nxtechnova.com/services/web-development",
        "https://www.nxtechnova.com/services/digital-marketing",
        "https://www.nxtechnova.com/case-studies",
        "https://www.nxtechnova.com/blog",
        "https://www.nxtechnova.com/about",
        "https://www.nxtechnova.com/contact"
      ]
    }
  ]
};

export const SEARCH_BOX_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.nxtechnova.com/#website",
  "url": "https://www.nxtechnova.com/",
  "name": "NxTech Nova",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.nxtechnova.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};
