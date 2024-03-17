import wavyBackground from "../../public/assets/wavy-background.mp4";

export const WavyBackground = () => {
  return (
    <video autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0">
      <source src={wavyBackground} type="video/mp4" />
    </video>
  )
}