import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Sparkles, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayerXv = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([0.5]); 
  const [showControls, setShowControls] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const SONG_URL = "/musica.mp3"; // Asegúrate de que este archivo exista en /public

  const startExperience = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => console.error("Error al reproducir:", error));
      }
    }
    setShowWelcomeScreen(false);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value[0];
      setIsMuted(value[0] === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={SONG_URL} loop preload="auto" />

      {/* PANTALLA DE BIENVENIDA (OVERLAY) */}
      <AnimatePresence>
        {showWelcomeScreen && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-red-950 text-white px-4"
          >
            {/* Fondo animado sutil */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse" />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 text-center space-y-8 max-w-lg"
            >
              <div className="space-y-2">
                <p className="text-red-200 uppercase tracking-[0.3em] text-sm">
                  Bienvenidos a los XV de
                </p>
                <h1 className="font-serif text-6xl md:text-7xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  Valentina
                </h1>
              </div>

              <div className="flex justify-center">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50" />
              </div>

              <Button
                onClick={startExperience}
                className="bg-white text-red-900 hover:bg-red-100 px-8 py-6 text-lg font-serif tracking-widest rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-300 group"
              >
                <Sparkles className="w-4 h-4 mr-2 text-red-500 animate-pulse" />
                INGRESAR
                <Sparkles className="w-4 h-4 ml-2 text-red-500 animate-pulse" />
              </Button>

              <p className="text-red-300/60 text-xs flex items-center justify-center gap-2">
                <Music className="w-3 h-3" />
                La música comenzará automáticamente
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÓN FLOTANTE (MINIMIZADO) */}
      {!showWelcomeScreen && (
        <div className="fixed bottom-4 right-4 z-50 flex items-end gap-2">
          {showControls && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-red-100 mb-4 md:mb-0"
            >
              <div className="flex flex-col gap-4 w-32">
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-900" onClick={togglePlay}>
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-900" onClick={toggleMute}>
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
                <Slider
                  defaultValue={[0.5]}
                  max={1}
                  step={0.01}
                  value={volume}
                  onValueChange={handleVolumeChange}
                  className="[&>span:first-child]:bg-red-900"
                />
              </div>
            </motion.div>
          )}

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={`rounded-full w-12 h-12 shadow-xl border-red-200 bg-white/90 backdrop-blur hover:bg-red-50 ${isPlaying ? "animate-spin-slow" : ""}`}
                  onClick={() => setShowControls(!showControls)}
                >
                  <Music className="h-5 w-5 text-red-900" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-red-900 text-white border-0">
                <p>Música de fondo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </>
  );
};

export default MusicPlayerXv;