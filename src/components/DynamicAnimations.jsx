import React, { useEffect, useRef } from 'react';
import './DynamicAnimations.css';

const DynamicAnimations = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    createFloatingHexagons();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    startAnimationLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const createFloatingHexagons = () => {
    const container = containerRef.current;
const colors = ['#2ecc71', '#27ae60', '#1abc9c', '#16a085', '#2d7354'];
    elementsRef.current = [];

    for (let i = 0; i < 15; i++) {
      const hexagon = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 100 + 50;
      const depth = Math.random() * 5 + 1;
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const rotation = Math.random() * 360;
      const speed = Math.random() * 0.8 + 0.2;

      hexagon.className = 'floating-hexagon';
      hexagon.style.width = `${size}px`;
      hexagon.style.height = `${size}px`;
      hexagon.style.backgroundColor = color;
      hexagon.style.left = `${posX}px`;
      hexagon.style.top = `${posY}px`;
      hexagon.style.transform = `rotate(${rotation}deg) translateZ(${depth * 100}px)`;
      hexagon.style.opacity = 0.1 + Math.random() * 0.3;

      container.appendChild(hexagon);

      elementsRef.current.push({
        element: hexagon,
        initialX: posX,
        initialY: posY,
        depth,
        speed,
        rotation,
        rotationSpeed: Math.random() * 0.5 - 0.25,
      });
    }
  };

  const handleMouseMove = (e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    elementsRef.current.forEach((item) => {
      const translateY = scrollY * item.speed * 0.1;
      const rotation = item.rotation + scrollY * item.rotationSpeed;
      item.element.style.transform = `translate3d(${item.initialX}px, ${item.initialY - translateY}px, ${item.depth * 100}px) rotate(${rotation}deg)`;
    });
  };

  const startAnimationLoop = () => {
    const animate = () => {
      const { x, y } = mouseRef.current;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (x - centerX) / centerX;
      const offsetY = (y - centerY) / centerY;

      elementsRef.current.forEach((item) => {
        const moveX = offsetX * item.depth * 20;
        const moveY = offsetY * item.depth * 20;
        item.element.style.transform = `translate3d(${item.initialX + moveX}px, ${item.initialY + moveY}px, ${item.depth * 100}px) rotate(${item.rotation + Date.now() * item.rotationSpeed * 0.01}deg)`;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();
  };

  return <div className="dynamic-animations-container" ref={containerRef}></div>;
};

export default DynamicAnimations;
