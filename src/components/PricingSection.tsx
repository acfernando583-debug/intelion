import { useState } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { GeometricPattern } from "./GeometricPattern";
import { Search, PenTool, Wrench, Activity } from "lucide-react";

const STEP_COLORS = [
  { soft: "rgba(255,183,77,0.25)", border: "rgba(255,183,77,0.6)", glow: "rgba(255,183,77,0.35)", shape: "60% 40% 70% 30% / 50% 60% 40% 50%", accent: "#FFB74D" },
  { soft: "rgba(79,195,247,0.25)", border: "rgba(79,195,247,0.6)", glow: "rgba(79,195,247,0.35)", shape: "40% 60% 50% 50% / 60% 40% 60% 40%", accent: "#4FC3F7" },
  { soft: "rgba(129,199,132,0.25)", border: "rgba(129,199,132,0.6)", glow: "rgba(129,199,132,0.35)", shape: "50% 50% 60% 40% / 40% 50% 50% 60%", accent: "#81C784" },
  { soft: "rgba(149,117,205,0.25)", border: "rgba(149,117,205,0.6)", glow: "rgba(149,117,205,0.35)", shape: "55% 45% 45% 55% / 55% 45% 55% 45%", accent: "#9575CD" },
];

const STEPS = [
  {
    number: "01",
    title: "Análisis y Diagnóstico",
    description:
      "Evaluación del consumo energético, análisis técnico del sitio e identificación de oportunidades de ahorro.",
    info: "Revisión completa del historial de consumo y sitio. Identificamos oportunidades de ahorro de hasta 70% en tu factura eléctrica.",
    icon: <Search className="w-6 h-6 text-solar-yellow" />,
  },
  {
    number: "02",
    title: "Diseño e Ingeniería",
    description:
      "Dimensionamiento del sistema, selección de tecnología adecuada, evaluación técnica y económica.",
    info: "Cálculo preciso del sistema con software profesional. Seleccionamos la mejor combinación de paneles, inversores y baterías para ti.",
    icon: <PenTool className="w-6 h-6 text-blue-400" />,
  },
  {
    number: "03",
    title: "Instalación Certificada",
    description:
      "Montaje profesional, pruebas de aislamiento, configuración de inversores y puesta en marcha.",
    info: "Instalación realizada por técnicos certificados. Pruebas de calidad y puesta en marcha garantizada antes de entregarte tu sistema.",
    icon: <Wrench className="w-6 h-6 text-green-400" />,
  },
  {
    number: "04",
    title: "Monitoreo y Soporte",
    description:
      "Seguimiento continuo del rendimiento, mantenimiento preventivo y soporte especializado.",
    info: "Monitoreo 24/7 de tu sistema vía app. Mantenimiento predictivo y soporte técnico siempre disponible para máxima eficiencia.",
    icon: <Activity className="w-6 h-6 text-purple-400" />,
  },
];

