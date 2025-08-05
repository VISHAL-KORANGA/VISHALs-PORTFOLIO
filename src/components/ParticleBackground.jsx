import React, { useEffect, useRef, useCallback } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const createParticle = useCallback((canvas) => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * 100 + 100,
      maxLife: 200,
      color: `hsl(${210 + Math.random() * 60}, 70%, ${60 + Math.random() * 20}%)`
    };
  }, []);

  const updateParticle = useCallback((particle, canvas, mouse) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life--;

    // Mouse interaction
    const dx = mouse.x - particle.x;
    const dy = mouse.y - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) {
      const force = (100 - distance) / 100;
      particle.vx += (dx / distance) * force * 0.003;
      particle.vy += (dy / distance) * force * 0.003;
    }

    // Boundary wrapping
    if (particle.x < 0) particle.x = canvas.width;
    if (particle.x > canvas.width) particle.x = 0;
    if (particle.y < 0) particle.y = canvas.height;
    if (particle.y > canvas.height) particle.y = 0;

    // Fade effect
    particle.opacity = (particle.life / particle.maxLife) * 0.6;

    return particle.life > 0;
  }, []);

  const drawParticle = useCallback((ctx, particle) => {
    ctx.save();
    ctx.globalAlpha = particle.opacity;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
    ctx.restore();
  }, []);

  const drawConnections = useCallback((ctx, particles) => {
    const maxDistance = 120;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.15;
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = '#3B82F6';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    // Initialize particles
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle(canvas));

    // Mouse tracking
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        if (updateParticle(particle, canvas, mouseRef.current)) {
          drawParticle(ctx, particle);
          return true;
        }
        return false;
      });

      // Maintain particle count
      while (particlesRef.current.length < particleCount) {
        particlesRef.current.push(createParticle(canvas));
      }

      // Draw connections
      drawConnections(ctx, particlesRef.current);

      animationRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    const resizeHandler = () => {
      setCanvasSize();
      const newParticleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      particlesRef.current = Array.from({ length: newParticleCount }, () => createParticle(canvas));
    };

    window.addEventListener('resize', resizeHandler);
    canvas.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeHandler);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [createParticle, updateParticle, drawParticle, drawConnections]);

  // JSX Return
  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;