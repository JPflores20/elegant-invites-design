import { Gift, Heart, CreditCard } from "lucide-react";

const GiftSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 gradient-navy">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
            <Gift className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold mb-6">
            Mesa de Regalos
          </h2>
        </div>
        
        <div className="glass-card rounded-2xl p-8 border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-gold/70" />
            <p className="text-white/80 text-sm md:text-base">
              Tu presencia es nuestro mejor regalo
            </p>
            <Heart className="w-5 h-5 text-gold/70" />
          </div>
          
          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Sin embargo, si deseas obsequiarnos algo, te compartimos nuestras opciones
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Cash Gift Option */}
            <div className="glass-card rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-all w-full sm:w-auto">
              <CreditCard className="w-8 h-8 text-gold mx-auto mb-3" />
              <h4 className="text-white font-medium mb-2">Lluvia de Sobres</h4>
              <p className="text-white/50 text-xs">
                Habrá un buzón disponible
              </p>
            </div>
            
            {/* Registry Placeholder */}
            <div className="glass-card rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all w-full sm:w-auto opacity-70">
              <Gift className="w-8 h-8 text-white/50 mx-auto mb-3" />
              <h4 className="text-white/70 font-medium mb-2">Mesa de Regalos</h4>
              <p className="text-white/40 text-xs">
                Próximamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
