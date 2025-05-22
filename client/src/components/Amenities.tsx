import { 
  Droplets, 
  Bath, 
  Dumbbell, 
  Utensils, 
  Bell, 
  Wifi, 
  Car, 
  GlassWater
} from "lucide-react";
import { amenitiesData } from "@/lib/data";

export default function Amenities() {
  // Map of icons to components
  const iconMap: Record<string, React.ReactNode> = {
    pool: <Droplets className="text-2xl text-white" />,
    spa: <Bath className="text-2xl text-white" />,
    fitness: <Dumbbell className="text-2xl text-white" />,
    dining: <Utensils className="text-2xl text-white" />,
    concierge: <Bell className="text-2xl text-white" />,
    wifi: <Wifi className="text-2xl text-white" />,
    valet: <Car className="text-2xl text-white" />,
    lounge: <GlassWater className="text-2xl text-white" />
  };

  return (
    <section 
      id="amenities" 
      className="py-20 bg-[hsl(var(--blue-dark))] text-white bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(27, 54, 93, 0.85)"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Hotel Amenities</h2>
          <div className="w-20 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p>
            Discover a world of comfort and convenience with our exceptional range of amenities designed to enhance your stay experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="amenity text-center p-6 rounded-lg hover:bg-[hsl(var(--blue-light))] transition-all">
              <div className="amenity-icon w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--gold))] flex items-center justify-center">
                {iconMap[amenity.icon]}
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">{amenity.name}</h3>
              <p className="text-sm opacity-80">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
