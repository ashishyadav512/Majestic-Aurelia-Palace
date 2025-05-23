import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="hero-slider relative">
      {/* Luxury diamond background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-3 h-3 bg-[hsl(var(--gold))] rounded-full animate-pulse" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-[hsl(var(--gold-light))] rounded-full" style={{animation: 'diamondSparkle 4s ease-in-out infinite'}}></div>
        <div className="absolute bottom-40 left-40 w-4 h-4 bg-[hsl(var(--gold))]" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animation: 'diamondSparkle 6s ease-in-out infinite'}}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-[hsl(var(--gold-light))] rounded-full" style={{animation: 'diamondSparkle 3s ease-in-out infinite'}}></div>
        <div className="absolute bottom-60 right-20 w-3 h-3 bg-[hsl(var(--gold))]" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animation: 'diamondSparkle 5s ease-in-out infinite'}}></div>
      </div>

      {/* Hero background with luxury overlay */}
      <div 
        className="slide absolute inset-0 bg-cover bg-center luxury-image" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--deep-black))] via-transparent to-[hsl(var(--deep-black))] opacity-85"></div>
        <div className="absolute inset-0 bg-[hsl(var(--deep-black))] bg-opacity-50"></div>
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
