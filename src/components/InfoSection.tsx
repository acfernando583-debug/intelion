import { useState } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowRight, Wand2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { GeometricPattern } from "./GeometricPattern";
import { VideoBackground } from "./VideoBackground";

const GALLERY_IMAGES = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-03.jpg",
  "/images/gallery/gallery-04.jpg",
  "/images/gallery/gallery-05.jpg",
  "/images/gallery/gallery-06.jpg",
];

export function InfoSection() {
  const { ref, inView } = useInViewAnimation();
  const [activeCard, setActiveCard] = useState("historia");
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section ref={ref} className="relative min-h-screen flex overflow-hidden bg-solar-dark">
      <VideoBackground overlayOpacity={0.5} />
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <GeometricPattern type="diamond-grid" color="rgba(255,215,0,0.3)" size={100} />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-[52%] relative p-4 lg:p-6">
          <div className="liquid-glass-strong absolute inset-4 lg:inset-6 rounded-3xl pointer-events-none" />

          <div className="relative h-full flex flex-col">
            <nav className="flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                <img src="/images/intelion-logo.png" alt="INTELION" className="w-8 h-8" />
                <span className="text-xl font-medium tracking-tight text-white">INTELION</span>
              </div>
            </nav>

            <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
              <div className={`mb-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
                <img src="/images/intelion-logo.png" alt="INTELION" className="w-20 h-20 mx-auto" />
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-center mb-6 tracking-tight ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ letterSpacing: "-0.05em", animationDelay: "0.2s" }}
              >
                <span className="text-gradient-animated">Innovando</span>{" "}
                <span className="text-white">el</span>{" "}
                <span className="italic text-white" style={{ fontFamily: "Noto Sans, system-ui, sans-serif" }}>
                  espíritu
                </span>{" "}
                <span className="text-gradient-animated">de la energía solar</span>
                <span className="typewriter-cursor h-[0.85em] align-middle text-solar-yellow" />
              </h1>

              <p
                className={`text-white/70 text-center max-w-lg mb-8 leading-relaxed ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "0.3s" }}
              >
                <span className="text-gradient-animated">INTELION</span> es una empresa especializada en el diseño, instalación y mantenimiento de sistemas de energía solar fotovoltaica, enfocada en brindar soluciones seguras, eficientes y personalizadas para hogares, edificios e industria.
              </p>

              <div className={`flex flex-wrap gap-3 mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
                <button
                  onClick={() => setActiveCard("historia")}
                  className={`liquid-glass px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform font-medium ${activeCard === "historia" ? "text-solar-yellow border-solar-yellow/30" : "text-white/80"}`}
                >
                  Nuestra historia
                </button>
                <button
                  onClick={() => setActiveCard("soluciones")}
                  className={`liquid-glass px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform font-medium ${activeCard === "soluciones" ? "text-solar-yellow border-solar-yellow/30" : "text-white/80"}`}
                >
                  Soluciones
                </button>
                <button
                  onClick={() => setActiveCard("tecnologia")}
                  className={`liquid-glass px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform font-medium ${activeCard === "tecnologia" ? "text-solar-yellow border-solar-yellow/30" : "text-white/80"}`}
                >
                  Tecnología
                </button>
              </div>

              <div className={`text-center ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
                <p className="text-xs tracking-widest uppercase text-solar-yellow mb-3">QUIÉNES SOMOS</p>
                <p className="text-white/70 italic max-w-md mx-auto" style={{ fontFamily: "Noto Sans, system-ui, sans-serif" }}>
                  Transformando el futuro energético con innovación, tecnología y compromiso sostenible.
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="h-px w-8 bg-solar-yellow/40" />
                  <span className="text-xs text-gradient-animated tracking-wider">INTELION</span>
                  <span className="h-px w-8 bg-solar-yellow/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[48%] flex-col p-6 gap-4">
          <div className="liquid-glass flex-1 p-6 rounded-3xl flex flex-col justify-center transition-all duration-500">
            <div className="relative w-full rounded-2xl overflow-hidden mb-4 group">
              <img
                src={GALLERY_IMAGES[selectedImage]}
                alt={`Galería imagen ${selectedImage + 1}`}
                className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/70 via-solar-dark/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl transition-all duration-500 group-hover:ring-solar-yellow/30" />

              <button
                onClick={() => setSelectedImage((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedImage((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 bg-solar-dark/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                {selectedImage + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === idx
                      ? "ring-2 ring-solar-yellow opacity-100 scale-105"
                      : "opacity-50 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    className="w-full h-16 object-cover"
                    loading="lazy"
                  />
                  {selectedImage === idx && (
                    <div className="absolute inset-0 bg-solar-yellow/10" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="liquid-glass rounded-[2.5rem] p-5">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setActiveCard("ecosistema")}
                className={`liquid-glass rounded-3xl p-5 text-left hover:scale-105 transition-transform ${activeCard === "ecosistema" ? "ring-1 ring-solar-yellow/30" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-medium mb-1">Nuestro ecosistema</h4>
                <p className="text-white/50 text-xs">Diseño, instalación y mantenimiento</p>
              </button>
              <button
                onClick={() => setActiveCard("compromiso")}
                className={`liquid-glass rounded-3xl p-5 text-left hover:scale-105 transition-transform ${activeCard === "compromiso" ? "ring-1 ring-solar-yellow/30" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Wand2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-medium mb-1">Compromiso</h4>
                <p className="text-white/50 text-xs">Resultados medibles y sostenibilidad</p>
              </button>
            </div>
          </div>

          <div className="liquid-glass rounded-3xl p-5 flex items-center gap-4">
            <div className="w-24 h-16 rounded-xl bg-solar-dark/30 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-solar-yellow/20 to-solar-green/20 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium mb-1">Servicio</h4>
              <p className="text-white/50 text-xs">Atención personalizada y cercana</p>
            </div>
            <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
