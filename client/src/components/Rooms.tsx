import { Button } from "@/components/ui/button";
import { roomData } from "@/lib/data";

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-[hsl(var(--black))] relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/6 left-1/5 w-1.5 h-1.5 bg-[hsl(var(--gold))] rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[hsl(var(--gold-light))] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/5 left-2/3 w-2 h-2 bg-[hsl(var(--gold))] rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--gold))] mb-4">
            Luxurious Rooms & Suites
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] mx-auto mb-6 rounded-full"></div>
          <p className="text-[hsl(var(--neutral-lightest))]">
            Experience the epitome of comfort in our thoughtfully designed accommodations. 
            Each room and suite is meticulously crafted to provide an environment of relaxation and indulgence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomData.map((room, index) => (
            <div key={index} className="room-card overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--blue-dark))] to-[hsl(var(--deep-black))] border border-[hsl(var(--gold))] border-opacity-20 hover:border-opacity-60 shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 right-0 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-[hsl(var(--deep-black))] py-2 px-4 rounded-tl-lg font-semibold">
                  From ${room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-[hsl(var(--gold))] mb-2">{room.name}</h3>
                <p className="text-[hsl(var(--neutral-lightest))] text-sm mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map((amenity, idx) => (
                    <span key={idx} className="text-xs bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-[hsl(var(--deep-black))] px-3 py-1 rounded-full font-medium">
                      {amenity}
                    </span>
                  ))}
                </div>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full text-center px-4 py-2 border-2 border-[hsl(var(--gold))] text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--deep-black))] transition-all rounded-lg btn-glow font-semibold"
                >
                  <a href="#booking">Book Now</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild 
            className="inline-block px-8 py-3 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-[hsl(var(--deep-black))] rounded-lg hover:from-[hsl(var(--gold-light))] hover:to-[hsl(var(--gold))] transition-all btn-glow font-semibold"
          >
            <a href="#rooms-all">View All Rooms</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
