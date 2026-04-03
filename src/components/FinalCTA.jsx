import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,26,26,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-6">
            <span className="font-normal">Você vai continuar editando do mesmo jeito...</span>
            <br />
            <span className="text-brand-green italic font-normal">ou vai mudar agora?</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Cada dia sem o método certo é um dia trabalhando mais para ganhar menos.
          </p>

          <div className="glowbox mb-8">
            <div className="glowbox-animations">
              <div className="glowbox-glow"></div>
              <div className="glowbox-stars"></div>
            </div>
            <div className="glowbox-borders"></div>
            <div className="glowbox-borders-masker"></div>
            <div className="btn-cta-box">
              <a href="https://pay.kiwify.com.br/8Zgnj2m" className="btn-cta">
                <span>QUERO O FRAMEHUB AGORA →</span>
              </a>
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          <p className="text-text-secondary text-sm">
            Junte-se a mais de <span className="text-white font-semibold">2.000 editores</span> que já escolheram evoluir.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
