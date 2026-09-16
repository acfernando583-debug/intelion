import { useEffect, useState } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { X, ZoomIn } from "lucide-react";

const IMAGES = [
  {
    src: "/images/cargado%20vehiculo1.jpeg",
    alt: "Cargador para vehículo 1",
    title: "Cargador para vehículo 1",
  },
  {
    src: "/images/cargado%20vehiculo2.jpeg",
    alt: "Cargador para vehículo 2",
    title: "Cargador para vehículo 2",
  },
  {
    src: "/images/cargado%20vehiculo3.jpeg",
    alt: "Cargador para vehículo 3",
    title: "Cargador para vehículo 3",
  },
  {
    src: "/images/cargado%20vehiculo4.jpeg",
    alt: "Cargador para vehículo 4",
    title: "Cargador para vehículo 4",
  },
];

export function VehicleChargersGallery() {
  const { ref, inView } = useInViewAnimation();
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="vehicle-chargers" ref={ref} className="bg-solar-dark py-24 px-6 relative overflow-hidden">
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
            Movilidad eléctrica
          </p>
          <h2
            className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight"
            style={{ fontFamily: "Noto Sans, system-ui, sans-serif" }}
          >
            Cargadores para <span className="text-gradient">vehículos</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Conoce nuestras soluciones de carga para vehículos y su integración con sistemas de energía solar eficientes y confiables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMAGES.map((image, idx) => (
            <button
              key={image.src}
              onClick={() => setActive(idx)}
              aria-label={`Ampliar ${image.title}`}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 text-left transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + idx * 0.08}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/95 via-solar-dark/25 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">{image.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={IMAGES[active].title}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="Cerrar imagen"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative w-full max-w-5xl">
            <img
              key={IMAGES[active].src}
              src={IMAGES[active].src}
              alt={IMAGES[active].alt}
              className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
            />
            <p className="text-white/85 text-sm md:text-base leading-relaxed mt-4">
              {IMAGES[active].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
