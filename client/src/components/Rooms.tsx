import { Button } from "@/components/ui/button";
import { roomData } from "@/lib/data";

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--blue-dark))] mb-4">
            Luxurious Rooms & Suites
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p className="text-[hsl(var(--neutral))]">
            Experience the epitome of comfort in our thoughtfully designed accommodations. 
            Each room and suite is meticulously crafted to provide an environment of relaxation and indulgence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomData.map((room, index) => (
            <div key={index} className="room-card overflow-hidden rounded-lg shadow-lg transition-all">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-all hover:scale-110"
                />
                <div className="absolute bottom-0 right-0 bg-[hsl(var(--gold))] text-white py-1 px-4">
                  From ${room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-[hsl(var(--blue-dark))] mb-2">{room.name}</h3>
                <p className="text-[hsl(var(--neutral))] text-sm mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.map((amenity, idx) => (
                    <span key={idx} className="text-xs bg-[hsl(var(--blue-light))] text-white px-2 py-1 rounded">
                      {amenity}
                    </span>
                  ))}
                </div>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full text-center px-4 py-2 border border-[hsl(var(--gold))] text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))] hover:text-white transition-all rounded"
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
            className="inline-block px-8 py-3 bg-[hsl(var(--blue-dark))] text-white rounded hover:bg-[hsl(var(--blue))] transition-all"
          >
            <a href="#rooms-all">View All Rooms</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
