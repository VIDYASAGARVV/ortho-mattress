import { useRef } from "react";
import { motion } from "framer-motion";
import videoFile from "../assets/videos/video.mp4"; // change to your actual video path

export default function AboutUs() {
  const videoRef1 = useRef(null);

  // Animation presets
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Section Header */}
      <motion.div
        className="text-center mb-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          About <span className="text-red-600">Us</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Discover our story — how passion meets innovation to create experiences that inspire trust and excellence.
        </p>
      </motion.div>

      {/* Row 1: Video + Text */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        {/* Video Section */}
        <motion.div
          className="md:w-1/2 w-full relative group rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Video Container */}
          <div className="relative w-full overflow-hidden rounded-3xl bg-black" style={{ height: "480px" }}>
            <video
              ref={videoRef1}
              src={videoFile}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              playsInline
              muted
              loop
              autoPlay
            />
            {/* Overlay Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-700"></div>
          </div>

          {/* Floating Glow Border */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 opacity-40 blur-2xl animate-pulse"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 w-full space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Story
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We started with a dream — to redefine how technology and creativity come together. Our team of innovators and strategists works tirelessly to build experiences that connect with people on a deeper level.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Over the years, we’ve grown into a trusted partner for businesses seeking quality, creativity, and performance. Every project we take is a reflection of our dedication to excellence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
