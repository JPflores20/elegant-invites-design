import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle, Users, User, UtensilsCrossed } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, "Por favor ingresa tu nombre completo"),
  guests: z.string().min(1, "Por favor selecciona el número de invitados"),
  dietary: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const RSVPForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      guests: "",
      dietary: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("RSVP submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl gold-text mb-4">
            Confirmación
          </h2>
          <p className="font-elegant text-lg text-muted-foreground">
            Por favor confirma tu asistencia antes del 1 de Marzo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-foreground flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            Nombre Completo
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre completo"
                              className="bg-muted/30 border-border/50 focus:border-primary font-body"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-foreground flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            Número de Invitados
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-muted/30 border-border/50 focus:border-primary font-body">
                                <SelectValue placeholder="Selecciona cuántos asistirán" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1 persona</SelectItem>
                              <SelectItem value="2">2 personas</SelectItem>
                              <SelectItem value="3">3 personas</SelectItem>
                              <SelectItem value="4">4 personas</SelectItem>
                              <SelectItem value="5">5 personas</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dietary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-foreground flex items-center gap-2">
                            <UtensilsCrossed className="h-4 w-4 text-primary" />
                            Restricciones Alimentarias
                            <span className="text-muted-foreground text-xs">(opcional)</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Ej: Vegetariano, alergias, etc."
                              className="bg-muted/30 border-border/50 focus:border-primary font-body resize-none"
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body py-6 text-base hover-glow"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Confirmar Asistencia
                    </Button>
                  </form>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </motion.div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  ¡Gracias por confirmar!
                </h3>
                <p className="font-elegant text-muted-foreground">
                  Esperamos verte en nuestra celebración especial
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPForm;