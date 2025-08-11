
import { useState, useCallback, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  lazy?: boolean;
  aspectRatio?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  fallback,
  lazy = true,
  aspectRatio,
  width,
  height,
  priority = false,
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className={cn("relative overflow-hidden", aspectRatio && `aspect-[${aspectRatio}]`, className)}
      style={width && height ? { width: `${width}px`, height: `${height}px` } : undefined}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={hasError && fallback ? fallback : src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : lazy ? "lazy" : "eager"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          "w-full h-full object-cover"
        )}
        style={{ contentVisibility: "auto" }}
        {...props}
      />
    </div>
  );
}
