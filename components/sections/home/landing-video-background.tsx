export default function LandingVideoBackground() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover "
      autoPlay
      loop
      playsInline
      muted
      preload="auto"
    >
      <source src="/hero-background-travel.mp4" type="video/mp4" />
    </video>
  );
}
