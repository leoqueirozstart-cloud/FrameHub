import { motion } from 'framer-motion'
import { Film, Palette, Sparkles, Share2, DollarSign, Gift } from 'lucide-react'
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline'

export default function Curriculum() {
  const modules = [
    { num: '01', title: 'Preparação do Ambiente de Edição' },
    { num: '02', title: 'Navegação e Domínio da Interface' },
    { num: '03', title: 'Timeline e Controle da Edição' },
    { num: '04', title: 'Painel de Ajustes e Construção Visual' },
    { num: '05', title: 'Mídia, Elementos e Finalização' },
    { num: '06', title: 'Técnicas Intermediárias de Edição' },
    { num: '07', title: 'Legendas e Templates Profissionais' },
    { num: '08', title: 'Legendas Dinâmicas Avançadas' },
    { num: '09', title: 'Parallax Avançado' },
    { num: '10', title: 'Motion Avançado' },
    { num: '11', title: 'Edição Dinâmica' },
  ]

  const timelineData = [
    {
      id: 1,
      title: 'Fundamentos',
      date: 'Módulo 1',
      content: 'Interface, cortes, ritmo, sincronização. A base que 90% dos editores pulam.',
      category: 'Fundação',
      icon: Film,
      relatedIds: [2, 3],
      status: 'completed',
      energy: 100,
    },
    {
      id: 2,
      title: 'Identidade Visual',
      date: 'Módulo 2',
      content: 'Fontes, cores, capas, thumbnails. Crie uma marca visual que impressiona.',
      category: 'Design',
      icon: Palette,
      relatedIds: [1, 3, 4],
      status: 'completed',
      energy: 85,
    },
    {
      id: 3,
      title: 'Motion no CapCut',
      date: 'Módulo 3',
      content: 'Keyframes, animações, efeitos avançados. O diferencial que triplica seu preço.',
      category: 'Motion',
      icon: Sparkles,
      relatedIds: [2, 4, 5],
      status: 'in-progress',
      energy: 70,
    },
    {
      id: 4,
      title: 'Redes Sociais',
      date: 'Módulo 4',
      content: 'Formatos, pacing, hooks visuais. Edição que retém e engaja.',
      category: 'Social',
      icon: Share2,
      relatedIds: [3, 5],
      status: 'in-progress',
      energy: 50,
    },
    {
      id: 5,
      title: 'Precificação',
      date: 'Módulo 5',
      content: 'Como cobrar mais e atrair clientes premium. Edição vira renda.',
      category: 'Business',
      icon: DollarSign,
      relatedIds: [4, 6],
      status: 'pending',
      energy: 30,
    },
    {
      id: 6,
      title: 'Bônus VIP',
      date: 'Extras',
      content: 'Pack de templates exclusivos + Comunidade VIP de editores.',
      category: 'Bônus',
      icon: Gift,
      relatedIds: [5],
      status: 'pending',
      energy: 15,
    },
  ]

  return (
    <section id="curriculo" className="py-24 px-4 section-alt-2 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-4">
            <span className="uppercase font-normal">Tudo que você vai dominar</span>
            <br />
            <span className="font-normal">dentro do </span>
            <span className="text-brand-green italic font-normal">FrameHub</span>
            <span className="font-normal">:</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            São mais de 50 horas de conteúdo objetivo. Zero enrolação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RadialOrbitalTimeline timelineData={timelineData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="module-box mt-16"
        >
          <div className="module-box-inner">
            {modules.map((mod, i) => (
              <div key={i} className="module-item group">
                <div className="module-item-inner">
                  <span className="module-num">{mod.num}</span>
                  <div className="module-divider" />
                  <h3 className="module-title">{mod.title}</h3>
                </div>
              </div>
            ))}

            <div className="module-item module-item-special">
              <div className="module-item-inner">
                <svg className="w-5 h-5 text-brand-red animate-pulse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <h3 className="module-title text-brand-red">Laboratório de Técnicas Atualizadas</h3>
              </div>
            </div>

            <div className="module-item module-item-special-green">
              <div className="module-item-inner">
                <svg className="w-5 h-5 text-brand-green animate-pulse flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h3 className="module-title text-brand-green">PACK REI — 300GB DE ARQUIVOS PREMIUM</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
