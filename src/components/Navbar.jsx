import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { TextScramble } from '@/components/ui/text-scramble'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'O Curso', href: '#curso' },
    { label: 'O Que Você Aprende', href: '#curriculo' },
    { label: 'Oferta', href: '#oferta' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(10,10,10,0.95)] border-b border-white/[0.06]' : 'bg-transparent'
      }`}
      style={{ backdropFilter: 'blur(16px)' }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-green origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <TextScramble
            as="a"
            href="#"
            duration={1.2}
            speed={0.03}
            className="font-display text-xl md:text-2xl text-white tracking-tight cursor-pointer block italic"
          >
            FrameHub
          </TextScramble>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-nav text-[11px] uppercase tracking-widest text-text-secondary hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#oferta"
            className="hidden md:inline-flex items-center gap-2 bg-brand-green text-bg-primary font-bold text-sm px-6 py-2.5 rounded-full hover:shadow-[0_0_24px_rgba(173,255,47,0.5)] transition-all duration-300"
          >
            Quero Entrar Agora
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6 border-t border-white/[0.06] mt-2 pt-4"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-nav text-[11px] uppercase tracking-widest text-text-secondary hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://pay.kiwify.com.br/8Zgnj2m"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-brand-green text-bg-primary font-bold text-sm px-6 py-3 rounded-full mt-2"
              >
                Quero Entrar Agora
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
