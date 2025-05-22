// Data for the rooms section
export const roomData = [
  {
    name: "Deluxe Room",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    price: 299,
    description: "Spacious 45 sq.m room with elegant furnishings and modern amenities for the discerning traveler.",
    amenities: ["King Bed", "City View", "Free WiFi", "Minibar"]
  },
  {
    name: "Executive Suite",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    price: 499,
    description: "Luxurious 75 sq.m suite with separate living area and breathtaking panoramic views.",
    amenities: ["King Bed", "Panoramic View", "Living Area", "Luxury Bathroom"]
  },
  {
    name: "Presidential Suite",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    price: 899,
    description: "Unparalleled 120 sq.m luxury with elegant décor, butler service, and exclusive amenities.",
    amenities: ["Master Bedroom", "Dining Area", "Private Terrace", "Butler Service"]
  }
];

// Data for the amenities section
export const amenitiesData = [
  {
    name: "Infinity Pool",
    icon: "pool",
    description: "Relax in our stunning infinity pool with panoramic views of the surrounding landscape."
  },
  {
    name: "Luxury Spa",
    icon: "spa",
    description: "Indulge in rejuvenating treatments and therapies at our world-class spa facility."
  },
  {
    name: "Fitness Center",
    icon: "fitness",
    description: "Maintain your fitness routine with state-of-the-art equipment and personal trainers."
  },
  {
    name: "Fine Dining",
    icon: "dining",
    description: "Experience culinary excellence at our award-winning restaurants and lounges."
  },
  {
    name: "Concierge Service",
    icon: "concierge",
    description: "Our dedicated concierge team is available 24/7 to assist with all your requirements."
  },
  {
    name: "Complimentary WiFi",
    icon: "wifi",
    description: "Stay connected with high-speed internet access throughout the hotel premises."
  },
  {
    name: "Valet Parking",
    icon: "valet",
    description: "Enjoy convenient valet parking service for all hotel guests and visitors."
  },
  {
    name: "Executive Lounge",
    icon: "lounge",
    description: "Access our exclusive executive lounge with premium services and refreshments."
  }
];

// Data for the dining section
export const diningData = [
  {
    name: "Royal Dining",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Our signature restaurant offers an exceptional fine dining experience with Mediterranean-inspired cuisine using locally sourced ingredients.",
    hours: "Dinner: 6:00 PM - 10:30 PM",
    venueType: "Fine Dining | Reservation Required",
    venueTypeIcon: "utensils",
    menuLink: "#dining-menu"
  },
  {
    name: "The Gold Lounge",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Unwind in our sophisticated lounge featuring handcrafted cocktails, premium spirits, and an extensive wine list in an elegant atmosphere.",
    hours: "4:00 PM - 1:00 AM",
    venueType: "Cocktails | Live Music (Weekends)",
    venueTypeIcon: "martini",
    menuLink: "#lounge-menu"
  },
  {
    name: "Café Phoenicia",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Enjoy artisanal pastries, light meals, and specialty coffees in a relaxed setting overlooking our garden courtyard.",
    hours: "7:00 AM - 6:00 PM",
    venueType: "Casual Dining | Takeaway Available",
    venueTypeIcon: "coffee",
    menuLink: "#cafe-menu"
  },
  {
    name: "Azure Pool Bar",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    description: "Refresh with tropical cocktails and light fare while enjoying our infinity pool and stunning views.",
    hours: "10:00 AM - 7:00 PM (Seasonal)",
    venueType: "Poolside Service | Casual",
    venueTypeIcon: "cocktail",
    menuLink: "#poolbar-menu"
  }
];

// Data for the gallery section
export const galleryData = [
  {
    image: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Hotel Lobby"
  },
  {
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Infinity Pool"
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Luxury Suite"
  },
  {
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Spa Treatment Room"
  },
  {
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Grand Ballroom"
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    alt: "Hotel Exterior"
  }
];

// Data for the testimonials section
export const testimonialData = [
  {
    text: "The Royal Phoenicia exceeded all our expectations. The service was impeccable, the rooms luxurious, and the dining experience extraordinary. We'll definitely be returning soon.",
    name: "James & Sarah Thompson",
    location: "New York, USA"
  },
  {
    text: "An oasis of luxury and comfort. The attention to detail is remarkable, from the welcome amenities to the turndown service. The spa treatments were the highlight of our stay.",
    name: "Emma Richardson",
    location: "London, UK"
  },
  {
    text: "As a frequent business traveler, I've stayed in many luxury hotels, but Royal Phoenicia stands out for its exceptional service and attention to detail. The Executive Suite was perfect for my needs.",
    name: "Robert Chen",
    location: "Singapore"
  }
];
