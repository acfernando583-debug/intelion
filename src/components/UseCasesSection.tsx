import { ArrowRight, Home, Building2, Factory } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const USE_CASES = [
  {
    title: "Hogar",
    description:
      "Reduce tu <span class='text-solar-yellow font-medium'>factura eléctrica</span>, aumenta tu <span class='text-solar-yellow font-medium'>independencia energética</span> y aporta al cuidado del medio ambiente. Opción de integración con baterías para respaldo ante cortes de red.",
    Icon: Home,
    image: "/images/usecase-hogar.jpg",
    clip: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    radius: "rounded-[40px_40px_40px_40px]",
    radiusHover: "group-hover:rounded-[32px_48px_32px_48px]",
  },
  {
    title: "Edificio",
    description:
      "Optimiza el consumo energético en zonas comunes, reduce <span class='text-solar-yellow font-medium'>costos operativos</span> y gestiona sistemas para ascensores, bombas de agua y presurización.",
    Icon: Building2,
    image: "/images/usecase-edificio.jpg",
    clip: "circle(50% at 50% 50%)",
    radius: "rounded-[60px_32px_60px_32px]",
    radiusHover: "group-hover:rounded-[48px_40px_48px_40px]",
  },
  {
    title: "Industria",
    description:
      "Proyectos solares de alta capacidad para reducir costos energéticos, mejorar competitividad y avanzar hacia la <span class='text-solar-yellow font-medium'>sostenibilidad empresarial</span>.",
    Icon: Factory,
    image: "/images/usecase-industria.jpg",
    clip: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    radius: "rounded-[32px_32px_48px_48px]",
    radiusHover: "group-hover:rounded-[40px_40px_48px_48px]",
  },
];

export function UseCasesSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section id="sec-009" ref={ref} className="bg-gray-50 px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 90%, rgba(255,214,0,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 10%, rgba(0,100,180,0.1) 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-solar-dark/10" />
      </div>
      <div className="max-w-[88rem] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="md:pr-8">
            <div className={`inline-flex items-center gap-3 mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 rounded-full bg-solar-yellow" />
              <span className="text-solar-yellow text-sm font-semibold tracking-wider uppercase">Soluciones</span>
              <span className="w-2 h-2 rounded-full bg-solar-yellow" />
            </div>
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-6 tracking-tight text-solar-dark ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ letterSpacing: "-0.04em", animationDelay: "0.15s" }}
            >
              Hogar, Edificio,<br />
              <span className="text-solar-yellow">Industria</span>
            </h2>
            <p
              className={`text-solar-dark/70 text-base md:text-lg leading-relaxed max-w-md ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.25s" }}
            >
              Sistemas fotovoltaicos adaptados a cada necesidad, desde el autoconsumo residencial hasta proyectos de alta potencia industrial.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USE_CASES.map((item, i) => (
            <div
              key={item.title}
              className={`relative group overflow-hidden min-h-[420px] ${inView ? "animate-fade-in-scale" : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className={`absolute inset-0 ${item.radius} transition-all duration-700 ${item.radiusHover} border-2 border-solar-dark/10 group-hover:border-solar-yellow/40 bg-white/40 backdrop-blur-sm`} />
              <div className="absolute inset-2 overflow-hidden" style={{ clipPath: item.clip }}>
                <img
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.image}
                  style={{ objectPosition: "center center" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-solar-yellow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-white/20" />
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-solar-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10">
                <div>
                  <item.Icon className="w-10 h-10 mb-6 text-solar-yellow" strokeWidth={1.5} />
                  <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-4 text-solar-dark tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="text-solar-dark/70 text-base leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <a href="#" className="inline-flex items-center gap-2 group/btn">
                    <span className="text-solar-dark font-medium text-base group-hover/btn:text-solar-yellow transition-colors duration-300">
                      Conocer más
                    </span>
                    <span className="w-10 h-10 rounded-full bg-solar-yellow/80 backdrop-blur flex items-center justify-center group-hover/btn:bg-solar-yellow group-hover/btn:scale-110 group-hover/btn:rotate-45 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-solar-dark" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
