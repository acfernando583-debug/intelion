import { useState } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowRight, Wand2, Sparkles, Info, Globe, Battery, Shield, LifeBuoy, MousePointerClick } from "lucide-react";
import { GeometricPattern } from "./GeometricPattern";
import { VideoBackground } from "./VideoBackground";

const SUBSECTION_INFO: Record<string, { icon: React.ReactNode; text: string; image?: string }> = {
  soluciones: {
    icon: <Globe className="w-6 h-6 text-solar-yellow" />,
    text: "Soluciones modulares para hogares, edificios e industria. Adaptables a tu espacio y necesidades energéticas.",
  },
  tecnologia: {
    icon: <Sparkles className="w-6 h-6 text-solar-yellow" />,
    text: "Tecnología de vanguardia con microinversores, monitoreo IoT y paneles de alta eficiencia.",
  },
  historia: {
    icon: <Info className="w-6 h-6 text-solar-yellow" />,
    text: "Fundada en 2015, INTELION ha transformado más de 300 hogares e instalaciones con energía solar limpia.",
  },
  ecosistema: {
    icon: <Battery className="w-6 h-6 text-solar-yellow" />,
    text: "Conectamos cada etapa de tu infraestructura técnica bajo un modelo unificado. Desde la ingeniería y arquitectura inicial a medida, pasando por una ejecución e instalación rigurosa, hasta planes continuos de mantenimiento predictivo. Eliminamos la fricción entre múltiples proveedores para garantizar continuidad operativa, máxima eficiencia y mayor vida útil de tus activos.",
    image: "/images/nuestro.jpeg",
  },
  compromiso: {
    icon: <Shield className="w-6 h-6 text-solar-yellow" />,
    text: "Transformamos los objetivos estratégicos en métricas tangibles y verificables. Acompañamos cada implementación con indicadores claros de desempeño (KPIs) y eficiencia energética, optimizando la rentabilidad de tu negocio mientras reducimos la huella ambiental. Innovación responsable que asegura el rendimiento presente sin comprometer el futuro.",
    image: "/images/compromiso.jpeg",
  },
  servicio: {
    icon: <LifeBuoy className="w-6 h-6 text-solar-yellow" />,
    text: "Detrás de cada proyecto hay un equipo técnico dedicado que entiende a fondo las particularidades de tu operación. Sin canales impersonales ni respuestas enlatadas: te brindamos asesoría directa, diagnóstico ágil y acompañamiento continuo hombro a hombro para anticipar contingencias y resolver con inmediatez.",
    image: "/images/servicio.jpeg",
  },
};

