interface SectionDividerProps {
  position?: "top" | "bottom";
  variant?: "wave" | "curve" | "slant";
  className?: string;
  fill?: string;
}

export const SectionDivider = ({ 
  position = "bottom", 
  variant = "wave", 
  className = "",
  fill = "fill-background" 
}: SectionDividerProps) => {
  const rotation = position === "top" ? "rotate-180" : "";
  
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-none z-10 ${position === "bottom" ? "-bottom-1" : "-top-1"} ${rotation} ${className}`}>
      {variant === "wave" && (
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-8 md:h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={`${fill}`}></path>
        </svg>
      )}
      
      {variant === "curve" && (
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-10 md:h-24">
           <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={`${fill}`}></path>
         </svg>
      )}

      {variant === "slant" && (
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-12 md:h-20">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={`${fill}`}></path>
        </svg>
      )}
    </div>
  );
};
