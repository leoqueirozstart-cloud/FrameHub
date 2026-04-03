import { motion } from 'framer-motion'
import { GlowCard } from '@/components/ui/spotlight-card'

export default function PainPoints() {
  const painPoints = [
    {
      icon: '❌',
      title: 'Aprendem no YouTube, mas sem método',
      desc: 'Ficam dando voltas sem evoluir de verdade.'
    },
    {
      icon: '❌',
      title: 'Habilidades limitadas',
      desc: 'Só sabem cortar e colocar música — e o mercado não paga por isso.'
    },
    {
      icon: '❌',
      title: 'Softwares caros ou desatualizados',
      desc: 'Premiere? After? DaVinci? Tudo exige máquina potente e assinatura mensal.'
    },
  ]

  const realities = [
    'Editores com método faturam 3x mais em menos tempo',
    'Motion no CapCut já é padrão do mercado — você ainda não sabe',
    'Clientes pagam mais por quem entrega resultado, não esforço',
  ]

  return (
    <section id="curso" className="py-24 px-4 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight">
            <span className="uppercase font-normal">A maioria dos editores trava</span>
            <br />
            <span className="uppercase font-normal">por </span>
            <span className="text-brand-red italic font-normal">3 motivos</span>
            <span className="font-normal">:</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <GlowCard glowColor={i === 0 ? 'brand-red' : i === 1 ? 'brand-green' : 'brand-red'}>
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="font-display text-xl italic text-white mb-2">{point.title}</h3>
                <p className="text-text-secondary leading-relaxed">{point.desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-display text-xl md:text-2xl text-text-secondary">
            Enquanto isso, meses e <span className="text-brand-red italic">anos passam</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {realities.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="bg-brand-red/[0.06] border border-brand-red/[0.15] rounded-2xl p-6 text-center"
            >
              <p className="text-white font-medium text-sm md:text-base">{text}</p>
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
          <p className="font-display text-xl md:text-2xl mb-6">
            <span className="font-normal">O problema nunca foi o software. Foi a falta de </span>
            <span className="text-brand-green italic font-normal">método</span>
            <span className="font-normal">.</span>
          </p>
          <a href="#oferta" className="shiny-btn">
            Quero o método certo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
