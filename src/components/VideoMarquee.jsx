import { motion } from 'framer-motion'
import { Marquee } from '@/components/ui/marquee'
import { GlowVideoCard } from '@/components/ui/glow-video-card'

const videos = [
  {
    id: 1,
    title: 'Motion Reels',
    desc: 'Animações dinâmicas para redes sociais',
    gradient: 'from-brand-red/30 via-brand-green/20 to-transparent',
  },
  {
    id: 2,
    title: 'Edição Comercial',
    desc: 'Vídeo institucional com pacing estratégico',
    gradient: 'from-brand-green/30 via-brand-red/20 to-transparent',
  },
  {
    id: 3,
    title: 'Transições Criativas',
    desc: 'Cortes invisíveis que prendem a atenção',
    gradient: 'from-brand-red/20 via-brand-green/30 to-transparent',
  },
  {
    id: 4,
    title: 'Legendas Animadas',
    desc: 'Tipografia que engaja e retém viewers',
    gradient: 'from-brand-green/20 via-brand-red/30 to-transparent',
  },
  {
    id: 5,
    title: 'Hook Visual',
    desc: 'Primeiros 3 segundos que param o scroll',
    gradient: 'from-brand-red/30 via-brand-green/10 to-transparent',
  },
  {
    id: 6,
    title: 'Capa Thumbnail',
    desc: 'Design visual que gera cliques',
    gradient: 'from-brand-green/10 via-brand-red/30 to-transparent',
  },
]

export default function VideoMarquee() {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-[clamp(1.6rem,4vw,2.8rem)] leading-tight mb-4">
            <span className="uppercase font-normal">Trabalhos feitos por quem</span>
            <br />
            <span className="font-normal">aplicou o </span>
            <span className="text-brand-green italic font-normal">método FrameHub</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-bg-primary to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-bg-primary to-transparent" />

          <Marquee className="[--gap:1.5rem]" pauseOnHover speed={50}>
            {videos.map((video) => (
              <div
                key={video.id}
                className="group flex w-72 shrink-0 cursor-pointer"
              >
                <GlowVideoCard className="w-full">
                  <div className="aspect-[9/16] relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300">
                          <svg className="w-6 h-6 text-white ml-0.5 group-hover:text-bg-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <h3 className="font-display text-lg text-white italic">{video.title}</h3>
                      <p className="text-text-secondary text-xs mt-1">{video.desc}</p>
                    </div>
                  </div>
                </GlowVideoCard>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
