import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const companySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Corvus Forge",
    "image": "https://corvus-forge.com/corvus-logo.png",
    "description": "Web studio building custom-coded landing pages with automated booking systems for local businesses.",
    "url": "https://corvus-forge.com",
    "priceRange": "$$",
    "sameAs": [
      "https://t.me/gestalter8",
      "https://www.instagram.com/corvus.forge/"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why clean code instead of WordPress or Tilda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WordPress and Tilda sites are bloated with unnecessary plugins and template code. We write everything by hand in pure HTML/CSS/JS. Our sites load in under 2 seconds, score 100% on Google PageSpeed, and have no vulnerable plugin chain to exploit. You own the code — no subscriptions, no lock-in."
        }
      },
      {
        "@type": "Question",
        "name": "How does the auto-booking work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depends on what fits your business. Some clients want a custom Telegram bot for bookings, others prefer Calendly or Cal.com — we set up whichever works best for your customers. Either way, it connects directly to the site, no manual follow-ups."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 7 to 14 days from brief to launch. We run one project at a time, so your task gets our full attention — not a slot between 12 other clients. Timeline depends on scope and how fast you provide content (text, photos)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I edit the content myself after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build clean, commented code and can set up a simple editing system. You can change prices, descriptions, and photos without risking the design or code structure. For ongoing updates, our Support + SEO plan covers it from €29/mo."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in Support + SEO at €29/mo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Blazing-fast hosting, regular content updates, ongoing speed optimization, local SEO management (Google Business, citations), and monthly performance reports. Your site stays live, fast, and visible — always."
        }
      }
    ]
  };

  const workSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Dmitry Kulish — Biomechanical Coaching",
          "url": "https://dklve-fit.com",
          "image": "https://corvus-forge.com/mock-kulish.webp",
          "description": "Custom-coded landing page for biomechanical coaching with automated booking integration."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Calix App — Minimalist Fitness Tracker",
          "url": "https://calyx-app.com/",
          "image": "https://corvus-forge.com/mock-calix.webp",
          "description": "Minimalist landing page design and front-end build for a fitness tracking application."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>Corvus Forge — Custom Websites with Automated Booking for Local Businesses</title>
      <meta name="description" content="Custom-coded landing pages with automated booking. No templates, no WordPress. Built for local businesses in 7-14 days." />
      <link rel="canonical" href="https://corvus-forge.com/" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://corvus-forge.com/" />
      <meta property="og:title" content="Corvus Forge — Custom Websites with Automated Booking for Local Businesses" />
      <meta property="og:description" content="Custom-coded landing pages with automated booking. No templates, no WordPress. Built for local businesses in 7-14 days." />
      <meta property="og:image" content="https://corvus-forge.com/og-image.svg" />
      <meta property="og:site_name" content="Corvus Forge" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://corvus-forge.com/" />
      <meta name="twitter:title" content="Corvus Forge — Custom Websites with Automated Booking for Local Businesses" />
      <meta name="twitter:description" content="Custom-coded landing pages with automated booking. No templates, no WordPress. Built for local businesses in 7-14 days." />
      <meta name="twitter:image" content="https://corvus-forge.com/og-image.svg" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(companySchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(workSchema)}
      </script>
    </Helmet>
  );
}
