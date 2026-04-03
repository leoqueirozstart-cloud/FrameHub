import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function Marquee({
  className,
  children,
  pauseOnHover = false,
  reverse = false,
  speed = 40,
}) {
  const containerRef = useRef(null)
  const [duplicated, setDuplicated] = useState(2)

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const firstChild = containerRef.current.firstElementChild
      if (firstChild) {
        const childWidth = firstChild.offsetWidth
        const needed = Math.ceil((containerWidth * 2) / childWidth) + 1
        setDuplicated(Math.max(needed, 2))
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn('flex overflow-hidden', className)}
      style={
        pauseOnHover
          ? {}
          : {
              '--duration': `${speed}s`,
              animation: `marquee var(--duration) linear infinite`,
              animationDirection: reverse ? 'reverse' : 'normal',
            }
      }
    >
      {Array.from({ length: duplicated }).map((_, i) => (
        <div
          key={i}
          className={cn('flex shrink-0', className)}
          style={
            pauseOnHover
              ? {
                  '--duration': `${speed}s`,
                  animation: `marquee var(--duration) linear infinite`,
                  animationDirection: reverse ? 'reverse' : 'normal',
                  animationPlayState: 'running',
                }
              : {}
          }
          {...(pauseOnHover
            ? {
                onMouseEnter: (e) => {
                  e.currentTarget.style.animationPlayState = 'paused'
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.animationPlayState = 'running'
                },
              }
            : {})}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