export function InfoSection() {
  const { ref, inView } = useInViewAnimation();
  const [activeCard, setActiveCard] = useState("soluciones");
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="info" ref={ref} className="relative min-h-screen flex overflow-hidden bg-solar-dark">
      <VideoBackground overlayOpacity={0.5} />
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <GeometricPattern type="diamond-grid" color="rgba(255,215,0,0.3)" size={100} />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-[52%] relative p-4 lg:p-6">
          <div className="liquid-glass-strong absolute inset-4 lg:inset-6 rounded-3xl pointer-events-none" />

          <div className="relative h-full flex flex-col">
            <nav className="flex items-center justify-center md:justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                <img src="/images/logo menu.png" alt="INTELION" className="h-10 w-auto object-contain" />
                <span className="text-xl font-medium tracking-tight text-white">INTELION</span>
              </div>
            </nav>

            <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
              <div className={`mb-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
                <img src="/images/logo menu.png" alt="INTELION" className="h-24 w-auto mx-auto object-contain" />
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
                  id="sub-historia"
                  onClick={() => { setActiveCard("historia"); setSelectedInfo("historia"); }}
                  className={`hidden liquid-glass px-6 py-3 rounded-full text-sm cursor-pointer hover:scale-105 transition-transform font-medium ${activeCard === "historia" ? "text-solar-yellow border-solar-yellow/30" : "text-white/80"}`}
                >
                  <span className="flex items-center gap-2">
                    Nuestra historia
                    <MousePointerClick className="w-3.5 h-3.5 opacity-60 animate-pulse" />
                  </span>
                </button>
                <button
                  id="sub-soluciones"
                  onClick={() => { setActiveCard("soluciones"); setSelectedInfo("soluciones"); }}
                  className={`liquid-glass px-6 py-3 rounded-full text-sm cursor-pointer hover:scale-105 transition-transform font-medium ${activeCard === "soluciones" ? "text-solar-yellow border-solar-yellow/30" : "text-white/80"}`}
                >
                  <span className="flex items-center gap-2">
                    Soluciones
                    <MousePointerClick className="w-3.5 h-3.5 opacity-60 animate-pulse" />
                  </span>
                </button>
                <button
                  id="sub-tecnologia"
                  onClick={() => { setActiveCard("tecnologia"); setSelectedInfo("tecnologia"); }}
                  className={`liquid-glass px-6 py-3 rounded-full text-sm cursor-pointer hover:scale-105 transition-transform font-medium ${activeCard === "tecnologia" ? "text-solar-yellow border-solar-yellow/30" : "text-white/80"}`}
                >
                  <span className="flex items-center gap-2">
                    Tecnología
                    <MousePointerClick className="w-3.5 h-3.5 opacity-60 animate-pulse" />
                  </span>
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

        <div className="w-full lg:w-[48%] flex-col p-6 gap-4 lg:flex">
          <div className="hidden liquid-glass flex-1 p-6 rounded-3xl flex flex-col justify-center transition-all duration-500">
            <div className="relative w-full rounded-2xl overflow-hidden mb-4 group">
              <img
                src="/images/gallery/gallery-01.jpg"
                alt={`Galería imagen 1`}
                className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/70 via-solar-dark/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl transition-all duration-500 group-hover:ring-solar-yellow/30" />
            </div>
          </div>

          <div className="liquid-glass rounded-[2.5rem] p-5">
            <div className="grid grid-cols-2 gap-4">
              <button
                id="sub-ecosistema"
                onClick={() => { setActiveCard("ecosistema"); setSelectedInfo("ecosistema"); }}
                className={`liquid-glass rounded-3xl p-5 text-left hover:scale-105 transition-transform cursor-pointer ${activeCard === "ecosistema" ? "ring-1 ring-solar-yellow/30" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-medium mb-1 flex items-center gap-2">Nuestro ecosistema <MousePointerClick className="w-3.5 h-3.5 opacity-60 animate-pulse" /></h4>
                <p className="text-white/50 text-xs">Diseño, instalación y mantenimiento</p>
              </button>
              <button
                id="sub-compromiso"
                onClick={() => { setActiveCard("compromiso"); setSelectedInfo("compromiso"); }}
                className={`liquid-glass rounded-3xl p-5 text-left hover:scale-105 transition-transform cursor-pointer ${activeCard === "compromiso" ? "ring-1 ring-solar-yellow/30" : ""}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Wand2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-medium mb-1 flex items-center gap-2">Compromiso <MousePointerClick className="w-3.5 h-3.5 opacity-60 animate-pulse" /></h4>
                <p className="text-white/50 text-xs">Resultados medibles y sostenibilidad</p>
              </button>
            </div>
          </div>

          <div
            id="sub-servicio"
            onClick={() => { setActiveCard("servicio"); setSelectedInfo("servicio"); }}
            className="liquid-glass rounded-3xl p-5 flex items-center gap-4 cursor-pointer"
          >
            <div className="w-24 h-16 rounded-xl bg-solar-dark/30 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-solar-yellow/20 to-solar-green/20 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium mb-1 flex items-center gap-2">
                Servicio <MousePointerClick className="w-3.5 h-3.5 opacity-60 animate-pulse" />
              </h4>
              <p className="text-white/50 text-xs">Atención personalizada y cercana</p>
            </div>
            <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {selectedInfo && SUBSECTION_INFO[selectedInfo] && (
            <div
              className="mt-6 p-5 bg-gradient-to-br from-solar-yellow/15 to-solar-green/15 rounded-2xl border border-solar-yellow/30 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  {SUBSECTION_INFO[selectedInfo].icon}
                </div>
                <div className="text-center">
                  {SUBSECTION_INFO[selectedInfo].image && (
                    <img
                      src={SUBSECTION_INFO[selectedInfo].image}
                      alt={`Información ${selectedInfo}`}
                      className="w-full max-w-sm rounded-xl mb-3 object-cover max-h-64 mx-auto cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setModalOpen(true)}
                    />
                  )}
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                    {SUBSECTION_INFO[selectedInfo].text}
                  </p>
                </div>
              </div>
            </div>
          )}

          {modalOpen && selectedInfo && SUBSECTION_INFO[selectedInfo]?.image && (
            <div
              id="subsection-modal"
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            >
              <div
                className="relative max-w-4xl max-h-[85vh] mx-4 p-6 bg-gradient-to-br from-solar-dark to-solar-gray rounded-3xl border border-solar-yellow/30 overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={SUBSECTION_INFO[selectedInfo].image}
                  alt={`Detalle ${selectedInfo}`}
                  className="w-full h-auto rounded-2xl object-contain mb-6"
                />
                <p className="text-white/85 text-sm md:text-base leading-relaxed">
                  {SUBSECTION_INFO[selectedInfo].text}
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
