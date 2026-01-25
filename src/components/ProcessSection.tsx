import { Palette, PenTool, Share2, Users } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "1. Elige tu Estilo",
    description: "Explora nuestra colección y selecciona el diseño que mejor vaya con tu evento.",
  },
  {
    icon: PenTool,
    title: "2. Personaliza",
    description: "Envíanos tus datos y fotos. Adaptamos colores y textos a tu gusto.",
  },
  {
    icon: Share2,
    title: "3. Recibe tu Link",
    description: "En menos de 48 horas recibirás tu invitación digital lista para enviar.",
  },
  {
    icon: Users,
    title: "4. Gestiona",
    description: "Comparte por WhatsApp y mira cómo se llena tu lista de confirmados.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Tu invitación lista en <span className="text-gradient-gold">4 simples pasos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sin complicaciones técnicas. Nosotros nos encargamos de todo.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Línea conectora (solo en desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center text-center space-y-4 group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-24 h-24 rounded-full bg-background border-4 border-secondary shadow-xl flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500 z-10">
                <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <div className="space-y-2 px-2">
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;