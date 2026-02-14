import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3); // Initial volume 40%
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Actual music file from public folder
  const audioSrc = "/I_Gotta_Feeling.mp3";

  useEffect(() => {
    // Attempt to auto-play on mount
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = volume; // Set initial volume
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay blocked by browser - user interaction required");
          setIsPlaying(false);
        }
      }
    };

    playAudio();
  }, []); // Run only on mount

  // Update volume when state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (volume > 0 && isMuted) {
        setIsMuted(false);
      }
    }
  }, [volume]);

  // Update mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

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

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Handle keyboard interaction for the container
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsExpanded(false);
    }
  };

  return (
    <div 
      className={`fixed bottom-24 right-4 z-40 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-14"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onFocus={() => setIsExpanded(true)}
      onBlur={(e) => {
        // Only collapse if focus moves outside the component
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsExpanded(false);
        }
      }}
      onKeyDown={handleKeyDown}
    >
      <audio ref={audioRef} src={audioSrc} loop />
      
      <div className="glass-card rounded-full border border-gold/30 bg-primary/90 backdrop-blur-md shadow-lg overflow-hidden">
        <div className="flex items-center h-14">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-14 h-14 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors flex-shrink-0 focus:outline-none focus:bg-gold/20"
            aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </button>
          
          {/* Expanded Content */}
          <div className={`flex items-center gap-3 pr-4 transition-all duration-300 ${
            isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
          }`}>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1">
                <Music className="w-3 h-3 text-gold/70 flex-shrink-0" />
                <span className="text-white text-xs truncate">
                  {audioSrc ? "I Gotta Feeling - Black Eyed Peas" : "Sin música"}
                </span>
              </div>
              
              {/* Volume Slider */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full"
              />
            </div>
            
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="w-8 h-8 flex items-center justify-center text-gold/70 hover:text-gold transition-colors flex-shrink-0 focus:outline-none focus:text-gold"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
