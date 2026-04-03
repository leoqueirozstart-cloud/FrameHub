import { motion } from 'framer-motion'
import { GlowCard } from '@/components/ui/spotlight-card'

export default function Offer() {
  const included = [
    'Acesso completo aos 11 módulos (+50 aulas)',
    'Pack de templates exclusivos para CapCut',
    'Comunidade VIP de editores',
    'Suporte direto com o criador',
    'Atualizações vitalícias',
    'Certificado de conclusão',
    'Bônus: Laboratório de Técnicas Atualizadas',
    'Bônus: PACK REI — 300GB de arquivos premium',
  ]

  return (
    <section id="oferta" className="py-24 px-4 section-alt-2">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/[0.1] border border-brand-red/[0.2] rounded-full px-5 py-2 mb-6">
            <span className="text-brand-red text-sm font-bold">⚡ OFERTA POR TEMPO LIMITADO</span>
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-4">
            <span className="uppercase font-normal">Tudo isso por muito menos</span>
            <br />
            <span className="font-normal">do que você </span>
            <span className="text-brand-green italic font-normal">imagina</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlowCard glowColor="brand-green" pulse className="p-8 md:p-12 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-bg-primary text-xs font-bold px-4 py-1 rounded-full z-30">
              MELHOR INVESTIMENTO
            </div>

            <div className="text-center mb-8">
              <h3 className="font-display text-2xl text-white italic mb-6">O que está incluído:</h3>
              <ul className="space-y-3 text-left max-w-sm mx-auto">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center mb-8">
              <div className="text-text-secondary text-lg line-through mb-1">De R$497</div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-text-secondary text-lg">Por apenas</span>
                <span className="font-display text-5xl md:text-6xl text-brand-green italic">R$137,90</span>
              </div>
              <div className="text-text-secondary text-sm mt-2">ou 12x de R$13,40</div>
            </div>

            <div className="text-center mb-6">
              <div className="glowbox">
                <div className="glowbox-animations">
                  <div className="glowbox-glow"></div>
                  <div className="glowbox-stars"></div>
                </div>
                <div className="glowbox-borders"></div>
                <div className="glowbox-borders-masker"></div>
                <div className="btn-cta-box">
                  <a href="https://pay.kiwify.com.br/8Zgnj2m" className="btn-cta">
                    <span>SIM! QUERO O FRAMEHUB AGORA →</span>
                  </a>
                  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-text-secondary text-xs">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Compra 100% segura. Pagamento processado pela Kiwify.</span>
            </div>
          </GlowCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Cartão
          </div>
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Boleto
          </div>
          <div className="flex items-center gap-2 text-text-secondary text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Pix
          </div>
        </motion.div>
      </div>
    </section>
  )
}
