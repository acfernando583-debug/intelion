import { useEffect, useState } from "react";

interface TypewriterOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter(words: string[], options: TypewriterOptions = {}) {
  const { typeSpeed = 90, deleteSpeed = 45, pauseDuration = 2200 } = options;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return words[0] ?? "";
    }
    return "";
  });
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        const timeout = window.setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          typeSpeed
        );
        return () => window.clearTimeout(timeout);
      }

      const timeout = window.setTimeout(() => setPhase("deleting"), pauseDuration);
      return () => window.clearTimeout(timeout);
    }

    if (text.length > 0) {
      const timeout = window.setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deleteSpeed
      );
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setWordIndex((index) => (index + 1) % words.length);
      setPhase("typing");
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  return text;
}
