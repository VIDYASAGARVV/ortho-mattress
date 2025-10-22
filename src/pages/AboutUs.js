import { useRef } from "react";
import { motion } from "framer-motion";
import videoFile from "../assets/videos/video.mp4"; // change path to your video

export default function AboutUs() {
  const videoRef1 = useRef(null);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 overflow-hidden">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          About <span className="text-red-600">Us</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
          Discover our passion, purpose, and the journey that drives us to create meaningful experiences.
        </p>
      </motion.div>

      {/* Row 1: Video Left + Text Right */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-10 mb-20">
        {/* Video Section */}
        <motion.div
          className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl relative group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="relative w-full overflow-hidden bg-black rounded-2xl" style={{ height: "480px" }}>
            <video
              ref={videoRef1}
              src={videoFile}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              playsInline
              muted
              loop
              autoPlay
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Our Story</h3>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            We began our journey with a mission to redefine digital innovation. Our team combines creativity,
            technology, and strategy to deliver experiences that inspire and perform.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Over the years, we’ve grown into a trusted brand known for reliability and innovation — always
            pushing boundaries to help our clients succeed.
          </p>
        </motion.div>
      </div>

      {/* Row 2: Text Left + Video Right */}
   
    </div>
  );
}
