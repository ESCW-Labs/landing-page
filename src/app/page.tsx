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
  title: "ESCW Labs — Memberdayakan Ide Melalui Inovasi Digital",
  description:
    "ESCW Labs adalah mitra teknologi untuk membangun produk digital berdampak: software development, web & mobile apps, product design, cloud integration, IT consulting, serta support & maintenance.",
  keywords: [
    "software development",
    "it consulting",
    "web development",
    "mobile app development",
    "cloud integration",
    "product design",
    "digital innovation",
  ],
  metadataBase: new URL("https://escwlabs.com"),
  alternates: {
    canonical: "https://escwlabs.com",
    languages: {
      id: "https://escwlabs.com/",
      en: "https://escwlabs.com/",
    },
  },
  openGraph: {
    title: "ESCW Labs — Memberdayakan Ide Melalui Inovasi Digital",
    description:
      "Bangun solusi digital berdampak bersama ESCW Labs: software, aplikasi web & mobile, desain produk, cloud, IT consulting, dan support.",
    url: "https://escwlabs.com/",
    siteName: "ESCW Labs",
    locale: "id_ID",
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
            logo: "https://escwlabs.com/images/logo.png",
            description:
              "ESCW Labs adalah mitra teknologi yang membantu individu, startup, dan bisnis membangun produk digital berdampak—dari ide hingga eksekusi.",
            sameAs: [
              "https://www.linkedin.com/company/escw-labs",
              "https://www.instagram.com/escwlabs",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "hello@escwlabs.com",
              availableLanguage: ["id", "en"],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Layanan ESCW Labs",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Development (Custom & Enterprise)" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web & Mobile Applications" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Design & Prototyping" } },
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
