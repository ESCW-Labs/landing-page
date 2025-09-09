import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESCW Labs - Custom Software & App Development",
  description: "ESCW Labs is a technology partner that builds custom digital solutions for startups and businesses. Our services is web & mobile development, product design, and IT consulting.",
  metadataBase: new URL("https://escwlabs.com"),
  alternates: {
    canonical: "https://escwlabs.com",
    languages: {
      id: "https://escwlabs.com/",
      en: "https://escwlabs.com/",
    },
  },
  openGraph: {
    title: "ESCW Labs - Custom Software & App Development",
    description:
      "Build impactful digital solutions with ESCW Labs: custom software, web & mobile apps, product design, cloud, and IT consulting.",
    url: "https://escwlabs.com/",
    siteName: "ESCW Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      {/* JSON-LD Schema.org for Organization + Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ESCW Labs",
            url: "https://escwlabs.com/",
            logo: "https://escwlabs.com/images/logo/logo.png",
            description:
              "ESCW Labs is a technology partner that helps individuals, startups, and businesses build impactful digital products—from idea to execution.",
            sameAs: [
              "https://www.linkedin.com/company/escwlabs",
              "https://www.instagram.com/escwlabs",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "info@escwlabs.com",
              availableLanguage: ["id", "en"],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "ESCW Labs Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web & Mobile Application Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Design" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & System Integration" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Support & Maintenance" } },
              ],
            },
          }),
        }}
      />

      <Hero />
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
    </main>
  );
}