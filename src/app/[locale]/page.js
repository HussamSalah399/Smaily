import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Toaster />
    
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  );
}
