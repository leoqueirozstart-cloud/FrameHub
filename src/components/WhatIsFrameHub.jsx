import { motion } from 'framer-motion'

export default function WhatIsFrameHub() {
  const benefits = [
    'Edição do zero ao avançado no CapCut',
    'Motion criativo que impressiona qualquer cliente',
    'Templates exclusivos para baixar e usar',
    'Comunidade de editores para networking',
    'Atualizações vitalícias das aulas',
    'Suporte por dentro da plataforma',
  ]

  return (
    <section id="curso" className="py-24 px-4 section-alt-2">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-6">
              <span className="uppercase font-normal">O que é o </span>
              <span className="text-brand-green italic font-normal">FrameHub</span>
              <span className="font-normal">?</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              FrameHub é o único curso focado 100% em CapCut que vai além do básico. Você aprende edição funcional, Motion criativo e posicionamento profissional — tudo em aulas diretas ao ponto, com suporte real e comunidade ativa.
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-brand-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <a href="#oferta" className="shiny-btn">
              Quero entrar no FrameHub agora
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(173,255,47,0.15)_0%,transparent_70%)] pointer-events-none" />
            <div className="glass-card-lg p-3 relative">
              <div className="bg-gradient-to-br from-brand-green/10 via-brand-red/5 to-transparent rounded-2xl aspect-[4/5] flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 bg-brand-green/10 rounded-3xl flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl text-white mb-2 italic">+50 aulas</div>
                  <div className="text-text-secondary text-sm">Conteúdo direto ao ponto</div>
                  <div className="mt-6 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-brand-green rounded-full" />
                    <div className="w-2 h-2 bg-brand-green rounded-full" />
                    <div className="w-2 h-2 bg-brand-green rounded-full" />
                    <div className="w-2 h-2 bg-brand-green/30 rounded-full" />
                    <div className="w-2 h-2 bg-brand-green/30 rounded-full" />
                  </div>
                  <div className="text-text-secondary text-xs mt-2">Módulos do básico ao avançado</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
