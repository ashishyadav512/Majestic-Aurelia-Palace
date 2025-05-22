import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--blue-dark))] mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-[hsl(var(--gold))] mb-6"></div>
            <p className="text-[hsl(var(--neutral))] mb-8">
              We're here to assist you with any inquiries or special requests. Reach out to our dedicated team for personalized assistance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--blue-dark))] flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="text-[hsl(var(--gold))]" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--blue-dark))] mb-1">Address</h3>
                  <p className="text-[hsl(var(--neutral))]">
                    123 Luxury Avenue, Prestigious District<br />City Center, 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--blue-dark))] flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="text-[hsl(var(--gold))]" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--blue-dark))] mb-1">Phone</h3>
                  <p className="text-[hsl(var(--neutral))]">
                    Reservations: +1 (800) 123-4567<br />Front Desk: +1 (800) 765-4321
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--blue-dark))] flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="text-[hsl(var(--gold))]" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--blue-dark))] mb-1">Email</h3>
                  <p className="text-[hsl(var(--neutral))]">
                    Reservations: reservations@royalphoenicia.com<br />General: info@royalphoenicia.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-playfair text-xl font-semibold text-[hsl(var(--blue-dark))] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--blue-dark))] flex items-center justify-center text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))] hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--blue-dark))] flex items-center justify-center text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))] hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--blue-dark))] flex items-center justify-center text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))] hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[hsl(var(--blue-dark))] flex items-center justify-center text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))] hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div id="booking">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[hsl(var(--blue-dark))] mb-4">Make a Reservation</h2>
            <div className="w-20 h-1 bg-[hsl(var(--gold))] mb-6"></div>
            <p className="text-[hsl(var(--neutral))] mb-8">
              Complete the form below to request a reservation. Our team will contact you to confirm availability and details.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="first-name" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">First Name *</Label>
                  <Input 
                    id="first-name"
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                  />
                </div>
                <div>
                  <Label htmlFor="last-name" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Last Name *</Label>
                  <Input 
                    id="last-name"
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Phone Number *</Label>
                  <Input 
                    id="phone"
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="check-in-date" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Check-in Date *</Label>
                  <Input 
                    id="check-in-date"
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                  />
                </div>
                <div>
                  <Label htmlFor="check-out-date" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Check-out Date *</Label>
                  <Input 
                    id="check-out-date"
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                  />
                </div>
                <div>
                  <Label htmlFor="guests" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Number of Guests *</Label>
                  <Select>
                    <SelectTrigger className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-adult">1 Adult</SelectItem>
                      <SelectItem value="2-adults">2 Adults</SelectItem>
                      <SelectItem value="2-adults-1-child">2 Adults, 1 Child</SelectItem>
                      <SelectItem value="2-adults-2-children">2 Adults, 2 Children</SelectItem>
                      <SelectItem value="other">Other (specify in notes)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="room-type" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Room Type *</Label>
                <Select>
                  <SelectTrigger className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deluxe">Deluxe Room</SelectItem>
                    <SelectItem value="executive">Executive Suite</SelectItem>
                    <SelectItem value="presidential">Presidential Suite</SelectItem>
                    <SelectItem value="family">Family Room</SelectItem>
                    <SelectItem value="royal">Royal Suite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="special-requests" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Special Requests</Label>
                <Textarea 
                  id="special-requests"
                  rows={4} 
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
                />
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5 mt-1">
                  <Checkbox id="terms" />
                </div>
                <div className="ml-3 text-sm">
                  <Label 
                    htmlFor="terms" 
                    className="text-[hsl(var(--neutral))]"
                  >
                    I agree to the <a href="#" className="text-[hsl(var(--gold))] hover:underline">terms and conditions</a> and acknowledge the <a href="#" className="text-[hsl(var(--gold))] hover:underline">privacy policy</a>.
                  </Label>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-[hsl(var(--gold))] text-white rounded hover:bg-[hsl(var(--gold-dark))] transition-all"
              >
                Submit Reservation Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
