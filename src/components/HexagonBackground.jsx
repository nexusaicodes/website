"use client";

import { useEffect, useRef } from "react";

export default function HexagonBackground() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const hexSize = 60; // Size of each hexagon
    const hexHeight = hexSize * 2;
    const hexWidth = Math.sqrt(3) * hexSize;
    const vertSpacing = hexHeight * 0.75;
    const horzSpacing = hexWidth;

    // Calculate how many hexagons we need based on viewport
    function calculateGridSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const cols = Math.ceil(width / horzSpacing) + 2;
      const rows = Math.ceil(height / vertSpacing) + 2;

      return { cols, rows };
    }

    // Create hexagon path
    function createHexagonPath(cx, cy, size) {
      const points = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        const x = cx + size * Math.cos(angle);
        const y = cy + size * Math.sin(angle);
        points.push([x, y]);
      }
      return points;
    }

    // Draw hexagon
    function drawHexagon(cx, cy, size) {
      const points = createHexagonPath(cx, cy, size);
      const pathData =
        `M ${points[0][0]} ${points[0][1]} ` +
        points
          .slice(1)
          .map((p) => `L ${p[0]} ${p[1]}`)
          .join(" ") +
        " Z";

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("d", pathData);
      path.setAttribute("class", "hex-line");

      // Randomly animate some hexagons
      if (Math.random() > 0.85) {
        path.classList.add("animate");
        path.style.animationDelay = `${Math.random() * 3}s`;
      }

      svg.appendChild(path);

      // Draw dots at vertices
      points.forEach((point) => {
        const dot = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        dot.setAttribute("cx", point[0]);
        dot.setAttribute("cy", point[1]);
        dot.setAttribute("r", "2");
        dot.setAttribute("class", "hex-dot");

        // Randomly animate some dots
        if (Math.random() > 0.9) {
          dot.classList.add("animate");
          dot.style.animationDelay = `${Math.random() * 3}s`;
        }

        svg.appendChild(dot);
      });
    }

    // Generate hexagon grid
    function generateHexagons() {
      // Clear existing hexagons but keep defs
      const defs = svg.querySelector("defs");
      svg.innerHTML = "";
      if (defs) svg.appendChild(defs);

      const { cols, rows } = calculateGridSize();

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const xOffset = col * horzSpacing;
          const yOffset = row * vertSpacing;

          // Offset every other row
          const x = xOffset + (row % 2 === 1 ? horzSpacing / 2 : 0);
          const y = yOffset;

          drawHexagon(x, y, hexSize);
        }
      }
    }

    // Add some random current pulses that travel across hexagons
    function addCurrentFlow() {
      const lines = document.querySelectorAll(".hex-line:not(.animate)");
      if (lines.length > 0) {
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        randomLine.classList.add("animate");
        randomLine.style.animationDelay = "0s";

        setTimeout(() => {
          randomLine.classList.remove("animate");
        }, 3000);
      }
    }

    // Initialize
    generateHexagons();

    // Periodically add current flows
    const flowInterval = setInterval(addCurrentFlow, 800);

    // Regenerate on resize (debounced)
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(generateHexagons, 250);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearInterval(flowInterval);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="hexagon-background">
      <svg
        ref={svgRef}
        id="hexagonSVG"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute top-0 left-0"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <div className="gradient-mask" />
    </div>
  );
}
