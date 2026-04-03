import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Scroll3D({ children, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.7, 1, 1, 0.7])

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        scale,
        opacity,
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
