function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  left: seeded(i, 1) * 100,
  size: 2 + seeded(i, 2) * 5,
  duration: 9 + seeded(i, 3) * 14,
  delay: -seeded(i, 4) * 20,
  opacity: 0.4 + seeded(i, 5) * 0.6,
}))

export function GoldParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 3}px rgba(255, 190, 0, 0.8)`,
          }}
        />
      ))}
    </div>
  )
}
