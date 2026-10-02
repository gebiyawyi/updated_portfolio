import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    // Select all sections except the hero (id="home")
    const els = document.querySelectorAll("section:not(#home), footer");

    // Set the initial state: invisible + shifted down
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition =
        "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";
    });

    // Observer: watch each element and reveal when it enters view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target); // stop watching once revealed
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    els.forEach((el) => observer.observe(el));

    // Cleanup when component unmounts
    return () => observer.disconnect();
  }, []);
}
