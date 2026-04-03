import { motion } from 'framer-motion'

export default function TheSystem() {
  const steps = [
    {
      num: '01',
      title: 'Fundação',
      desc: 'Você aprende os fundamentos que 90% dos editores pulam — e é por isso que travam.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Evolução',
      desc: 'Você domina Motion e edição de alto impacto — o que separa amadores de profissionais.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Posicionamento',
      desc: 'Você aprende a cobrar mais e atrair clientes premium — edição vira renda de verdade.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  const deliverables = [
    '+50 aulas em vídeo HD',
    'Pack de templates exclusivos',
    'Comunidade VIP de editores',
    'Suporte direto com o criador',
    'Atualizações vitalícias',
    'Certificado de conclusão',
  ]

  const profiles = [
    'Iniciante que quer começar do jeito certo',
    'Intermediário que quer dominar Motion',
    'Freelancer que quer cobrar mais',
    'Criador de conteúdo que quer editar melhor',
  ]

  return (
    <section className="py-24 px-4 section-alt-2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-4">
            <span className="uppercase font-normal">O sistema </span>
            <span className="text-brand-green italic font-normal">FrameHub</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Não são apenas aulas soltas. É uma metodologia completa para você evoluir de verdade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/10 border border-brand-green/20 rounded-2xl text-brand-green mb-6">
                {step.icon}
              </div>
              <div className="text-brand-green/40 font-display italic text-5xl mb-2">{step.num}</div>
              <h3 className="font-display text-xl text-white italic mb-3">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 text-brand-green/30">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl text-white italic mb-6">O que você recebe:</h3>
            <ul className="space-y-3">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl text-white italic mb-6">Para quem é:</h3>
            <ul className="space-y-3">
              {profiles.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
