import { ArrowRight } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const PRODUCTS = [
  {
    number: "01",
    title: "Paneles Solares",
    description:
      "Alta eficiencia y durabilidad con tecnología de punta para máxima generación de energía.",
    image: "/images/products/product-panels.jpg",
  },
  {
    number: "02",
    title: "Inversores",
    description:
      "Conversión inteligente de energía DC a AC con marcas líderes en el mercado.",
    image: "/images/products/product-inverter.jpg",
  },
  {
    number: "03",
    title: "Baterías",
    description:
      "Almacenamiento de energía para respaldo y autonomía en sistemas híbridos y aislados.",
    image: "/images/products/product-battery.jpg",
  },
];

export function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section id="sec-011" ref={ref} className="bg-white px-6 py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative">
        <div className={`px-0 mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-solar-yellow animate-pulse" />
            <span className="text-solar-yellow text-xs font-semibold tracking-[0.3em] uppercase">Tecnología</span>
            <span className="w-2 h-2 rounded-full bg-solar-yellow animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
            Nuestra <span className="text-solar-yellow italic" style={{ fontFamily: "Noto Sans, system-ui, sans-serif" }}>tecnología</span>
          </h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/60 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {PRODUCTS.map((product) => (
            <div key={product.number} className="relative h-full min-h-[480px] group cursor-pointer">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={product.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase mb-3 block">{product.number}</span>
                  <h3 className="text-3xl font-bold text-white tracking-tight leading-tight mb-3">{product.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{product.description}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white mt-6">
                  <span className="relative">
                    <span className="relative z-10">Explorar</span>
                    <span className="absolute bottom-0 left-0 h-[1px] bg-solar-yellow transition-all duration-300 group-hover:w-full" style={{ width: "0px" }} />
                  </span>
                  <span>
                    <ArrowRight className="w-4 h-4 text-solar-yellow transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
