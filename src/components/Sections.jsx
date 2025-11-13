import { motion } from 'framer-motion'

const Section = ({ id, children, bg = 'white' }) => (
  <section id={id} className={`${bg} relative py-24 md:py-32`}>{children}</section>
)

export function About() {
  return (
    <Section id="about" bg="bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop" alt="Padel" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#040079] uppercase tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>A Global Padel Revolution.</h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            PadWorld.Global is building the world’s most advanced padel ecosystem — from AI-powered smart courts to luxury resorts and wellness experiences — uniting sport, innovation, and community.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ['25+', 'Countries'],
              ['300+', 'Smart Courts'],
              ['5', 'Sub-brands'],
              ['1', 'Global Vision'],
            ].map(([num, label], i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-3xl font-extrabold text-[#005CD7]">{num}</div>
                <div className="text-sm uppercase tracking-widest text-gray-500">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Ecosystem() {
  const items = [
    ['PADWorld Smart Courts', 'AI-driven lighting, cameras, data analytics.'],
    ['PAD&Juice', 'The healthy café concept.'],
    ['PAD Apparel', 'Luxury athleisure line.'],
    ['PAD Resorts & Wellness', 'Premium detox retreats.'],
    ['PAD Teams', 'Padel for children & schools.'],
  ]
  return (
    <Section id="ecosystem" bg="bg-[#040079]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold uppercase tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>The Ecosystem</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(([title, desc], i) => (
            <motion.div key={title} whileHover={{ y: -4 }} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-[#005CD7]/40 transition-all">
              <div className="h-10 w-10 rounded-lg bg-[#005CD7]/20 border border-[#005CD7]/40" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Innovation() {
  return (
    <Section id="innovation" bg="bg-black">
      <div className="max-w-7xl mx-auto px-4 text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Smart by Design. Driven by AI.</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-tr from-[#040079] to-[#005CD7]" />
          <ul className="space-y-4 text-white/80">
            <li>AI lighting & energy optimization.</li>
            <li>Camera-based analytics & live replays.</li>
            <li>The PADWorld App — community & performance tracking.</li>
          </ul>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-3 opacity-60">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-16 bg-gradient-to-r from-[#040079]/40 to-[#005CD7]/40 rounded" />
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Global() {
  return (
    <Section id="global" bg="bg-[#EEF5FF]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#040079]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Expanding Worldwide.</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">PadWorld targets 1,000 smart padel courts by 2030 across 25+ countries.</p>
        <div className="mt-8 aspect-[16/9] rounded-xl overflow-hidden bg-white border border-[#005CD7]/20 relative">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb3JsZHxlbnwwfDB8fHwxNzYzMDY0MTE3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="World" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 pointer-events-none">
            {[
              ['UAE', '40%','30%'], ['Spain', '28%','35%'], ['Indonesia', '70%','65%'], ['Thailand', '65%','55%'], ['Morocco', '35%','45%'], ['USA', '15%','30%']
            ].map(([label, top, left]) => (
              <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2" style={{ top, left, position: 'absolute' }}>
                  <span className="h-2 w-2 rounded-full bg-[#005CD7] animate-pulse"></span>
                  <span className="bg-white/80 text-[#040079] text-xs px-2 py-1 rounded">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <a href="#contact" className="inline-block px-6 py-3 rounded-full bg-[#040079] hover:bg-[#005CD7] transition-colors text-white font-semibold">Become a Partner</a>
        </div>
      </div>
    </Section>
  )
}

export function Investors() {
  return (
    <Section id="investors" bg="bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#040079]" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Invest in the Future of Padel.</h2>
        <p className="mt-4 text-gray-600">We collaborate with visionary investors, developers, and federations to shape the world’s next great sports infrastructure.</p>
        <a href="#contact" className="mt-8 inline-block px-6 py-3 rounded-full bg-[#040079] hover:bg-[#005CD7] transition-colors text-white font-semibold">Request Investor Deck</a>
      </div>
    </Section>
  )
}

export function Press() {
  return (
    <Section id="press" bg="bg-[#546881]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-white/90 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>Press & Media</h2>
          <p className="mt-4">“PadWorld is redefining sport and wellness on a global scale.”</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-white/10 border border-white/20">
              <div className="aspect-[4/3] bg-white/10" />
              <div className="p-4 text-white/90">
                <div className="font-semibold">Magazine Feature {i + 1}</div>
                <div className="text-sm opacity-80">Executive insight into the global padel movement.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#040079] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold tracking-[0.25em] uppercase">PadWorld.Global</div>
          <div className="mt-4 text-white/70 text-sm">PadWorld HQ — Dubai, UAE</div>
          <div className="text-white/70 text-sm">Email: hello@padworld.global</div>
          <div className="text-white/70 text-sm">Website: padworld.global</div>
        </div>
        <div>
          <div className="uppercase tracking-widest text-sm text-white/70">Socials</div>
          <div className="mt-3 flex gap-4 text-white/90">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">X</a>
          </div>
        </div>
        <div className="md:text-right">
          <div className="text-white/80">PadWorld.Global — Building the Future of Padel.</div>
        </div>
      </div>
    </footer>
  )
}
