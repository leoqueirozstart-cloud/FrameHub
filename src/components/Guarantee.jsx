import { motion } from 'framer-motion'

export default function Guarantee() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card-lg p-8 md:p-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-green/10 border border-brand-green/20 rounded-full mb-6">
            <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-6">
            <span className="uppercase font-normal">Garantia incondicional de </span>
            <span className="text-brand-green italic font-normal">7 dias</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto">
            Acesse tudo, assista as aulas e aplique o método. Se em 7 dias você não estiver satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
