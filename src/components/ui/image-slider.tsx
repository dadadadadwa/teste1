import { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export function ImageSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Antes da IA",
  afterAlt = "Depois da IA",
  className
}: ImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameRef = useRef<number>();

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    // Cancel previous animation frame if exists
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Use requestAnimationFrame for smooth updates
    animationFrameRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      
      setSliderPosition(percentage);
    });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0].clientX);
  }, [isDragging, updateSliderPosition]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!isDragging) {
      updateSliderPosition(e.clientX);
    }
  }, [isDragging, updateSliderPosition]);

  // Global mouse events for better dragging experience
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        e.preventDefault();
        updateSliderPosition(e.clientX);
      }
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isDragging, updateSliderPosition]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-lg cursor-col-resize select-none bg-card",
        isDragging && "cursor-grabbing",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsDragging(false);
        setIsHovering(false);
      }}
    >
      {/* Before Image */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        className="w-full h-full object-cover"
        draggable={false}
        style={{
          filter: isDragging ? 'brightness(0.9)' : 'brightness(1)',
          transition: isDragging ? 'none' : 'filter 0.2s ease'
        }}
      />
      
      {/* After Image */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ 
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          filter: isDragging ? 'brightness(1.1)' : 'brightness(1)',
          transition: isDragging ? 'none' : 'filter 0.2s ease'
        }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      
      {/* Slider Line */}
      <div
        className={cn(
          "absolute top-0 bottom-0 bg-white shadow-lg z-20",
          isDragging ? "w-1" : "w-0.5",
          isHovering && !isDragging && "w-1"
        )}
        style={{ 
          left: `${sliderPosition}%`, 
          transform: 'translateX(-50%)',
          boxShadow: isDragging ? '0 0 20px rgba(255,255,255,0.8)' : '0 0 10px rgba(0,0,0,0.3)',
          transition: isDragging ? 'none' : 'width 0.2s ease, box-shadow 0.2s ease'
        }}
      />
      
      {/* Slider Handle */}
      <div
        className={cn(
          "absolute top-1/2 z-30 cursor-grab",
          isDragging ? "cursor-grabbing scale-110" : "cursor-grab",
          isHovering && !isDragging && "scale-105"
        )}
        style={{ 
          left: `${sliderPosition}%`, 
          transform: 'translate(-50%, -50%)',
          transition: isDragging ? 'none' : 'transform 0.2s ease'
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
      >
        <div className={cn(
          "w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center",
          isDragging ? "shadow-xl bg-primary text-white" : "bg-white text-primary",
          isHovering && "shadow-xl"
        )}
        style={{
          transition: isDragging ? 'none' : 'all 0.2s ease'
        }}>
          <div className="flex space-x-0.5">
            <div className="w-0.5 h-4 bg-current rounded-full opacity-80"></div>
            <div className="w-0.5 h-4 bg-current rounded-full opacity-60"></div>
            <div className="w-0.5 h-4 bg-current rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
      
      {/* Labels with better mobile positioning */}
      <div 
        className={cn(
          "absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-black/80 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium z-20",
          sliderPosition < 25 && "bg-white/90 text-black"
        )}
        style={{
          transition: isDragging ? 'none' : 'all 0.3s ease'
        }}
      >
        <span className="hidden sm:inline">{beforeAlt}</span>
        <span className="sm:hidden">Original</span>
      </div>
      <div 
        className={cn(
          "absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-black/80 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium z-20",
          sliderPosition > 75 && "bg-white/90 text-black"
        )}
        style={{
          transition: isDragging ? 'none' : 'all 0.3s ease'
        }}
      >
        <span className="hidden sm:inline">{afterAlt}</span>
        <span className="sm:hidden">Profissional</span>
      </div>
      
      {/* Progress indicator - mobile optimized */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 z-20">
        <div className="text-white text-xs font-medium">
          {Math.round(sliderPosition)}%
        </div>
      </div>
    </div>
  );
}