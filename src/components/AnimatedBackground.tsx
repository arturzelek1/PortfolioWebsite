import React, { useEffect, useRef } from "react";

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Dostosuj rozmiar canvas do rozmiaru okna
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Klasa Particle (cząsteczka)
    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1; // Losowy rozmiar cząsteczki
        this.baseSize = this.size;
        this.speedX = Math.random() * 0.4; // Losowa prędkość X
        this.speedY = Math.random() * 0.4; // Losowa prędkość Y
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`; // Kolor z przezroczystością
      }

      // Rysowanie cząsteczki
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Aktualizacja pozycji cząsteczki
      update(mouseX: number, mouseY: number) {
        // Poruszanie się cząsteczki
        this.x += this.speedX;
        this.y += this.speedY;

        // Interakcja z myszą
        if (mouseX !== undefined && mouseY !== undefined) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Jeśli kursor jest blisko cząsteczki, odpychaj ją
          if (distance < 100) {
            const force = (100 - distance) / 3000; // Zmniejszona siła odpychania
            this.speedX -= (dx / distance) * force; // Odpychaj w przeciwnym kierunku
            this.speedY -= (dy / distance) * force;
          }
        }

        // Odbijanie się od krawędzi
        if (canvas) {
          if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
          if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
        }

        this.draw();
      }
    }

    // Inicjalizacja cząsteczek
    const particles: Particle[] = [];
    const init = () => {
      particles.length = 0;
      const particlesCount = 100; // Liczba cząsteczek

      for (let i = 0; i < particlesCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    // Animacja cząsteczek
    let mouseX: number | undefined = undefined;
    let mouseY: number | undefined = undefined;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => particle.update(mouseX!, mouseY!));

      requestAnimationFrame(animate);
    };

    // Obsługa ruchu myszy
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Inicjalizacja i rozpoczęcie animacji
    init();
    animate();

    // Obsługa zmiany rozmiaru okna
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    // Czyszczenie
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Tło będzie za innymi elementami
        backgroundColor: "#1E1E1E", // Szare tło
      }}
    />
  );
};

export default AnimatedBackground;
