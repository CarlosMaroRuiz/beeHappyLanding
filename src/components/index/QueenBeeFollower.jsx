import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const QueenBeeFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
  const previousPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";

    const updateMousePosition = (e) => {
      const newPosition = {
        x: e.clientX,
        y: e.clientY,
      };

      // Calculate horizontal movement
      const deltaX = newPosition.x - previousPosition.current.x;

      // Update rotation based on horizontal movement
      if (Math.abs(deltaX) > 1) {
        const newRotation = deltaX > 0 ? 0 : 180; // 0° for right, 180° for left
        setRotation(newRotation);
        console.log(`Rotation set to: ${newRotation}°`); // Debug rotation
      }

      // Update positions
      setMousePosition(newPosition);
      previousPosition.current = newPosition;

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = "auto";
    };

    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
      setIsVisible(true);
    };

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition, { passive: false });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      <div
        className="fixed pointer-events-none"
        style={{
          zIndex: 9999,
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.15s ease-out",
        }}
      >
        <motion.div
          className="w-12 h-12 flex items-center justify-center"
          style={{
            transform: `rotate(${rotation}deg)`, // Apply rotation directly
            transition: "transform 0.1s ease-out", // Smooth rotation
          }}
          animate={{
            scale: [1, 1.1, 0.95, 1], // Pulsing animation
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Fallback to SVG bee for clearer rotation */}
          <img
            src="https://images.vexels.com/media/users/3/307755/isolated/preview/981bf918e94c1bb960c536ae307515c3-insecto-abeja-frontal.png"
            alt="Bee"
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
            }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default QueenBeeFollower;