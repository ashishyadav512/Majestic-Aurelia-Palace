import { ConciergeBell, MapPin, Utensils } from "lucide-react";

export default function Introduction() {
  return (
    <section className="py-28 md:py-32 bg-[hsl(var(--neutral-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--blue-dark))] mb-4">
            Welcome to Royal Phoenicia
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p className="text-[hsl(var(--neutral))] mb-6">
            Nestled in the heart of luxury, Royal Phoenicia Hotel offers an unparalleled blend of opulence, comfort, and exceptional service. 
            Our commitment to excellence ensures that every moment of your stay is nothing short of extraordinary.
          </p>
          <p className="text-[hsl(var(--neutral))]">
            From our elegantly appointed rooms to our world-class amenities, we invite you to experience the pinnacle of hospitality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <ConciergeBell className="text-[hsl(var(--gold))]" size={48} />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-[hsl(var(--blue-dark))] mb-3">Exceptional Service</h3>
            <p className="text-[hsl(var(--neutral))]">
              Our dedicated staff is committed to providing personalized service that exceeds expectations.
            </p>
          </div>
          
          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="text-[hsl(var(--gold))]" size={48} />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-[hsl(var(--blue-dark))] mb-3">Prime Location</h3>
            <p className="text-[hsl(var(--neutral))]">
              Located in the most prestigious area, with easy access to attractions and business districts.
            </p>
          </div>
          
          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Utensils className="text-[hsl(var(--gold))]" size={48} />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-[hsl(var(--blue-dark))] mb-3">Exquisite Dining</h3>
            <p className="text-[hsl(var(--neutral))]">
              Indulge in culinary masterpieces crafted by our award-winning chefs using the finest ingredients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
