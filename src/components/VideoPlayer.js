import { useRef } from "react";
import videoFile from "../assets/videos/video.mp4"; // update path if needed

export default function FullWidthVideo({
  src = videoFile,
  poster = "",
  showControls = true,
  height = 350,
}) {
  const videoRef = useRef(null);

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{
        height: `${height}px`,
        maxHeight: `${height}px`,
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="absolute top-0 left-0 w-full h-full object-cover"
        playsInline
        muted
        loop
        autoPlay
        controls={showControls}
      />
    </div>
  );
}
