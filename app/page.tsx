import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Rooms from "@/components/sections/Rooms";
import Booking from "@/components/sections/Booking";
import Distance from "@/components/sections/Distance";
import Sightseeing from "@/components/sections/Sightseeing";
import Location from "@/components/sections/Location";
import Reviews from "@/components/sections/Reviews";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyChooseUs />
        <Rooms />
        <Booking />
        <Distance />
        <Sightseeing />
        <Location />
        <Reviews />
        <Faq />
      </main>
      <Footer />
      {/* Fixed FABs — rendered last so they paint above everything */}
      <FloatingActions />
    </>
  );
}
