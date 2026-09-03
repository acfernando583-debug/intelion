import { useState, useEffect, useRef } from "react";
import { ArrowRight, Home, Building2, Factory, Zap, Wind, BarChart3 } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const USE_CASES = [
  {
    title: "Hogar",
    description:
      "Reduce tu factura eléctrica, aumenta tu independencia energética y aporta al cuidado del medio ambiente. Opción de integración con baterías para respaldo ante cortes de red.",
    Icon: Home,
    image: "/images/usecase-hogar.jpg",
    clip: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    radius: "rounded-[40px_40px_40px_40px]",
    radiusHover: "group-hover:rounded-[32px_48px_32px_48px]",
    info: "Sistema solar residencial de 5-10kW con opción de batería. Ideal para reducir tu factura hasta en un 90%.",
    icon: <Zap className="w-6 h-6 text-[#F26522]" />,
  },
  {
    title: "Edificio",
    description:
      "Optimiza el consumo energético en zonas comunes, reduce costos operativos y gestiona sistemas para ascensores, bombas de agua y presurización.",
    Icon: Building2,
    image: "/images/usecase-edificio.jpg",
    clip: "circle(50% at 50% 50%)",
    radius: "rounded-[60px_32px_60px_32px]",
    radiusHover: "group-hover:rounded-[48px_40px_48px_40px]",
    info: "Solución comercial para edificios. Gestión de carga para ascensores, bombeo de agua y sistemas HVAC.",
    icon: <Wind className="w-6 h-6 text-[#F26522]" />,
  },
  {
    title: "Industria",
    description:
      "Proyectos solares de alta capacidad para reducir costos energéticos, mejorar competitividad y avanzar hacia la sostenibilidad empresarial.",
    Icon: Factory,
    image: "/images/usecase-industria.jpg",
    clip: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    radius: "rounded-[32px_32px_48px_48px]",
    radiusHover: "group-hover:rounded-[40px_40px_48px_48px]",
    info: "Proyectos industriales de alta potencia. Microinversores y sistemas de gestión de carga inteligente.",
    icon: <BarChart3 className="w-6 h-6 text-[#F26522]" />,
  },
];

export function UseCasesSection() {
  const { ref, inView } = useInViewAnimation();
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [visiblePopup, setVisiblePopup] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCardClick = (title: string) => {
    const key = title.toLowerCase();
    if (timerRef.current) clearTimeout(timerRef.current);
    if (activePopup === key) {
      setVisiblePopup(null);
      setTimeout(() => setActivePopup(null), 300);
      setActivePopup(null);
    } else {
      setActivePopup(key);
      setTimeout(() => setVisiblePopup(key), 50);
      timerRef.current = setTimeout(() => {
        setVisiblePopup(null);
        setTimeout(() => setActivePopup(null), 300);
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section id="sec-009" ref={ref} className="bg-white px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 90%, rgba(242,101,34,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 10%, rgba(232,112,78,0.1) 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-black/10" />
      </div>
      <div className="max-w-[88rem] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="md:pr-8">
            <div className={`inline-flex items-center gap-3 mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 rounded-full bg-[#F26522]" />
              <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Soluciones</span>
              <span className="w-2 h-2 rounded-full bg-[#F26522]" />
            </div>
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-6 tracking-tight text-gray-900 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ letterSpacing: "-0.04em", animationDelay: "0.15s" }}
            >
              Hogar, Edificio,<br />
              <span className="text-[#F26522]">Industria</span>
            </h2>
            <p
              className={`text-gray-600 text-base md:text-lg leading-relaxed max-w-md ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.25s" }}
            >
              Sistemas fotovoltaicos adaptados a cada necesidad, desde el autoconsumo residencial hasta proyectos de alta potencia industrial.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map((item, i) => {
            const popupKey = item.title.toLowerCase();
            const isVisible = visiblePopup === popupKey;
            const isActive = activePopup === popupKey;
            return (
              <div
                id={`usecase-${popupKey}`}
                key={item.title}
                className={`relative group overflow-hidden min-h-[420px] ${inView ? "animate-fade-in-scale" : "opacity-0"}`}
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 ${item.radius} transition-all duration-700 ${item.radiusHover} border-2 border-white/20 group-hover:border-[#F26522]/40`}
                />
                <div className="absolute inset-2 overflow-hidden" style={{ clipPath: item.clip }}>
                  <img
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={item.image}
                    style={{ objectPosition: "center center" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-gray-900/10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-[#F26522]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10">
                  <div>
                    <item.Icon className="w-10 h-10 mb-6 text-[#F26522]" strokeWidth={1.5} />
                    <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-4 text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => handleCardClick(item.title)}
                      className="inline-flex items-center gap-2 group/btn cursor-pointer"
                    >
                      <span className="text-white font-medium text-base group-hover/btn:text-[#F26522] transition-colors duration-300">
                        Conocer más
                      </span>
                      <span className="w-10 h-10 rounded-full bg-[#F26522]/80 backdrop-blur flex items-center justify-center group-hover/btn:bg-[#F26522] group-hover/btn:scale-110 group-hover/btn:rotate-45 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </span>
                    </button>

                    {isActive && (
                      <div
                        className={`absolute bottom-full right-0 mb-2 w-64 z-30 transition-all duration-300 ${
                          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
                        }`}
                      >
                        <div className="bg-gray-900 text-white text-xs p-4 rounded-xl shadow-2xl border border-[#F26522]/50 relative">
                          <div className="flex items-start gap-3">
                            <div className="shrink-0 mt-0.5">{item.icon}</div>
                            <p className="leading-relaxed">{item.info}</p>
                          </div>
                          <div className="absolute -bottom-2 right-4 w-3 h-3 rotate-45 bg-gray-900 border-l-2 border-b-2 border-[#F26522]/50 transform translate-y-1" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
