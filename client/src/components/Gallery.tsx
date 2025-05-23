import { Button } from "@/components/ui/button";
import { galleryData } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[hsl(var(--deep-black))] relative overflow-hidden">
      {/* Luxury background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-6 h-6 border-2 border-[hsl(var(--gold))] rotate-45" style={{animation: 'diamondSparkle 8s ease-in-out infinite'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 border border-[hsl(var(--gold-light))] rotate-45" style={{animation: 'diamondSparkle 6s ease-in-out infinite'}}></div>
        <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-[hsl(var(--gold))] rotate-45" style={{animation: 'diamondSparkle 10s ease-in-out infinite'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--gold))] mb-4">
            Photo Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] mx-auto mb-6 rounded-full"></div>
          <p className="text-[hsl(var(--neutral-lightest))]">
            Explore the beauty and elegance of Royal Phoenicia Hotel through our curated collection of images.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div key={index} className="gallery-item overflow-hidden rounded-xl" style={{animationDelay: `${index * 0.15}s`}}>
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-64 object-cover luxury-image"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80';
                }}
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
