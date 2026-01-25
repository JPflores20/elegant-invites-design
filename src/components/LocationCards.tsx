import { motion } from "framer-motion";
import { Church, PartyPopper, Clock, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationProps {
  type: "church" | "reception";
  icon: React.ReactNode;
  title: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  wazeUrl: string;
}

const LocationCard = ({ icon, title, time, venue, address, mapUrl, wazeUrl }: LocationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-card p-6 md:p-8 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground">{title}</h3>
      </div>

      <div className="space-y-4 flex-grow">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Clock className="h-5 w-5 text-accent" />
          <span className="font-elegant text-lg">{time}</span>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
          <div>
            <p className="font-body font-medium text-foreground">{venue}</p>
            <p className="font-body text-sm text-muted-foreground mt-1">{address}</p>
          </div>
        </div>
      </div>

      {/* Map preview placeholder */}
      <div className="mt-6 rounded-xl overflow-hidden h-40 bg-muted/30 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Navigation className="h-8 w-8 text-primary animate-pulse" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 font-body"
          onClick={() => window.open(mapUrl, "_blank")}
        >
          Google Maps
        </Button>
        <Button
          variant="outline"
          className="border-secondary/30 hover:bg-secondary/10 hover:border-secondary/50 font-body"
          onClick={() => window.open(wazeUrl, "_blank")}
        >
          Waze
        </Button>
      </div>
    </motion.div>
  );
};

const LocationCards = () => {
  const locations: LocationProps[] = [
    {
      type: "church",
      icon: <Church className="h-6 w-6" />,
      title: "Ceremonia",
      time: "5:00 PM",
      venue: "Parroquia de Santa María",
      address: "Av. Reforma 123, Col. Centro, CDMX",
      mapUrl: "https://maps.google.com/?q=Parroquia+Santa+Maria+CDMX",
      wazeUrl: "https://waze.com/ul?q=Parroquia+Santa+Maria+CDMX"
    },
    {
      type: "reception",
      icon: <PartyPopper className="h-6 w-6" />,
      title: "Recepción",
      time: "7:00 PM",
      venue: "Salón Los Jardines",
      address: "Blvd. de las Rosas 456, Col. Jardines, CDMX",
      mapUrl: "https://maps.google.com/?q=Salon+Los+Jardines+CDMX",
      wazeUrl: "https://waze.com/ul?q=Salon+Los+Jardines+CDMX"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl gold-text mb-4">
            Lugar y Hora
          </h2>
          <p className="font-elegant text-lg text-muted-foreground">
            Te esperamos en estos lugares especiales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.type}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <LocationCard {...location} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationCards;