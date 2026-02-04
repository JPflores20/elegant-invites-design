import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Puedo modificar la invitación después de enviarla?",
    answer: "¡Sí! Con nuestros planes Interactivo y Premium, puedes realizar cambios en detalles como horarios o ubicación sin costo extra hasta 24 horas antes del evento. El link seguirá siendo el mismo.",
  },
  {
    question: "¿Cómo reciben la invitación mis invitados?",
    answer: "Te entregamos un enlace web único (ej: invito.com/boda-ana-y-carlos). Puedes compartirlo fácilmente por WhatsApp, Email, Facebook o cualquier red social. Se ve increíble en cualquier celular.",
  },
  {
    question: "¿El pago es único o mensual?",
    answer: "Es un pago único. Tu invitación estará activa y visible por 12 meses completos desde la fecha de contratación. No hay suscripciones ocultas.",
  },
  {
    question: "¿Cuánto tiempo tardan en entregarla?",
    answer: "Nuestro tiempo estándar de entrega es de 48 horas hábiles una vez que recibimos toda tu información y fotos. Ofrecemos servicio express de 24 horas con un costo adicional.",
  },
  {
    question: "¿Qué pasa con la confirmación de asistencia?",
    answer: "Los invitados llenan un formulario sencillo en la invitación. Tú recibirás las notificaciones por WhatsApp.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 space-y-4 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Preguntas <span className="text-gradient-gold">Frecuentes</span>
          </h2>
          <p className="text-muted-foreground">
            Resolvemos tus dudas para que todo salga perfecto.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border shadow-sm animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-border/50 last:border-0">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;