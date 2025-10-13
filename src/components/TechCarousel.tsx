import { useEffect, useRef, useState } from 'react';

interface TechnologyItem {
  label: string;
  icon?: string;
}

interface TechCarouselProps {
  items: TechnologyItem[];
}

export default function TechCarousel({ items }: TechCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationId: number;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const duplicatedItems = [...items, ...items];

  return (
    <div 
      className="tech-carousel-container relative overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="tech-carousel-scroll flex gap-8 overflow-x-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="tech-item flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-medium-gray border border-gray-800 rounded-lg hover:border-neon-purple/50 transition-all duration-200"
          >
            {item.icon && (
              <div className="w-5 h-5 flex items-center justify-center">
                <img src={item.icon} alt="" className="w-full h-full object-contain" />
              </div>
            )}
            <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .tech-carousel-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-carousel-scroll {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
