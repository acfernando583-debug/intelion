import { useState, useEffect } from "react";

const VIDEO_FILES = [
  "/videos/1.mp4",
  "/videos/2.mp4",
  "/videos/3.mp4",
  "/videos/4.mp4",
  "/videos/5.mp4",
  "/videos/6.mp4",
];

function getRandomVideo() {
  return VIDEO_FILES[Math.floor(Math.random() * VIDEO_FILES.length)];
}

export function VideoBackground({
  className = "",
  overlayOpacity = 0.4,
}: {
  className?: string;
  overlayOpacity?: number;
}) {
  const [src, setSrc] = useState(getRandomVideo);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) return;
      setSrc(getRandomVideo());
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <video
        key={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity: 1 - overlayOpacity }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-solar-dark"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
