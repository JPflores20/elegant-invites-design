import { User, Sparkles } from "lucide-react";

const DressCode = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold mb-6">
            Código de Vestimenta
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
            <Sparkles className="w-5 h-5 text-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </div>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 border border-primary/10 inline-block">
          {/* Formal Icons */}
          <div className="flex items-center justify-center gap-8 md:gap-16 mb-8">
            {/* Men's Formal */}
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                <User className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Caballeros</p>
              <p className="text-xs text-primary font-medium mt-1">Traje formal</p>
            </div>
            
            {/* Divider */}
            <div className="h-20 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
            
            {/* Women's Formal */}
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold/10 flex items-center justify-center mb-3 mx-auto">
                <User className="w-10 h-10 md:w-12 md:h-12 text-gold" />
              </div>
              <p className="text-sm text-muted-foreground">Damas</p>
              <p className="text-xs text-gold font-medium mt-1">Vestido largo</p>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Etiqueta Formal
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Te invitamos a vestir elegante para esta ocasión tan especial. 
            Colores sugeridos: negro, azul marino, dorado, blanco.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
