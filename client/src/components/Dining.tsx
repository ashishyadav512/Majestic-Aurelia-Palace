import { Clock, Utensils, GlassWater, Coffee, Martini } from "lucide-react";
import { diningData } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Dining() {
  // Map of icons to components
  const iconMap: Record<string, React.ReactNode> = {
    clock: <Clock className="text-[hsl(var(--gold))]" size={16} />,
    utensils: <Utensils className="text-[hsl(var(--gold))]" size={16} />,
    cocktail: <GlassWater className="text-[hsl(var(--gold))]" size={16} />,
    coffee: <Coffee className="text-[hsl(var(--gold))]" size={16} />,
    martini: <Martini className="text-[hsl(var(--gold))]" size={16} />
  };

  return (
    <section id="dining" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--blue-dark))] mb-4">
            Exquisite Dining
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p className="text-[hsl(var(--neutral))]">
            Embark on a culinary journey through our diverse dining venues, each offering a unique experience crafted by our world-class chefs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {diningData.map((venue, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
                <img 
                  src={venue.image} 
                  alt={venue.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-playfair text-2xl font-semibold text-[hsl(var(--blue-dark))] mb-3">{venue.name}</h3>
                <p className="text-[hsl(var(--neutral))] mb-4">{venue.description}</p>
                <div className="flex items-center gap-2 text-sm text-[hsl(var(--neutral))] mb-1">
                  {iconMap.clock}
                  <span>{venue.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[hsl(var(--neutral))] mb-4">
                  {iconMap[venue.venueTypeIcon]}
                  <span>{venue.venueType}</span>
                </div>
                <Button 
                  asChild 
                  variant="outline" 
                  className="inline-block px-4 py-2 border border-[hsl(var(--gold))] text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))] hover:text-white transition-all rounded"
                >
                  <a href={venue.menuLink}>View Menu</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
