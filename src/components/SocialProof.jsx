import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

function playNotifSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, ctx.currentTime)
    osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.08)
    gain.gain.setValueAtTime(0.06, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)
    osc.start(ctx.currentTime)
    osc.stop(ctx.currentTime + 0.25)
  } catch (e) {}
}

export default function SocialProof() {
  const [activeNotif, setActiveNotif] = useState(null)
  const [showNotif, setShowNotif] = useState(false)

  const notifications = [
    { name: 'João de SP', action: 'comprou o FrameHub', time: 'agora' },
    { name: 'Maria do RJ', action: 'comprou o FrameHub', time: 'há 2 min' },
    { name: 'Lucas de MG', action: 'comprou o FrameHub', time: 'há 5 min' },
    { name: 'Ana da BA', action: 'comprou o FrameHub', time: 'há 8 min' },
    { name: 'Pedro do PR', action: 'comprou o FrameHub', time: 'há 12 min' },
    { name: 'Carla de CE', action: 'comprou o FrameHub', time: 'há 15 min' },
    { name: 'Rafael de GO', action: 'comprou o FrameHub', time: 'há 20 min' },
    { name: 'Juliana do RS', action: 'comprou o FrameHub', time: 'há 25 min' },
  ]

  useEffect(() => {
    let index = 0
    const showNext = () => {
      setActiveNotif(index % notifications.length)
      setShowNotif(true)
      playNotifSound()

      setTimeout(() => {
        setShowNotif(false)
      }, 4000)

      index++
    }

    const firstTimeout = setTimeout(showNext, 8000)
    const interval = setInterval(showNext, 18000 + Math.random() * 12000)

    return () => {
      clearTimeout(firstTimeout)
      clearInterval(interval)
    }
  }, [])

  const stats = [
    { value: '2.000+', label: 'alunos' },
    { value: '4.9★', label: 'de avaliação' },
    { value: '98%', label: 'recomendam' },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="font-display italic text-3xl md:text-5xl text-brand-green mb-2">{stat.value}</div>
              <div className="text-text-secondary text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="fixed bottom-6 left-6 z-50 hidden md:block">
          {activeNotif !== null && (
            <motion.div
              key={activeNotif}
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{
                opacity: showNotif ? 1 : 0,
                x: showNotif ? 0 : -100,
                scale: showNotif ? 1 : 0.9
              }}
              transition={{ duration: 0.4 }}
              className="glass-card px-4 py-3 flex items-center gap-3 max-w-xs"
            >
              <div className="w-8 h-8 bg-brand-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white font-semibold">{notifications[activeNotif].name}</div>
                <div className="text-xs text-text-secondary">
                  {notifications[activeNotif].action}
                  <span className="text-brand-green/60 ml-1">• {notifications[activeNotif].time}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
