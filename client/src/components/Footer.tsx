import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--deep-black))] text-white py-16 relative overflow-hidden border-t border-[hsl(var(--gold))] border-opacity-30">
      {/* Luxury footer background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-8 h-8 border border-[hsl(var(--gold))] rotate-45" style={{animation: 'diamondSparkle 12s ease-in-out infinite'}}></div>
        <div className="absolute bottom-20 left-10 w-6 h-6 bg-[hsl(var(--gold))] rotate-45" style={{animation: 'diamondSparkle 8s ease-in-out infinite'}}></div>
        <div className="absolute top-1/2 left-1/3 w-4 h-4 border border-[hsl(var(--gold-light))] rotate-45" style={{animation: 'diamondSparkle 10s ease-in-out infinite'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6 text-[hsl(var(--gold))]">Majestic Aurelia Palace</h3>
            <p className="mb-6 opacity-80">
              Experience unparalleled luxury and comfort at our prestigious palace, where every detail is crafted to exceed your expectations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[hsl(var(--gold))] hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-[hsl(var(--gold))] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-[hsl(var(--gold))] hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-[hsl(var(--gold))] hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#rooms" className="opacity-80 hover:text-[hsl(var(--gold))] transition-all">Rooms & Suites</a></li>
              <li><a href="#amenities" className="opacity-80 hover:text-[hsl(var(--gold))] transition-all">Amenities</a></li>
              <li><a href="#dining" className="opacity-80 hover:text-[hsl(var(--gold))] transition-all">Dining</a></li>
              <li><a href="#gallery" className="opacity-80 hover:text-[hsl(var(--gold))] transition-all">Gallery</a></li>
              <li><a href="#contact" className="opacity-80 hover:text-[hsl(var(--gold))] transition-all">Contact</a></li>
              <li><a href="#booking" className="opacity-80 hover:text-[hsl(var(--gold))] transition-all">Reservations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-[hsl(var(--gold))] mr-3 mt-1" size={18} />
                <span className="opacity-80">123 Luxury Avenue<br />City Center, 10001</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-[hsl(var(--gold))] mr-3 mt-1" size={18} />
                <span className="opacity-80">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-[hsl(var(--gold))] mr-3 mt-1" size={18} />
                <span className="opacity-80">info@royalphoenicia.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-6">Newsletter</h3>
            <p className="mb-4 opacity-80">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full p-3 bg-[hsl(var(--blue-light))] border border-[hsl(var(--blue))] text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
              />
              <Button 
                type="submit" 
                className="w-full px-4 py-2 bg-[hsl(var(--gold))] text-white rounded hover:bg-[hsl(var(--gold-dark))] transition-all"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[hsl(var(--blue-light))] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; 2024 Majestic Aurelia Palace. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="opacity-80 hover:text-[hsl(var(--gold))] transition-all">Privacy Policy</a>
            <a href="#" className="opacity-80 hover:text-[hsl(var(--gold))] transition-all">Terms of Service</a>
            <a href="#" className="opacity-80 hover:text-[hsl(var(--gold))] transition-all">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
