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
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayerXv = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([0.5]); 
  const [showControls, setShowControls] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // CAMBIO AQUÍ: Usamos el nuevo archivo de música
  const SONG_URL = "/MusicXV.mp3"; 

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
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white px-4"
          >
            {/* Fondo animado oscuro/rojo */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-950 via-black to-red-950 opacity-90" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse mix-blend-overlay" />
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 text-center space-y-8 max-w-lg"
            >
              <div className="space-y-4">
                <p className="text-red-200 uppercase tracking-[0.4em] text-xs font-bold">
                  Bienvenidos a los XV de
                </p>
                <h1 className="font-serif text-6xl md:text-8xl text-white drop-shadow-[0_0_25px_rgba(220,38,38,0.6)]">
                  Valentina
                </h1>
              </div>

              <div className="flex justify-center py-6">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70" />
              </div>

              <Button
                onClick={startExperience}
                className="bg-red-600 text-white hover:bg-red-500 px-10 py-7 text-lg font-serif tracking-widest rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-500 group border border-red-400/30"
              >
                <Sparkles className="w-5 h-5 mr-3 text-yellow-200 animate-pulse" />
                INGRESAR
                <Sparkles className="w-5 h-5 ml-3 text-yellow-200 animate-pulse" />
              </Button>

              <p className="text-white/40 text-xs flex items-center justify-center gap-2 mt-4 font-light">
                <Music className="w-3 h-3" />
                La música comenzará automáticamente
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTROLES FLOTANTES */}
      {!showWelcomeScreen && (
        <div className="fixed bottom-4 right-4 z-50 flex items-end gap-2">
          {showControls && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-black/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-red-500/20 mb-4 md:mb-0"
            >
              <div className="flex flex-col gap-4 w-32">
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10 hover:text-red-200" onClick={togglePlay}>
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10 hover:text-red-200" onClick={toggleMute}>
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
                <Slider
                  defaultValue={[0.5]}
                  max={1}
                  step={0.01}
                  value={volume}
                  onValueChange={handleVolumeChange}
                  className="[&>span:first-child]:bg-red-500"
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
                  className={`rounded-full w-12 h-12 shadow-[0_0_20px_rgba(220,38,38,0.3)] border-red-500/40 bg-black/60 backdrop-blur-md hover:bg-red-900/50 hover:border-red-400 text-white ${isPlaying ? "animate-spin-slow" : ""}`}
                  onClick={() => setShowControls(!showControls)}
                >
                  <Music className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-red-900 text-white border-red-700">
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