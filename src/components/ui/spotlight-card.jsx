import { useEffect, useRef } from 'react'

export function GlowCard({ children, className = '', glowColor = 'brand-green', pulse = false }) {
  const cardRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e

      if (cardRef.current) {
        cardRef.current.style.setProperty('--x', x.toFixed(2))
        cardRef.current.style.setProperty('--xp', (x / window.innerWidth).toFixed(2))
        cardRef.current.style.setProperty('--y', y.toFixed(2))
        cardRef.current.style.setProperty('--yp', (y / window.innerHeight).toFixed(2))
      }
    }

    document.addEventListener('pointermove', syncPointer)
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])

  const colorMap = {
    'brand-green': { base: 80, spread: 40 },
    'brand-red': { base: 0, spread: 20 },
    blue: { base: 220, spread: 200 },
  }

  const { base, spread } = colorMap[glowColor] || colorMap['brand-green']

  const inlineStyles = {
    '--base': base,
    '--spread': spread,
    '--radius': '16',
    '--border': '2',
    '--backdrop': 'rgba(255,255,255,0.04)',
    '--backup-border': 'rgba(255,255,255,0.08)',
    '--size': pulse ? '250' : '200',
    '--outer': '1',
    '--border-size': 'calc(var(--border, 2) * 1px)',
    '--spotlight-size': 'calc(var(--size, 150) * 1px)',
    '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 80) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
    )`,
    backgroundColor: 'var(--backdrop, transparent)',
    backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
    backgroundPosition: '50% 50%',
    backgroundAttachment: 'fixed',
    border: 'var(--border-size) solid var(--backup-border)',
    position: 'relative',
    touchAction: 'none',
  }

  return (
    <>
      <div
        ref={cardRef}
        data-glow
        className={`rounded-2xl relative shadow-[0_1rem_2rem_-1rem_black] p-8 backdrop-blur-[5px] ${pulse ? 'glow-card-pulse' : ''} ${className}`}
        style={inlineStyles}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  )
}
