import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BannerSlider() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        video: "/videos/video.mp4", // 🎥 Your main video
        poster: "/images/ortho2.jpg", // 🖼️ Fallback image
      },
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Restart next video
  useEffect(() => {
    const video = videoRefs.current[current];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [current]);

  return (
    <div className="relative w-screen  h-[100vh] overflow-hidden bg-black object-contains">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* 🎥 Full Width Cinematic Video */}
          <video
            ref={(el) => (videoRefs.current[current] = el)}
            src={slides[current].video}
            poster={slides[current].poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Optional cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
