import { useEffect, useRef } from 'react'

export function GlowVideoCard({ children, className = '' }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const syncPointer = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const xp = (e.clientX / window.innerWidth).toFixed(2)
      const yp = (e.clientY / window.innerHeight).toFixed(2)

      el.style.setProperty('--x', x.toFixed(2))
      el.style.setProperty('--y', y.toFixed(2))
      el.style.setProperty('--xp', xp)
      el.style.setProperty('--yp', yp)
    }

    el.addEventListener('pointermove', syncPointer)
    return () => el.removeEventListener('pointermove', syncPointer)
  }, [])

  return (
    <>
      <div
        ref={cardRef}
        data-glow
        className={`relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm ${className}`}
        style={{
          '--base': 80,
          '--spread': 40,
          '--radius': '16',
          '--border': '2',
          '--backdrop': 'rgba(255,255,255,0.04)',
          '--backup-border': 'rgba(255,255,255,0.08)',
          '--size': '250',
          '--outer': '0.5',
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
        }}
      >
        <div data-glow></div>
        {children}
      </div>
    </>
  )
}
