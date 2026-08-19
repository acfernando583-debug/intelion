import { useState, useEffect } from "react";
import { ArrowRight, Quote } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { useTypewriter } from "../hooks/useTypewriter";
import { Particles } from "./Particles";
import { GeometricPattern } from "./GeometricPattern";
import { VideoBackground } from "./VideoBackground";
import panelArt from "../assets/img/panel 1.png";

const HERO_WORDS = ["Inteligente", "Sostenible", "Confiable", "Eficiente"];

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/intelion-logo.png"
      alt="INTELION"
      className={className}
    />
  );
}

type Variant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  arrow?: boolean;
}

export function Button({
  variant = "primary",
  children,
  arrow,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full btn-hover";

  const variants: Record<Variant, string> = {
    primary: "bg-solar-dark text-white hover:bg-solar-dark/90",
    secondary: "bg-white text-solar-dark hover:bg-gray-50",
    tertiary: "bg-white text-solar-dark hover:bg-gray-50",
  };

  const shadows: Record<Variant, string> = {
    primary:
      "shadow-[0_1px_2px_0_rgba(0,51,102,0.1),0_4px_4px_0_rgba(0,51,102,0.09),0_9px_6px_0_rgba(0,51,102,0.05),0_17px_7px_0_rgba(0,51,102,0.01),0_26px_7px_0_rgba(0,51,102,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]",
    secondary:
      "shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]",
    tertiary:
      "shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${shadows[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <span className="ml-2 inline-flex items-center justify-center bg-white rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight className="w-5 h-5 text-black" />
        </span>
      )}
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      scrolled
        ? "bg-solar-dark/95 backdrop-blur-md shadow-lg"
        : "bg-white/90 backdrop-blur-md shadow-sm"
    }`}>
      <div className="flex items-center justify-between max-w-[88rem] mx-auto">
        <div className="flex items-center gap-3">
          <LogoIcon className="w-12 h-12" />
          <span className={`text-3xl font-medium tracking-tight transition-colors duration-300 ${
            scrolled ? "text-white" : "text-solar-dark"
          }`}>
            INTELION
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Nosotros", "Soluciones", "Proceso", "Tecnología", "Contacto"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-base font-medium transition-colors duration-200 ${
                scrolled ? "text-white/80 hover:text-white" : "text-solar-dark hover:text-solar-dark/70"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const typedWord = useTypewriter(HERO_WORDS);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex-1 pt-20 pb-24 md:pb-40 flex items-center overflow-visible">
      <div
        className="relative w-full overflow-hidden h-[85vh] md:h-screen"
      >
        <VideoBackground overlayOpacity={0.25} />
        <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/60 via-solar-dark/25 to-solar-dark/10" />
        <div
          className="parallax-layer absolute inset-0"
          style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }}
        >
          <Particles />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,214,0,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,214,0,0.15) 0%, transparent 40%), radial-gradient(circle at 40% 80%, rgba(0,100,180,0.2) 0%, transparent 50%)",
            }}
          />
        </div>
        <div
          className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 h-full p-8 pb-48 pt-[25%] md:p-12 md:pt-20 text-center md:text-left pl-[10%] md:pl-24"
        >
          <div className="text-content flex flex-col items-center md:items-start text-center md:text-left">
            <h1
              className="text-white text-5xl md:text-7xl lg:text-8xl font-medium leading-tight max-w-2xl mb-6 animate-fade-in-up"
              style={{ letterSpacing: "-0.04em", animationDelay: "0.2s" }}
            >
              Energía Solar
              <br />
              <span className="text-gradient">{typedWord}</span>
              <span className="typewriter-cursor h-[0.85em] align-middle text-solar-yellow" />
            </h1>
            <p
              className="text-white/80 text-sm md:text-lg lg:text-xl max-w-lg mb-10 leading-relaxed animate-fade-in-up text-balance text-center md:text-left"
              style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
                animationDelay: "0.4s",
              }}
            >
              Diseño, instalación y mantenimiento de sistemas fotovoltaicos seguros y confiables para hogares, edificios e industria.
            </p>
            <div className="animate-fade-in-up flex flex-wrap gap-4 justify-center md:justify-start mb-8 md:mb-12" style={{ animationDelay: "0.6s" }}>
              <Button
                arrow
                className="bg-solar-yellow text-solar-dark text-sm md:text-lg font-medium pl-6 pr-2 py-3 md:py-3.5 rounded-full hover:bg-solar-yellow/90 btn-hover animate-pulse-glow"
              >
                Solicitar diagnóstico
              </Button>
              <Button
                variant="secondary"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 text-sm md:text-lg font-medium px-6 md:px-8 py-3 md:py-3.5 rounded-full hover:bg-white/20 btn-hover"
              >
                Ver proyectos
              </Button>
            </div>
          </div>
          <div className="logo animate-float flex justify-center">
            <LogoIcon className="w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64" />
          </div>
        </div>
        <div
          className="parallax-layer pointer-events-none select-none hidden md:block absolute bottom-0 right-0"
          style={{ transform: `translate3d(0, ${scrollY * -0.15}px, 0)` }}
        >
          <img
            src={panelArt}
            alt=""
            aria-hidden="true"
            className="w-[280px] md:w-[360px] lg:w-[440px] xl:w-[520px] h-auto drop-shadow-[0_40px_70px_rgba(0,20,40,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}

export function QuoteSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-solar-blue/20 animate-morph-bg" style={{ animation: "morph-bg 18s ease-in-out infinite" }} />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-solar-dark/15 animate-morph-bg-alt" style={{ animation: "morph-bg-alt 22s ease-in-out infinite" }} />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-solar-blue/10 animate-morph-bg" style={{ animation: "morph-bg 25s ease-in-out infinite reverse" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-solar-blue/5 animate-morph-bg-alt" style={{ animation: "morph-bg-alt 20s ease-in-out infinite" }} />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <GeometricPattern type="rect-grid" color="rgba(0,119,182,0.4)" size={80} />
        </div>
      </div>
      <div className="relative">
        <div
          className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <Quote className="w-8 h-8 text-solar-yellow mb-6" />
        </div>
        <h2
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-solar-dark tracking-tight mb-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          Nuestra misión es transformar el consumo energético de hogares, edificios e industria mediante{" "}
          <span className="text-gradient">soluciones solares inteligentes</span>, confiables y sostenibles.
        </h2>
        <p
          className={`text-lg md:text-xl text-solar-dark/70 leading-relaxed max-w-3xl ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          Combinamos ingeniería, tecnología y un enfoque cercano al cliente para convertir el recurso solar en ahorro energético, eficiencia operativa y sostenibilidad a largo plazo. Un solo aliado para todo el ciclo de su sistema solar.
        </p>
      </div>
    </section>
  );
}
