import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BannerSlider() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef(null);

  // ⚡ Auto toggle between videos every 5 seconds (faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo((prev) => !prev);
    }, 5000); // ⏱ faster delay
    return () => clearInterval(interval);
  }, []);

  // ▶️ Restart & play video each time it's shown
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [showVideo]);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {showVideo ? (
          // 🎥 FIRST VIDEO SLIDE
          <motion.div
            key="video1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }} // smoother fade
            className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]"
          >
            <video
              ref={videoRef}
              src="/videos/video.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              loop={false}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          // 🎥 SECOND VIDEO SLIDE
          <motion.div
            key="video2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]"
          >
            <video
              ref={videoRef}
              src="/videos/free-del.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              loop={false}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
