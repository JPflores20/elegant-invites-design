import { motion } from "framer-motion";
import { Gift, CreditCard, Store, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const GiftsSection = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const bankDetails = {
    bank: "Banco Nacional",
    name: "María García López",
    account: "1234 5678 9012 3456",
    clabe: "012345678901234567"
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "¡Copiado!",
      description: `${label} copiado al portapapeles`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const giftRegistries = [
    {
      name: "Amazon",
      icon: "📦",
      url: "https://www.amazon.com.mx/wedding/registry",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      name: "Liverpool",
      icon: "🎁",
      url: "https://www.liverpool.com.mx/mesa-de-regalos",
      color: "from-pink-500/20 to-pink-600/20"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl gold-text mb-4">
            Obsequios
          </h2>
          <p className="font-elegant text-lg text-muted-foreground">
            Tu presencia es el mejor regalo, pero si deseas obsequiarnos algo...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-6 md:p-8"
        >
          <Tabs defaultValue="sobre" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted/30 p-1 rounded-xl">
              <TabsTrigger 
                value="sobre" 
                className="font-body data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Sobre
              </TabsTrigger>
              <TabsTrigger 
                value="tiendas"
                className="font-body data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
              >
                <Store className="h-4 w-4 mr-2" />
                Tiendas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sobre" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">💌</span>
                  </div>
                  <p className="font-elegant text-muted-foreground">
                    Si deseas hacer un regalo en efectivo, aquí están los datos bancarios
                  </p>
                </div>

                <div className="bg-muted/30 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-body text-sm">Banco</span>
                    <span className="font-body font-medium">{bankDetails.bank}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-body text-sm">Beneficiario</span>
                    <span className="font-body font-medium">{bankDetails.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-body text-sm">Cuenta</span>
                    <div className="flex items-center gap-2">
                      <span className="font-body font-medium">{bankDetails.account}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleCopy(bankDetails.account.replace(/\s/g, ""), "Número de cuenta")}
                      >
                        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-body text-sm">CLABE</span>
                    <div className="flex items-center gap-2">
                      <span className="font-body font-medium text-sm">{bankDetails.clabe}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleCopy(bankDetails.clabe, "CLABE")}
                      >
                        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="tiendas" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-center font-elegant text-muted-foreground mb-6">
                  También puedes encontrar nuestra mesa de regalos en:
                </p>
                
                {giftRegistries.map((registry, index) => (
                  <motion.a
                    key={registry.name}
                    href={registry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`block p-6 rounded-xl bg-gradient-to-r ${registry.color} border border-border/30 hover:border-primary/50 transition-all hover-glow`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{registry.icon}</span>
                      <div>
                        <h4 className="font-display text-xl text-foreground">{registry.name}</h4>
                        <p className="font-body text-sm text-muted-foreground">Ver mesa de regalos</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;