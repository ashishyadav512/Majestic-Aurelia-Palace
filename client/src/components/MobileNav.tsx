import { X } from "lucide-react";

export default function MobileNav() {
  const closeMenu = () => {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav) {
      mobileNav.classList.remove('open');
    }
  };

  return (
    <div id="mobile-nav" className="mobile-nav fixed top-0 right-0 h-full w-64 bg-[hsl(var(--blue-dark))] z-50 p-5 flex flex-col shadow-lg">
      <div className="flex justify-end mb-8">
        <button 
          id="close-menu" 
          className="text-white hover:text-[hsl(var(--gold))] focus:outline-none"
          onClick={closeMenu}
          aria-label="Close mobile menu"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col space-y-4">
        <a href="#home" className="text-white hover:text-[hsl(var(--gold))] py-2 border-b border-[hsl(var(--blue-light))]">Home</a>
        <a href="#rooms" className="text-white hover:text-[hsl(var(--gold))] py-2 border-b border-[hsl(var(--blue-light))]">Rooms</a>
        <a href="#amenities" className="text-white hover:text-[hsl(var(--gold))] py-2 border-b border-[hsl(var(--blue-light))]">Amenities</a>
        <a href="#dining" className="text-white hover:text-[hsl(var(--gold))] py-2 border-b border-[hsl(var(--blue-light))]">Dining</a>
        <a href="#gallery" className="text-white hover:text-[hsl(var(--gold))] py-2 border-b border-[hsl(var(--blue-light))]">Gallery</a>
        <a href="#contact" className="text-white hover:text-[hsl(var(--gold))] py-2 border-b border-[hsl(var(--blue-light))]">Contact</a>
        <a 
          href="#booking" 
          className="mt-4 px-6 py-2 bg-[hsl(var(--gold))] text-white text-center rounded hover:bg-[hsl(var(--gold-dark))] transition-all"
        >
          Book Now
        </a>
      </nav>
    </div>
  );
}
