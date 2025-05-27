import { amenitiesData } from "@/lib/data";

export default function Amenities() {
  // Map of beautiful high-quality images for each amenity
  const imageMap: Record<string, string> = {
    pool: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    spa: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    fitness: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    concierge: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    wifi: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    valet: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    lounge: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
  };

  return (
    <section 
      id="amenities" 
      className="py-20 bg-[hsl(var(--deep-black))] text-white bg-cover bg-center relative overflow-hidden" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.9)"
      }}
    >
      {/* Floating star effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-1 h-1 bg-[hsl(var(--gold))] rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[hsl(var(--gold-light))] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-[hsl(var(--gold-light))] rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--gold))]">Hotel Amenities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] mx-auto mb-6 rounded-full"></div>
          <p className="text-[hsl(var(--neutral-lightest))]">
            Discover a world of comfort and convenience with our exceptional range of amenities designed to enhance your stay experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenitiesData.map((amenity, index) => (
            <div key={index} className="amenity text-center p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--blue-dark))] to-[hsl(var(--deep-black))] border border-[hsl(var(--gold))] border-opacity-20 hover:border-opacity-60 transition-all duration-500 hover:shadow-2xl hover:shadow-[hsl(var(--gold))]/30">
              <div className="amenity-icon w-full h-48 mx-auto mb-6 rounded-xl overflow-hidden border-2 border-[hsl(var(--gold))] border-opacity-40 shadow-lg">
                <img 
                  src={imageMap[amenity.icon]} 
                  alt={amenity.name}
                  className="w-full h-full object-cover luxury-image"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80';
                  }}
                />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2 text-[hsl(var(--gold))]">{amenity.name}</h3>
              <p className="text-sm text-[hsl(var(--neutral-lightest))] opacity-90">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
