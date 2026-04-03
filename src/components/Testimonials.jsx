import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rafael S.',
      city: 'Fortaleza, CE',
      text: 'Fiz meu primeiro freela em 2 semanas depois de entrar no FrameHub. O cliente nem sabia que eu era iniciante — a edição ficou tão boa que ele pediu pacote mensal.',
      avatar: 'RS',
      result: 'Primeiro freela em 2 semanas',
    },
    {
      name: 'Juliana P.',
      city: 'Recife, PE',
      text: 'Tripliquei meu preço por edição após o módulo de Motion. Antes cobrava R$50, agora cobro R$150 e os clientes aceitam sem negociar.',
      avatar: 'JP',
      result: '3x mais por edição',
    },
    {
      name: 'Lucas F.',
      city: 'Porto Alegre, RS',
      text: 'Eu era designer e queria entrar no mercado de vídeo. O FrameHub me deu o método que eu precisava. Em 1 mês já tinha 3 clientes fixos.',
      avatar: 'LF',
      result: '3 clientes fixos em 1 mês',
    },
    {
      name: 'Amanda C.',
      city: 'Brasília, DF',
      text: 'O que mais me surpreendeu foi a comunidade. Sempre tem alguém pra ajudar, indicar freela e dar feedback. Não é só um curso, é um hub de verdade.',
      avatar: 'AC',
      result: 'Comunidade que gera resultado',
    },
    {
      name: 'Diego M.',
      city: 'Salvador, BA',
      text: 'Já tinha feito 3 cursos de edição antes. Nenhum chegou perto do FrameHub em objetividade. Aulas diretas, sem enrolação, e o suporte responde rápido.',
      avatar: 'DM',
      result: 'Melhor investimento em educação',
    },
    {
      name: 'Beatriz L.',
      city: 'Goiânia, GO',
      text: 'Comecei do zero absoluto. Hoje edito para 5 criadores de conteúdo e faturo mais de R$3.000/mês só com CapCut. Impossível sem o método.',
      avatar: 'BL',
      result: 'R$3.000/mês com CapCut',
    },
  ]

  return (
    <section id="depoimentos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-4">
            <span className="uppercase font-normal">Resultados reais de quem aplicou</span>
            <br />
            <span className="font-normal">o </span>
            <span className="text-brand-green italic font-normal">método</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-text-secondary text-xs">{t.city}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed flex-grow">{t.text}</p>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <span className="text-brand-green text-xs font-semibold bg-brand-green/[0.08] px-3 py-1 rounded-full">
                  {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
