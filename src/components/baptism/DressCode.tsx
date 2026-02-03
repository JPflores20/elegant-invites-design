import { motion } from "framer-motion";
import { Shirt, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DecorativeClouds from "./DecorativeClouds";

interface DressCodeProps {
  type?: string;
  colors?: string[];
  description?: string;
}

export const DressCode = ({ 
  type = "Formal de Día", 
  colors = ["#F0F8FF", "#E6E6FA", "#F5F5DC", "#FFFFFF"], 
  description = "Sugerimos colores claros y pasteles para armonizar con la celebración." 
}: DressCodeProps) => {
  return (
    <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-background to-primary/10 overflow-hidden">
      <DecorativeClouds position="top-right" className="opacity-50" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
            Código de Vestimenta
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shirt className="w-5 h-5 text-sky-deep" />
            <span className="text-lg font-medium text-charcoal">{type}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-sky-light/30 shadow-sm">
            <CardContent className="py-8">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-6 text-silver">
                  <Palette className="w-4 h-4" />
                  <span className="text-sm uppercase tracking-wider">Paleta Sugerida</span>
                </div>
                
                <div className="flex justify-center gap-4 md:gap-8">
                  {colors.map((color, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div 
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-md border-2 border-white"
                        style={{ backgroundColor: color }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <DecorativeClouds position="bottom-left" className="opacity-50" />
    </section>
  );
};

export default DressCode;