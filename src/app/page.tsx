import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AnnouncementsEvents from "@/components/AnnouncementsEvents";
import Connect from "@/components/Connect";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <AnnouncementsEvents />
      <Connect />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
