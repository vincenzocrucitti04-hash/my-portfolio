import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import PhotoGallery from "@/components/PhotoGallery";
import Developer from "@/components/Developer";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutMe />
        <PhotoGallery />
        <Developer />
        <Projects />
        <Hobbies />
      </main>
      <Footer />
    </>
  );
}
