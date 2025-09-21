"use client";
import { useRef, useEffect, useState, useMemo } from 'react';

interface VideoItem {
  src: string;
  aspectRatio: 'vertical' | 'horizontal' | 'square';
  title: string;
  // Optional: lower numbers appear earlier. If omitted, item goes to the end
  order?: number;
}

const VIDEOS: VideoItem[] = [
  { src: '/images/video1.mp4', aspectRatio: 'vertical', title: 'Vertical Video', order: 1 },
  { src: '/images/video2.mp4', aspectRatio: 'horizontal', title: 'Horizontal Video 1', order: 2 },
  { src: '/images/video3.mp4', aspectRatio: 'square', title: 'Horizontal Video 2', order: 3 },
  { src: '/images/video5.mp4', aspectRatio: 'horizontal', title: 'Square Video', order: 5 },
//   { src: '/images/video4.mp4', aspectRatio: 'horizontal', title: 'Horizontal Video 3', order: 4 },
];

export function VideoCollage({ videos = VIDEOS }: { videos?: VideoItem[] }) {
  const [visibleVideos, setVisibleVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const orderedVideos = useMemo(() => {
    const maxOrder = Number.MAX_SAFE_INTEGER;
    return [...videos].sort((a, b) => (a.order ?? maxOrder) - (b.order ?? maxOrder));
  }, [videos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-video-index') || '0');
          if (entry.isIntersecting) {
            setVisibleVideos(prev => new Set([...prev, index]));
          } else {
            setVisibleVideos(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (visibleVideos.has(index)) {
          video.play().catch(() => {
            // Silently handle autoplay restrictions
          });
        } else {
          video.pause();
        }
      }
    });
  }, [visibleVideos]);

  const getAspectRatioClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'vertical':
        return 'aspect-[9/16]';
      case 'horizontal':
        return 'aspect-video';
      case 'square':
        return 'aspect-square';
      default:
        return 'aspect-video';
    }
  };

  const getGridColumnClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'vertical':
        return 'md:col-span-1 lg:col-span-1';
      case 'horizontal':
        return 'md:col-span-3 lg:col-span-3';
      case 'square':
        return 'md:col-span-1 lg:col-span-1';
      default:
        return 'md:col-span-3 lg:col-span-2';
    }
  };

  return (
    <section id='works' className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center text-white mb-12">
          Works in Motion
        </h2>
        
        {/* Gradient background */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 md:p-8">
          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {orderedVideos.map((video, index) => (
              <div
                key={index}
                className={`${getGridColumnClass(video.aspectRatio)} group h-full`}
              >
                <div className="relative overflow-hidden rounded-2xl bg-black/20 shadow-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-3xl">
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    data-video-index={index}
                    className={`w-full h-full object-cover ${getAspectRatioClass(video.aspectRatio)}`}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={video.title}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Subtle overlay for better visual hierarchy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play indicator for better UX */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 rounded-full blur-xl" />
        </div>
      </div>
    </section>
  );
}
