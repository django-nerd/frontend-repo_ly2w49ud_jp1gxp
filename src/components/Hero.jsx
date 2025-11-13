import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative h-[95vh] w-full overflow-hidden bg-[#040079]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#040079]/40 to-[#040079] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase"
          style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
        >
          The Future of Padel is Born.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="mt-4 text-base md:text-lg text-white/85 max-w-2xl"
        >
          PadWorld.Global — a new era where sport, technology, and lifestyle unite.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#ecosystem" className="px-6 py-3 rounded-full bg-[#040079] hover:bg-[#005CD7] transition-colors text-white font-semibold">
            Explore the Ecosystem
          </a>
          <a href="#investors" className="px-6 py-3 rounded-full border border-white/40 hover:border-white/80 text-white/90 hover:text-white transition-colors font-semibold">
            Investor Relations
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="w-0.5 h-10 bg-white/40 mx-auto rounded-full" />
          <div className="mt-2 text-xs uppercase tracking-[0.3em]">Scroll</div>
        </motion.div>
      </div>
    </section>
  )
}
