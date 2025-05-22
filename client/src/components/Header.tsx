import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Toggle the 'open' class on the mobile nav element
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
      mobileNav.classList.toggle('open');
    }
  };

  return (
    <header className="fixed w-full z-50 bg-white bg-opacity-95">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="logo">
          <a href="#" className="text-2xl font-playfair font-bold text-[hsl(var(--blue-dark))] flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50&q=80" 
              alt="Royal Phoenicia Logo" 
              className="w-10 h-10 mr-2 rounded-full object-cover"
            />
            <span>Royal Phoenicia</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link text-[hsl(var(--blue))] hover:text-[hsl(var(--gold))]">Home</a>
          <a href="#rooms" className="nav-link text-[hsl(var(--blue))] hover:text-[hsl(var(--gold))]">Rooms</a>
          <a href="#amenities" className="nav-link text-[hsl(var(--blue))] hover:text-[hsl(var(--gold))]">Amenities</a>
          <a href="#dining" className="nav-link text-[hsl(var(--blue))] hover:text-[hsl(var(--gold))]">Dining</a>
          <a href="#gallery" className="nav-link text-[hsl(var(--blue))] hover:text-[hsl(var(--gold))]">Gallery</a>
          <a href="#contact" className="nav-link text-[hsl(var(--blue))] hover:text-[hsl(var(--gold))]">Contact</a>
          <a 
            href="#booking" 
            className="ml-4 px-6 py-2 bg-[hsl(var(--gold))] text-white rounded hover:bg-[hsl(var(--gold-dark))] transition-all"
          >
            Book Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            id="menu-toggle" 
            className="focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="text-[hsl(var(--blue))]" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
