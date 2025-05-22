import { Button } from "@/components/ui/button";
import { galleryData } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[hsl(var(--neutral-light))]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--blue-dark))] mb-4">
            Photo Gallery
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p className="text-[hsl(var(--neutral))]">
            Explore the beauty and elegance of Royal Phoenicia Hotel through our curated collection of images.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryData.map((item, index) => (
            <div key={index} className="gallery-item overflow-hidden rounded-lg shadow-md">
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-64 object-cover hover:scale-110 transition-all"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild 
            className="inline-block px-8 py-3 bg-[hsl(var(--blue-dark))] text-white rounded hover:bg-[hsl(var(--blue))] transition-all"
          >
            <a href="#full-gallery">View Full Gallery</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
