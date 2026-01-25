import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Lock, User, Mail, Check, Crown, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.string().email("Correo inválido"),
  guests: z.string().min(1, "Selecciona pases"),
});

const RSVPLogin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: "¡Bienvenido a la Corte Real!",
      description: `Hola ${values.name}, tu acceso ha sido confirmado.`,
    });
  }

  return (
    <section className="py-32 px-4 flex items-center justify-center relative z-10" id="rsvp">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // CAMBIO: Fondo degradado rojo brillante a vino
        className="w-full max-w-md bg-gradient-to-b from-[#dc2626] to-[#7f1d1d] p-8 md:p-12 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(220,38,38,0.5)] border border-red-400/50 relative overflow-hidden"
      >
        {/* Círculos decorativos de fondo */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-black/20 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-10 relative z-10">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shadow-inner border border-white/20">
            <Crown className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="font-serif text-5xl text-white tracking-wide mb-2 drop-shadow-md">
            Valentina
          </h2>
          <p className="text-red-100 uppercase tracking-[0.3em] text-xs font-bold bg-black/20 inline-block px-4 py-1 rounded-full">
            Acceso Exclusivo XV
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <User className="absolute left-5 top-4 w-5 h-5 text-red-200" />
                          <FormControl>
                            <Input 
                              placeholder="Nombre Completo" 
                              {...field} 
                              className="pl-14 bg-black/20 border-white/20 text-white placeholder:text-red-200/50 focus:border-white focus:bg-black/30 h-14 rounded-2xl border transition-all"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-white font-bold text-xs pl-4" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative">
                          <Mail className="absolute left-5 top-4 w-5 h-5 text-red-200" />
                          <FormControl>
                            <Input 
                              placeholder="Correo Electrónico" 
                              {...field} 
                              className="pl-14 bg-black/20 border-white/20 text-white placeholder:text-red-200/50 focus:border-white focus:bg-black/30 h-14 rounded-2xl border transition-all"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-white font-bold text-xs pl-4" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/20 border-white/20 text-white h-14 rounded-2xl focus:ring-0 focus:border-white pl-6">
                              <SelectValue placeholder="Número de Pases" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-red-900 text-white border-red-700">
                            <SelectItem value="1">1 Pase Personal</SelectItem>
                            <SelectItem value="2">2 Pases</SelectItem>
                            <SelectItem value="3">3 Pases</SelectItem>
                            <SelectItem value="4">4 Pases</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-white font-bold text-xs pl-4" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-white text-red-700 hover:bg-red-50 font-bold rounded-2xl shadow-xl transition-all flex gap-3 text-lg mt-6"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <Lock className="w-5 h-5" />}
                    {isLoading ? "Validando..." : "Ingresar al Evento"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 relative z-10"
            >
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Check className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-2">¡Bienvenido!</h3>
              <p className="text-red-100 text-lg">
                Tu lugar ha sido confirmado.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RSVPLogin;