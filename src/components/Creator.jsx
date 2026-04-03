import { motion } from 'framer-motion'

export default function Creator() {
  const credentials = [
    '+2.000 alunos formados',
    'Especialista em CapCut e Motion Design',
    'Editor profissional com +500 projetos entregues',
    'Criador de conteúdo na área de edição',
    'Missão: democratizar a edição profissional',
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
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-4">
            <span className="uppercase font-normal">Quem está por trás da</span>
            <br />
            <span className="text-brand-green italic font-normal">FrameHub</span>
            <span className="font-normal">?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Por anos, eu vi editores talentosos travarem por falta de método. Pessoas com potencial, mas sem direção — presas em tutoriais soltos do YouTube que nunca levavam a lugar nenhum.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Eu já estive nesse lugar. E decidi criar o curso que eu gostaria de ter tido quando comecei: direto ao ponto, com método, com suporte real e uma comunidade que te empurra pra cima.
            </p>
            <p className="text-white text-lg leading-relaxed mb-8 font-medium">
              O FrameHub nasceu da frustração de ver potencial desperdiçado. E hoje, com mais de 2.000 alunos, posso dizer: funciona.
            </p>

            <div className="space-y-3">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-brand-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-medium">{cred}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,26,26,0.2)_0%,transparent_70%)] pointer-events-none" />
            <div className="glass-card-lg p-3 relative">
              <div className="bg-gradient-to-br from-brand-red/15 via-brand-green/10 to-transparent rounded-2xl aspect-[3/4] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/[0.06] rounded-full mx-auto mb-6 flex items-center justify-center border border-white/[0.1]">
                    <svg className="w-16 h-16 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="font-display text-xl text-white italic">Criador FrameHub</div>
                  <div className="text-text-secondary text-sm mt-1">Editor & Educador</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
