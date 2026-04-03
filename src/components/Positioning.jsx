import { motion } from 'framer-motion'

export default function Positioning() {
  const differentials = [
    'Método exclusivo testado por 2.000+ alunos',
    'Aulas objetivas — sem enrolação',
    'Comunidade ativa de editores',
    'Resultados reais e comprovados',
  ]

  return (
    <section className="py-24 px-4 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-6">
            <span className="text-brand-red italic font-normal">Edição Premium</span>
            <span className="font-normal"> é posicionamento.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Quem edita bem não compete por preço. Compete por valor. Um editor que sabe Motion pode cobrar <span className="text-brand-green font-semibold">3x mais</span> pelo mesmo projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 border-brand-red/20"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-brand-red rounded-full" />
              <h3 className="font-display text-xl text-brand-red italic">Edição comum</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Corte simples + música de fundo',
                'Sem identidade visual definida',
                'Cliente não vê valor — paga pouco',
                'Concorre por preço com outros editores',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 border-brand-green/20"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 bg-brand-green rounded-full" />
              <h3 className="font-display text-xl text-brand-green italic">Edição FrameHub</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Motion criativo + pacing estratégico',
                'Identidade visual profissional',
                'Cliente vê valor — paga mais e volta',
                'Se posiciona como referência, não commodity',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {differentials.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-brand-green/[0.08] border border-brand-green/[0.2] rounded-full px-5 py-2.5"
            >
              <span className="text-brand-green text-sm font-semibold">{diff}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a href="#oferta" className="shiny-btn">
            Quero editar como profissional
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
