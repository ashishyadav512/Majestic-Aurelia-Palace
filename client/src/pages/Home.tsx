import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import Introduction from "@/components/Introduction";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Dining from "@/components/Dining";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          e.preventDefault();
          
          // Account for fixed header
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Sticky header effect
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 100) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <MobileNav />
      <main>
        <div className="relative">
          <Hero />
          <BookingWidget />
        </div>
        <Introduction />
        <Rooms />
        <Amenities />
        <Dining />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
