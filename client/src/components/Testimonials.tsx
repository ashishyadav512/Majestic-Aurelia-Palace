import { Quote, Star } from "lucide-react";
import { testimonialData } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[hsl(var(--blue-dark))] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Guest Experiences</h2>
          <div className="w-20 h-1 bg-[hsl(var(--gold))] mx-auto mb-6"></div>
          <p>Discover what our valued guests have to say about their stay at Royal Phoenicia Hotel.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="bg-[hsl(var(--blue-light))] p-8 rounded-lg">
              <div className="text-[hsl(var(--gold))] text-3xl mb-4">
                <Quote size={36} />
              </div>
              <p className="mb-6 italic">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm opacity-80">{testimonial.location}</p>
                </div>
                <div className="text-[hsl(var(--gold))] flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
