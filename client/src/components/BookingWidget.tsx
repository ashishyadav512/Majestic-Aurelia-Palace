import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function BookingWidget() {
  return (
    <div className="booking-widget absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-1/2 mx-auto max-w-5xl rounded-lg z-20">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="check-in" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Check In</Label>
          <Input 
            id="check-in"
            type="date" 
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
          />
        </div>
        <div>
          <Label htmlFor="check-out" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Check Out</Label>
          <Input 
            id="check-out"
            type="date" 
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]"
          />
        </div>
        <div>
          <Label htmlFor="guests" className="block text-[hsl(var(--blue-dark))] text-sm font-medium mb-2">Guests</Label>
          <Select>
            <SelectTrigger className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]">
              <SelectValue placeholder="Select guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Adult</SelectItem>
              <SelectItem value="2">2 Adults</SelectItem>
              <SelectItem value="2-1">2 Adults, 1 Child</SelectItem>
              <SelectItem value="2-2">2 Adults, 2 Children</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button className="w-full bg-[hsl(var(--blue-dark))] text-white p-3 rounded hover:bg-[hsl(var(--blue))] transition-all">
            Check Availability
          </Button>
        </div>
      </form>
    </div>
  );
}
