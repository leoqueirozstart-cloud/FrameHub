import { motion } from 'framer-motion'
import { GridPattern } from '@/components/ui/grid-pattern'

export default function Hero() {
  const satellites = [
    { text: 'CapCut do zero', delay: 0 },
    { text: 'Motion criativo', delay: 0.2 },
    { text: 'Suporte ativo', delay: 0.4 },
    { text: 'Atualizações vitalícias', delay: 0.6 },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,26,26,0.25)_0%,transparent_70%)] pointer-events-none" />
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        strokeDasharray="4 2"
        className="[mask-image:radial-gradient(600px_circle_at_center,rgba(255,26,26,0.3),transparent_70%)]"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center">
              {[
                'https://i.pravatar.cc/80?img=1',
                'https://i.pravatar.cc/80?img=2',
                'https://i.pravatar.cc/80?img=3',
                'https://i.pravatar.cc/80?img=4',
                'https://i.pravatar.cc/80?img=5',
              ].map((src, i) => (
                <div key={i} className="imgg">
                  <img
                    src={src}
                    alt="Aluno FrameHub"
                    className="w-10 h-10 object-cover border border-white/[0.38]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red" />
                </span>
                <span className="text-sm text-text-secondary font-medium">
                  Mais de <span className="text-white font-semibold">2.000 editores</span> já evoluíram
                </span>
              </div>
            </div>
          </div>

          <h1 className="font-display text-[clamp(1.4rem,3.2vw,2.6rem)] leading-[1.15] mb-8 max-w-5xl mx-auto">
            <span className="uppercase font-normal">Edite vídeos que param o scroll — </span>
            <span className="text-text-secondary italic font-normal">sem depender de talento.</span>
            <span className="text-text-secondary font-normal"> Dependa do </span>
            <span className="text-brand-green italic font-normal">método certo</span>
            <span className="text-text-secondary">.</span>
          </h1>

          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Do corte básico ao Motion que impressiona clientes — sem enrolação.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#oferta"
              className="shiny-btn shiny-btn-lg"
            >
              Quero aprender agora
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#curso"
              className="inline-flex items-center gap-2 border border-white/[0.15] text-white font-medium px-8 py-4 rounded-full hover:bg-white/[0.05] transition-all duration-300"
            >
              Ver como funciona ↓
            </a>
          </div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="glass-card-lg p-3 relative z-10">
            <div className="rounded-2xl aspect-video overflow-hidden relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ZWnXSm4tlUY?autoplay=1&mute=1&rel=0&modestbranding=1&loop=1&playlist=ZWnXSm4tlUY&controls=1"
                title="FrameHub"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="absolute top-0 left-0 -translate-x-4 md:-translate-x-24 z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="glass-card p-4 animate-float flex items-center gap-3 min-w-[200px]"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-9 h-9 bg-brand-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">CapCut do zero</div>
                <div className="text-text-secondary text-xs">Aprenda desde o básico</div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-0 right-0 translate-x-4 md:translate-x-24 z-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="glass-card p-4 animate-float flex items-center gap-3 min-w-[200px]"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-9 h-9 bg-brand-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Motion criativo</div>
                <div className="text-text-secondary text-xs">Animações que impressionam</div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 -translate-x-4 md:-translate-x-24 z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="glass-card p-4 animate-float flex items-center gap-3 min-w-[200px]"
              style={{ animationDelay: '1s' }}
            >
              <div className="w-9 h-9 bg-brand-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Suporte ativo</div>
                <div className="text-text-secondary text-xs">Ajuda quando precisar</div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 right-0 translate-x-4 md:translate-x-24 z-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="glass-card p-4 animate-float flex items-center gap-3 min-w-[200px]"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="w-9 h-9 bg-brand-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Atualizações vitalícias</div>
                <div className="text-text-secondary text-xs">Sempre atualizado</div>
              </div>
            </motion.div>
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ADFF2F" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ADFF2F" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad-red" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF1A1A" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF1A1A" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              className="line-bezier"
              d="M 100 60 Q 180 100 260 170"
              stroke="url(#grad-green)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
              style={{ animationDelay: '1s' }}
            />
            <path
              className="line-bezier"
              d="M 500 60 Q 420 100 340 170"
              stroke="url(#grad-red)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
              style={{ animationDelay: '1.3s' }}
            />
            <path
              className="line-bezier"
              d="M 100 340 Q 180 300 260 230"
              stroke="url(#grad-red)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
              style={{ animationDelay: '1.6s' }}
            />
            <path
              className="line-bezier"
              d="M 500 340 Q 420 300 340 230"
              stroke="url(#grad-green)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 4"
              style={{ animationDelay: '1.9s' }}
            />
            <circle cx="100" cy="60" r="3" fill="#ADFF2F" opacity="0.6" />
            <circle cx="500" cy="60" r="3" fill="#FF1A1A" opacity="0.6" />
            <circle cx="100" cy="340" r="3" fill="#FF1A1A" opacity="0.6" />
            <circle cx="500" cy="340" r="3" fill="#ADFF2F" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
