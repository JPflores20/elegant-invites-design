import { Shirt, User } from "lucide-react";

const DressCode = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Código de Vestimenta</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-12">Business Formal</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Option 1: Caballeros */}
          <div className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-700">
               <Shirt className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Caballeros</h3>
            <ul className="text-slate-600 space-y-2 text-sm leading-relaxed">
              <li>Traje completo (oscuro preferible)</li>
              <li>Camisa de vestir y corbata</li>
              <li>Zapatos formales</li>
            </ul>
          </div>

          {/* Option 2: Damas */}
          <div className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-700">
               <User className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Damas</h3>
            <ul className="text-slate-600 space-y-2 text-sm leading-relaxed">
              <li>Traje sastre o vestido formal</li>
              <li>Colores sobrios y elegantes</li>
              <li>Zapatos de tacón o vestir</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-12 text-slate-500 italic text-sm">
          "La elegancia no es destacar, sino ser recordado."
        </p>
      </div>
    </section>
  );
};

export default DressCode;
