document.addEventListener("DOMContentLoaded", function () {
    // --- Animación de entrada para el encabezado ---
    gsap.from(".header h1", { opacity: 0, y: -30, duration: 1, ease: "power2.out" });
    gsap.from(".logo", { opacity: 0, x: 50, duration: 1, delay: 0.5, ease: "power2.out" });

    // --- Suavizar aparición de secciones ---
    let sections = document.querySelectorAll(".container");
    sections.forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
});
