import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'Preciso ter experiência para começar?',
      a: 'Não. O curso começa do absoluto zero. Você não precisa saber nada de edição. Se você sabe abrir o CapCut, já está pronto.',
    },
    {
      q: 'O CapCut é gratuito?',
      a: 'Sim, 100% gratuito. Você não precisa pagar nada além do curso. O CapCut funciona no celular e no computador sem custo algum.',
    },
    {
      q: 'Por quanto tempo tenho acesso?',
      a: 'Acesso vitalício com atualizações inclusas. Você paga uma vez e tem acesso para sempre, incluindo todas as aulas novas que forem adicionadas.',
    },
    {
      q: 'Funciona no celular ou só no computador?',
      a: 'CapCut funciona nos dois. O curso também. Você pode assistir as aulas e praticar no celular, no computador ou em ambos.',
    },
    {
      q: 'Como recebo o acesso?',
      a: 'Imediatamente após a confirmação do pagamento. Você recebe um e-mail com seus dados de login e já pode começar a assistir.',
    },
    {
      q: 'E se eu não gostar?',
      a: 'Garantia de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem questionamentos, sem burocracia.',
    },
  ]

  return (
    <section className="py-24 px-4 section-alt">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-4">
            <span className="uppercase font-normal">Perguntas </span>
            <span className="text-brand-green italic font-normal">Frequentes</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-brand-green transition-transform duration-300 flex-shrink-0 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 border-t border-white/[0.06] pt-4">
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
