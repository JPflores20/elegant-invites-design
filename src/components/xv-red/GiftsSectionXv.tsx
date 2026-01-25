import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, CreditCard, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const GiftsSectionXv = () => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
      toast({
        title: "¡Copiado!",
        description: `${fieldName} listo para pegar.`,
        duration: 3000,
        className: "bg-red-950 border-red-800 text-white" // Toast personalizado
      });
    } catch (err) {
      toast({ title: "Error", description: "Copia manual requerida.", variant: "destructive" });
    }
  };

  return (
    <section className="py-24 px-4 bg-[#140505] relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="w-20 h-20 bg-red-950/50 rounded-full flex items-center justify-center mx-auto border border-red-900">
            <Gift className="w-10 h-10 text-red-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Mesa de Regalos</h2>
          <p className="text-red-200/60 text-lg max-w-2xl mx-auto">
            Su presencia es mi mayor regalo. Si desean tener un detalle conmigo:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lluvia de Sobres */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#1F0A0A] p-8 rounded-3xl border border-red-900/40 text-center flex flex-col items-center justify-center space-y-4 hover:border-red-700/60 transition-colors"
          >
            <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center mb-2">
              <Gift className="w-6 h-6 text-red-300" />
            </div>
            <h3 className="text-2xl font-serif text-red-50">Lluvia de Sobres</h3>
            <p className="text-red-200/50">
              En la recepción encontrarán un buzón para depositar sus muestras de cariño.
            </p>
          </motion.div>

          {/* Transferencia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1F0A0A] p-8 rounded-3xl border border-red-900/40 space-y-6"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-red-300" />
              </div>
              <h3 className="text-2xl font-serif text-red-50">Transferencia</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-black/30 p-4 rounded-2xl flex items-center justify-between border border-red-900/20">
                <div className="overflow-hidden">
                  <p className="text-xs text-red-400 uppercase tracking-wider mb-1">Cuenta</p>
                  <p className="font-mono text-red-50 text-lg truncate">1234 5678 9012</p>
                </div>
                <Button variant="ghost" size="icon" className="text-red-400 hover:text-white hover:bg-red-900/50" onClick={() => handleCopy("1234 5678 9012", "Cuenta")}>
                  {copiedField === "Cuenta" ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                </Button>
              </div>

              <div className="bg-black/30 p-4 rounded-2xl flex items-center justify-between border border-red-900/20">
                <div className="overflow-hidden">
                  <p className="text-xs text-red-400 uppercase tracking-wider mb-1">CLABE</p>
                  <p className="font-mono text-red-50 text-lg truncate">012 345 67890123</p>
                </div>
                <Button variant="ghost" size="icon" className="text-red-400 hover:text-white hover:bg-red-900/50" onClick={() => handleCopy("01234567890123", "CLABE")}>
                  {copiedField === "CLABE" ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftsSectionXv;