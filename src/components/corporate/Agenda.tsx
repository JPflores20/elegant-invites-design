import { Clock, User } from "lucide-react";

const schedule = [
  {
    time: "09:00 AM",
    title: "Registro & Café de Bienvenida",
    speaker: "Lobby Principal",
    type: "Networking"
  },
  {
    time: "10:00 AM",
    title: "Keynote: El Futuro de la IA",
    speaker: "Dr. Elena Vance",
    role: "CTO, FutureTech",
    type: "Conferencia"
  },
  {
    time: "11:30 AM",
    title: "Panel: Liderazgo Resiliente",
    speaker: "Moderado por Carlos Ruiz",
    role: "CEO, Business Corp",
    type: "Panel"
  },
  {
    time: "01:00 PM",
    title: "Almuerzo Ejecutivo",
    speaker: "Terraza Garden",
    type: "Break"
  },
  {
    time: "03:00 PM",
    title: "Workshop: Estrategias 2030",
    speaker: "Equipo Directivo",
    type: "Taller"
  },
  {
    time: "06:00 PM",
    title: "Cóctel de Networking",
    speaker: "Rooftop Bar",
    type: "Social"
  }
];

const Agenda = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-end justify-between mb-16 border-b border-slate-200 pb-6">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Cronograma</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Agenda del Día</h2>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-slate-500">15 Noviembre, 2026</p>
             <p className="text-slate-900 font-medium">09:00 AM - 08:00 PM</p>
          </div>
        </div>

        <div className="space-y-6">
          {schedule.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row gap-6 p-6 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors rounded-none"
            >
              <div className="md:w-32 flex-shrink-0">
                <div className="flex items-center gap-2 text-blue-600 font-mono font-medium">
                  <Clock className="w-4 h-4" />
                  {item.time}
                </div>
                <span className="inline-block mt-2 px-2 py-1 bg-slate-100 text-slate-500 text-xs uppercase font-bold tracking-wider rounded-sm">
                  {item.type}
                </span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                <div className="flex items-center gap-2 text-slate-600">
                  <User className="w-4 h-4 text-slate-400" />
                  <span className="font-medium">{item.speaker}</span>
                  {item.role && <span className="text-slate-400">— {item.role}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
