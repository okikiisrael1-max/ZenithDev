import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function GraphBackground() {
  return (
    <Particles
      id="tsparticles"
      init={loadSlim}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "#0f172a",
        },
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: {
            value: "#38bdf8",
          },
          opacity: {
            value: 0.4,
          },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 160,
            opacity: 0.15,
            width: 1,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.8,
            outModes: {
              default: "bounce",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
