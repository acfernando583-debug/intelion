import { Leaf } from "lucide-react";
import { Button } from "./HeroParts";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export function PartnerSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="bg-solar-gray px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-solar-yellow/5 rounded-full blur-3xl" />
      </div>
      <div
        className={`relative max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl py-20 md:py-28 px-8 md:px-16 overflow-hidden ${inView ? "animate-fade-in-scale" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-solar-yellow/5 via-transparent to-solar-green/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-solar-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solar-yellow/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-solar-yellow animate-pulse" />
            <span className="text-solar-dark text-sm font-medium">Disponible para proyectos</span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-solar-dark mb-6 tracking-tight leading-tight"
            style={{ fontFamily: "Noto Sans, system-ui, sans-serif" }}
          >
            Transforme su consumo energético
          </h2>
          <p className="text-solar-dark/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Analizamos su necesidad energética y diseñamos la solución que mejor se adapte a su proyecto. Energía solar inteligente para hogares, edificios e industria.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" arrow className="mx-auto btn-hover">
              Solicitar diagnóstico gratuito
            </Button>
            <Button
              variant="secondary"
              className="mx-auto btn-hover"
            >
              Llamar ahora
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-2 text-solar-dark/50">
            <Leaf className="w-4 h-4" strokeWidth={1.75} />
            <span className="text-sm">Un solo aliado, desde el diagnóstico hasta el monitoreo continuo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
