export default function Introduction() {
  // Beautiful high-quality images for each service
  const serviceImages = {
    service: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    location: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
  };
  return (
    <section className="py-28 md:py-32 bg-[hsl(var(--deep-black))] relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[hsl(var(--gold-light))] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--gold))] mb-4">
            Welcome to Majestic Aurelia Palace
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] mx-auto mb-6 rounded-full"></div>
          <p className="text-[hsl(var(--neutral-lightest))] mb-6">
            Nestled in the heart of luxury, Majestic Aurelia Palace offers an unparalleled blend of opulence, comfort, and exceptional service. 
            Our commitment to excellence ensures that every moment of your stay is nothing short of extraordinary.
          </p>
          <p className="text-[hsl(var(--neutral))]">
            From our elegantly appointed suites to our world-class amenities, we invite you to experience the pinnacle of sophisticated hospitality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-[hsl(var(--blue-dark))] to-[hsl(var(--deep-black))] hover:from-[hsl(var(--blue))] hover:to-[hsl(var(--blue-dark))] transition-all duration-500 rounded-xl border border-[hsl(var(--gold))] border-opacity-20 hover:border-opacity-50 hover:shadow-2xl hover:shadow-[hsl(var(--gold))]/20 hover:transform hover:scale-105 fade-in-up">
            <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-[hsl(var(--gold))] border-opacity-40">
              <img 
                src={serviceImages.service}
                alt="Exceptional Service"
                className="w-full h-full object-cover luxury-image"
                loading="lazy"
              />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-[hsl(var(--gold))] mb-3">Exceptional Service</h3>
            <p className="text-[hsl(var(--neutral-lightest))]">
              Our dedicated staff is committed to providing personalized service that exceeds expectations.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-[hsl(var(--blue-dark))] to-[hsl(var(--deep-black))] hover:from-[hsl(var(--blue))] hover:to-[hsl(var(--blue-dark))] transition-all duration-500 rounded-xl border border-[hsl(var(--gold))] border-opacity-20 hover:border-opacity-50 hover:shadow-2xl hover:shadow-[hsl(var(--gold))]/20 hover:transform hover:scale-105 fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-[hsl(var(--gold))] border-opacity-40">
              <img 
                src={serviceImages.location}
                alt="Prime Location"
                className="w-full h-full object-cover luxury-image"
                loading="lazy"
              />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-[hsl(var(--gold))] mb-3">Prime Location</h3>
            <p className="text-[hsl(var(--neutral-lightest))]">
              Located in the most prestigious area, with easy access to attractions and business districts.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-[hsl(var(--blue-dark))] to-[hsl(var(--deep-black))] hover:from-[hsl(var(--blue))] hover:to-[hsl(var(--blue-dark))] transition-all duration-500 rounded-xl border border-[hsl(var(--gold))] border-opacity-20 hover:border-opacity-50 hover:shadow-2xl hover:shadow-[hsl(var(--gold))]/20 hover:transform hover:scale-105 fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden border-2 border-[hsl(var(--gold))] border-opacity-40">
              <img 
                src={serviceImages.dining}
                alt="Exquisite Dining"
                className="w-full h-full object-cover luxury-image"
                loading="lazy"
              />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-[hsl(var(--gold))] mb-3">Exquisite Dining</h3>
            <p className="text-[hsl(var(--neutral-lightest))]">
              Indulge in culinary masterpieces crafted by our award-winning chefs using the finest ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