export function PricingSection() {
  const { ref, inView } = useInViewAnimation();
  const [isHovering, setIsHovering] = useState(false);
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  return (
    <section id="proceso" ref={ref} className="bg-white px-6 py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-solar-gray/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <GeometricPattern type="rect-grid" color="rgba(0,51,102,0.5)" size={100} />
      </div>
      <div className="max-w-[88rem] mx-auto relative">
        <div className="mb-20">
          <div className={`inline-block mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <span className="text-solar-yellow text-sm font-semibold tracking-wider uppercase">Proceso</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-solar-dark tracking-tight mb-6 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            Cómo desarrollamos<br />
            <span className="text-gradient">su proyecto</span>
          </h2>
          <p
            className={`text-solar-dark/60 text-base md:text-lg leading-relaxed max-w-2xl ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.25s" }}
          >
            Un solo aliado para todo el ciclo de su sistema solar, desde el análisis inicial hasta la operación y mantenimiento continuo.
          </p>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 26 22 C 50 4, 50 4, 74 22" fill="none" stroke="#FFB74D" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "0.7s" }} />
            <path d="M 76 32 C 94 52, 68 58, 24 76" fill="none" stroke="#4FC3F7" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "0.9s" }} />
            <path d="M 26 78 C 50 96, 50 96, 74 78" fill="none" stroke="#81C784" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "1.1s" }} />
          </svg>
          <svg className="absolute inset-0 w-full h-full pointer-events-none md:hidden" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 50 16 C 68 28, 68 36, 50 42" fill="none" stroke="#FFB74D" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "0.7s" }} />
            <path d="M 50 56 C 68 62, 68 66, 50 76" fill="none" stroke="#4FC3F7" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "0.9s" }} />
            <path d="M 50 80 C 68 86, 68 90, 50 96" fill="none" stroke="#81C784" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "1.1s" }} />
          </svg>
          {/* Desktop wave dots (2-col grid) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 50 }}>
            <div className={`wave-dot wave-desktop-1 ${isHovering ? "active" : ""}`} />
            <div className={`wave-dot wave-desktop-2 ${isHovering ? "active" : ""}`} />
            <div className={`wave-dot wave-desktop-3 ${isHovering ? "active" : ""}`} />
          </div>
          {/* Mobile wave dots (1-col layout) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none md:hidden" style={{ zIndex: 50 }}>
            <div className={`wave-dot wave-mobile-1 ${isHovering ? "active" : ""}`} />
            <div className={`wave-dot wave-mobile-2 ${isHovering ? "active" : ""}`} />
            <div className={`wave-dot wave-mobile-3 ${isHovering ? "active" : ""}`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STEPS.map((step, i) => {
              const color = STEP_COLORS[i];
              return (
                <div
                  id={`step-${step.number.toLowerCase().replace(" ", "-")}`}
                  key={step.number}
                  onClick={() => setSelectedStep(step.number)}
                  className={`group relative rounded-[32px] p-8 md:p-10 overflow-hidden cursor-pointer ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{
                    animationDelay: `${0.3 + i * 0.12}s`,
                    backgroundColor: "#f3f4f6",
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = color.soft;
                    el.style.borderRadius = color.shape;
                    el.style.transform = "translateY(-6px) scale(1.02)";
                    el.style.boxShadow = `0 25px 50px -12px ${color.glow}, 0 0 0 1px ${color.border}`;
                    const inner = el.querySelector('.relative.z-10') as HTMLElement;
                    if (inner) inner.style.padding = "6px";
                    const header = el.querySelector('.flex.items-center.justify-between') as HTMLElement;
                    if (header) {
                      header.style.justifyContent = "center";
                      header.style.gap = "0";
                    }
                    const dot = el.querySelector('.w-10.h-10.rounded-full') as HTMLElement;
                    if (dot) dot.style.opacity = "0";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "#f3f4f6";
                    el.style.borderRadius = "32px";
                    el.style.transform = "translateY(0) scale(1)";
                    el.style.boxShadow = "none";
                    const inner = el.querySelector('.relative.z-10') as HTMLElement;
                    if (inner) inner.style.padding = "0";
                    const header = el.querySelector('.flex.items-center.justify-between') as HTMLElement;
                    if (header) {
                      header.style.justifyContent = "space-between";
                      header.style.gap = "";
                    }
                    const dot = el.querySelector('.w-10.h-10.rounded-full') as HTMLElement;
                    if (dot) dot.style.opacity = "1";
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ backgroundColor: color.glow }}
                  />
                  <div
                    className="relative z-10 flex flex-col items-center text-center transition-all duration-500"
                    style={{ padding: "0" }}
                  >
                    <div className="flex items-center justify-between mb-6 w-full transition-all duration-500">
                      <span
                        className="text-6xl md:text-7xl font-medium tracking-tighter transition-all duration-500"
                        style={{ color: color.accent }}
                      >
                        {step.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                        style={{ backgroundColor: color.soft }}
                      >
                        <div
                          className="w-2 h-2 rounded-full transition-colors duration-500"
                          style={{ backgroundColor: color.accent }}
                        />
                      </div>
                    </div>
                    <h3
                      className="text-solar-dark text-xl md:text-2xl font-medium mb-4 transition-all duration-500"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-solar-dark/60 text-base leading-relaxed transition-all duration-500 max-w-[90%]"
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {selectedStep && (
            <div
              id="step-dialog"
              className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-br from-solar-yellow/10 to-solar-blue/10 border border-solar-yellow/30 rounded-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  {STEPS.find(s => s.number === selectedStep)?.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-solar-dark font-semibold text-lg mb-2 flex items-center gap-2">
                    {STEPS.find(s => s.number === selectedStep)?.title}
                    <span className="text-solar-yellow">🚀</span>
                  </h4>
                  <p className="text-solar-dark/70 text-base leading-relaxed">
                    {STEPS.find(s => s.number === selectedStep)?.info}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
