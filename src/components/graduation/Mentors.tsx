import { UserRound } from "lucide-react";

const mentors = [
  {
    name: "Ing. Juan Pérez",
    role: "Padrino de Generación",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", // Placeholder
  },
  {
    name: "Dra. María González",
    role: "Madrina de Generación",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", // Placeholder
  }
];

const Mentors = () => {
  return (
    <section className="pt-32 pb-16 bg-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-display text-[#D4AF37] mb-12 uppercase tracking-widest">
          Agradecimiento Especial
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {mentors.map((mentor) => (
            <div key={mentor.name} className="group relative animate-fade-up">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-500 mx-auto mb-4 relative">
                 {/* Efecto de brillo al pasar mouse */}
                <div className="absolute inset-0 bg-[#1E3D59]/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl text-white font-medium">{mentor.name}</h3>
              <p className="text-white/60 text-sm">{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;