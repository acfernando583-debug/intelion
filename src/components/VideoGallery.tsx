import { useState, useEffect } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Play, X } from "lucide-react";

const VIDEOS = [
  { src: "/videos/1.mp4", thumb: "/videos/1.mp4", title: "Proyecto 1" },
  { src: "/videos/2.mp4", thumb: "/videos/2.mp4", title: "Proyecto 2" },
  { src: "/videos/3.mp4", thumb: "/videos/3.mp4", title: "Proyecto 3" },
  { src: "/videos/4.mp4", thumb: "/videos/4.mp4", title: "Proyecto 4" },
  { src: "/videos/5.mp4", thumb: "/videos/5.mp4", title: "Proyecto 5" },
  { src: "/videos/6.mp4", thumb: "/videos/6.mp4", title: "Proyecto 6" },
];

export function VideoGallery() {
  const { ref, inView } = useInViewAnimation();
  const [active, setActive] = useState<number | null>(null);
  const [loadedThumbs, setLoadedThumbs] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section ref={ref} className="bg-solar-dark py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,214,0,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,100,180,0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        <div
          className={`text-center mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <p className="text-solar-yellow text-xs font-semibold tracking-wider uppercase mb-4">
            Galería
          </p>
          <h2
            className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight"
            style={{ fontFamily: "Noto Sans, system-ui, sans-serif" }}
          >
            Proyectos en <span className="text-gradient">video</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Explora nuestros trabajos instalados y conoce de primera mano la calidad y el impacto de nuestras soluciones solares.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video, idx) => (
            <button
              key={video.src}
              onClick={() => setActive(idx)}
              className={`group relative rounded-3xl overflow-hidden aspect-video text-left transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
            >
              <video
                src={video.thumb}
                muted
                playsInline
                preload="metadata"
                onLoadedData={() =>
                  setLoadedThumbs((prev) => {
                    const next = new Set(prev);
                    next.add(idx);
                    return next;
                  })
                }
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedThumbs.has(idx) ? "opacity-100" : "opacity-0"
                }`}
              />
              {!loadedThumbs.has(idx) && (
                <div className="absolute inset-0 bg-solar-dark/40 animate-pulse" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/80 via-solar-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">{video.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={active}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-contain bg-black"
            >
              <source src={VIDEOS[active].src} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
