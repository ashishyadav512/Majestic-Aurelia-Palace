import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="hero-slider relative">
      {/* Hero background with overlay */}
      <div 
        className="slide absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')" }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--deep-black))] bg-opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="w-full md:w-2/3 text-[hsl(var(--neutral-lightest))]">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4 text-[hsl(var(--gold))] fade-in-up">
            Experience Luxury & Comfort
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-[hsl(var(--neutral-lightest))] slide-in-left">
            Indulge in the ultimate luxury experience at Royal Phoenicia Hotel, where timeless elegance meets modern comfort.
          </p>
          <div className="flex flex-wrap gap-4 slide-in-right">
            <Button 
              asChild 
              className="px-8 py-3 bg-[hsl(var(--gold))] text-[hsl(var(--deep-black))] rounded-lg hover:bg-[hsl(var(--gold-light))] transition-all h-auto btn-glow font-semibold"
            >
              <a href="#booking">Book Your Stay</a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="px-8 py-3 border-2 border-[hsl(var(--gold))] text-[hsl(var(--gold))] rounded-lg hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--deep-black))] transition-all h-auto btn-glow font-semibold"
            >
              <a href="#rooms">Explore Rooms</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
