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
    // Mantenemos el fondo rojo oscuro para el área de "Login"
    <section className="py-32 px-4 bg-gradient-to-b from-red-950 to-black flex items-center justify-center relative overflow-hidden" id="rsvp">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-gradient-to-b from-red-900/80 to-red-950/90 backdrop-blur-xl border border-red-700/50 p-8 md:p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(185,28,28,0.2)] relative z-10"
      >
        <div className="text-center mb-10 relative">
          <div className="w-24 h-24 bg-gradient-to-br from-red-800 to-red-900 border-2 border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(220,38,38,0.4)] relative group">
            <Crown className="w-12 h-12 text-red-100 group-hover:scale-110 transition-transform" />
            <Sparkles className="absolute top-0 right-0 text-yellow-400 w-6 h-6 animate-pulse" />
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-3">
            <h2 className="font-serif text-4xl text-white tracking-wide drop-shadow-md">
              Valentina
            </h2>
          </div>
          
          <p className="text-red-200/70 uppercase tracking-[0.2em] text-xs font-bold border-t border-red-800/50 pt-4 inline-block px-6">
            Acceso Exclusivo XV
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative group">
                          <User className="absolute left-5 top-4 w-5 h-5 text-red-400 group-focus-within:text-red-200 transition-colors" />
                          <FormControl>
                            <Input 
                              placeholder="Nombre Completo" 
                              {...field} 
                              className="pl-14 bg-black/30 border-red-800/60 text-white placeholder:text-red-300/30 focus:border-red-400 focus:bg-black/50 h-14 rounded-2xl border-2 transition-all shadow-inner"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-400 text-xs pl-4" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative group">
                          <Mail className="absolute left-5 top-4 w-5 h-5 text-red-400 group-focus-within:text-red-200 transition-colors" />
                          <FormControl>
                            <Input 
                              placeholder="Correo Electrónico" 
                              {...field} 
                              className="pl-14 bg-black/30 border-red-800/60 text-white placeholder:text-red-300/30 focus:border-red-400 focus:bg-black/50 h-14 rounded-2xl border-2 transition-all shadow-inner"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-400 text-xs pl-4" />
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
                            <SelectTrigger className="bg-black/30 border-red-800/60 border-2 text-white h-14 rounded-2xl focus:ring-0 focus:border-red-400 pl-6 shadow-inner">
                              <SelectValue placeholder="Número de Pases" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-red-950 text-white border-red-800">
                            <SelectItem value="1">1 Pase Personal</SelectItem>
                            <SelectItem value="2">2 Pases</SelectItem>
                            <SelectItem value="3">3 Pases</SelectItem>
                            <SelectItem value="4">4 Pases</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400 text-xs pl-4" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-16 bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-all flex gap-3 text-lg mt-6 uppercase tracking-widest"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="animate-spin w-6 h-6" /> : <Lock className="w-6 h-6" />}
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
              className="text-center py-16"
            >
              <div className="w-28 h-28 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.3)] relative">
                <Check className="w-14 h-14 text-green-400" />
                <Sparkles className="absolute top-0 left-0 text-green-300 w-8 h-8 animate-pulse" />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4 drop-shadow-md">¡Bienvenido!</h3>
              <p className="text-red-100/80 text-lg leading-relaxed px-6">
                Tu lugar en la corte real de Valentina ha sido confirmado.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RSVPLogin;