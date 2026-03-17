import RSVP from "@/components/common/RSVP";
import Countdown from "@/components/sections/home/Countdown";
import Destiny from "@/components/sections/home/Destiny";
import FAQ from "@/components/sections/home/FAQ";
import Hearts from "@/components/sections/home/Hearts";
import HomeHeroSection from "@/components/sections/home/HomeHeroSection";
import Itinerary from "@/components/sections/home/Itinerary";
import Line from "@/components/sections/home/Line";
import WeddingHero from "@/components/sections/home/WeddingHero";
import WebPageSchema from "@/components/seo/WebPageSchema";
import { Const } from "@/components/utils/Constants";

export const metadata = {
  title: " Laiqa & Rabeel Wedding | Official Wedding Website",
  description:
    "Join us in celebrating the wedding of  Laiqa & Rabeel. Explore the event details, itinerary, venue information, and RSVP for our special day.",

  keywords: [
    "Sonal and Kush wedding",
    "Sonal Kush marriage",
    "Indian wedding website",
    "Wedding itinerary",
    "Wedding RSVP",
    "Wedding venue details",
    "Wedding celebration India",
  ],

  robots: "index, follow",

  openGraph: {
    title: " Laiqa & Rabeel | Official Website",
    description:
      "Celebrate the wedding of  Laiqa & Rabeel. Find itinerary, venue details, hotel information & RSVP.",
    url: "https://www.sonalskushie.com",
    siteName: " Laiqa & Rabeel Wedding",
    type: "website",
    images: [
      {
        url: "https://www.sonalskushie.com/imgs/logo/og.png",
        width: 1200,
        height: 630,
        alt: " Laiqa & Rabeel Wedding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: " Laiqa & Rabeel Wedding",
    description:
      "Official wedding website of  Laiqa & Rabeel. RSVP and explore event details.",
    images: ["https://www.sonalskushie.com/imgs/logo/og.png"],
  },
};

export default function Home() {
  return (
    <>
      <WebPageSchema
        name=" Laiqa & Rabeel Wedding | Official Wedding Website"
        description="Welcome to the official wedding website of  Laiqa & Rabeel. Join us in celebrating our special day and explore event details, itinerary, venue information, and RSVP updates."
        url={`${Const.ClientLink}/`}
      />
      <HomeHeroSection />
      <WeddingHero />
      <Line />
      <Countdown />
      <Hearts />
      <Destiny />
      {/* <Itinerary /> */}
      {/* <FAQ /> */}
    </>
  );
}
