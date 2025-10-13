import { useState } from 'react';

interface FlipTileProps {
  title: string;
  href: string;
  frontImage?: string;
  backImage?: string;
  gradient?: string;
  variant?: 'default' | 'bright';
}

export default function FlipTile({ 
  title, 
  href, 
  frontImage, 
  backImage, 
  gradient = 'from-neon-purple to-neon-pink',
  variant = 'default'
}: FlipTileProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const baseClasses = variant === 'bright' 
    ? 'border-gray-700 bg-white/5' 
    : 'border-gray-800 bg-black/20';
  
  const gradientOpacity = variant === 'bright'
    ? 'opacity-15 group-hover:opacity-25'
    : 'opacity-10 group-hover:opacity-20';

  const backGradientOpacity = variant === 'bright'
    ? 'opacity-25'
    : 'opacity-20';

  return (
    <a
      href={href}
      className="flip-tile-container group block"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      aria-label={`Navigate to ${title}`}
    >
      <div
        className={`flip-tile-inner relative w-full aspect-square transition-all duration-700 ${
          isFlipped ? 'flip-tile-flipped' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Face */}
        <div
          className={`flip-tile-face absolute w-full h-full rounded-2xl border ${baseClasses} flex items-center justify-center overflow-hidden`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} ${gradientOpacity} transition-opacity duration-300`} />
          {frontImage ? (
            <img src={frontImage} alt={title} className="w-full h-full object-cover" />
          ) : (
            <h3 className="text-3xl font-bold font-heading text-white z-10">{title}</h3>
          )}
        </div>

        {/* Back Face */}
        <div
          className={`flip-tile-face absolute w-full h-full rounded-2xl border ${baseClasses} flex items-center justify-center overflow-hidden`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {backImage ? (
            <>
              <img src={backImage} alt={`${title} preview`} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-2xl font-semibold text-white">{title}</span>
              </div>
            </>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradient} ${backGradientOpacity} flex items-center justify-center`}>
              <span className="text-2xl font-semibold text-white">{title}</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
