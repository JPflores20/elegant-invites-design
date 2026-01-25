import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([0.5]); 
  const [showControls, setShowControls] = useState(false);
  
  // Estado para la pantalla de bienvenida (Overlay)
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // RUTA LOCAL: Asegúrate de tener "musica.mp3" en la carpeta /public
  const SONG_URL = "/musica.mp3"; 

  // Función para iniciar la experiencia (Música + Entrar al sitio)
  const startExperience = () => {
    // 1. FORZAR EL SCROLL AL INICIO (Top: 0)
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 2. Reproducir música
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error autoplay:", error);
            toast.error("Habilita el sonido para escuchar la música.");
          });
      }
    }
    
    // 3. Quitar pantalla de bienvenida
    setFadeOut(true);
    setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 800); 
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      const newVolume = value[0];
      audioRef.current.volume = newVolume;
      setVolume(value);
      setIsMuted(newVolume === 0);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={SONG_URL} 
        loop 
        preload="auto" 
      />

      {/* --- PANTALLA DE BIENVENIDA (OVERLAY) --- */}
      {showWelcomeScreen && (
        <div 
          className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-1000 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="text-center space-y-8 animate-fade-up px-6">
            <span className="font-sans text-muted-foreground tracking-[0.3em] uppercase text-sm md:text-base">
              Bienvenidos a la boda de
            </span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground">
              Isabella <span className="text-primary">&</span> Alejandro
            </h1>

            <div className="w-24 h-[1px] bg-primary/40 mx-auto my-6"></div>

            <Button 
              onClick={startExperience}
              className="bg-primary text-white hover:bg-primary/90 text-lg md:text-xl px-10 py-6 rounded-full font-serif tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              INGRESAR
            </Button>
            
            <p className="text-xs text-muted-foreground/60 mt-4 font-sans">
              (La música comenzará automáticamente)
            </p>
          </div>
        </div>
      )}

      {/* --- REPRODUCTOR FLOTANTE --- */}
      {!showWelcomeScreen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group animate-fade-in">
          
          <div 
            className={`bg-white/95 backdrop-blur-md border border-primary/20 p-4 rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right mb-2 ${
              showControls ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
            }`}
          >
            <div className="flex flex-col gap-4 w-32">
                <div className="flex justify-between items-center text-primary">
                    <span className="text-xs font-serif font-semibold">Volumen</span>
                    <button onClick={toggleMute} className="hover:text-primary/70 transition-colors">
                        {isMuted || volume[0] === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                </div>
                <Slider
                  defaultValue={[0.5]}
                  max={1}
                  step={0.01}
                  value={volume}
                  onValueChange={handleVolumeChange}
                  className="cursor-pointer"
                />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={togglePlay}
                    onMouseEnter={() => setShowControls(true)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg border-2 transition-all duration-500 hover:scale-105 ${
                      isPlaying 
                        ? "bg-primary text-white border-transparent animate-[pulse-glow_3s_infinite]" 
                        : "bg-white text-primary border-primary"
                    }`}
                  >
                    {isPlaying ? (
                        <Pause className="w-6 h-6 md:w-7 md:h-7 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 md:w-7 md:h-7 fill-current ml-1" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left" className="font-serif bg-primary text-white border-none">
                  {isPlaying ? "Pausar" : "Reproducir"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;