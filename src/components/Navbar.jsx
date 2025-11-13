import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = 'text-white/90 hover:text-white transition-colors tracking-wide uppercase text-xs md:text-sm'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-[#040079]/60 shadow-sm' : 'bg-transparent'} `}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#top" className="font-bold text-white text-sm md:text-base tracking-[0.25em] uppercase">PadWorld.Global</a>
        <nav className="hidden md:flex items-center gap-8">
          <a className={linkCls} href="#about">About</a>
          <a className={linkCls} href="#ecosystem">Ecosystem</a>
          <a className={linkCls} href="#innovation">Technology</a>
          <a className={linkCls} href="#global">Global</a>
          <a className={linkCls} href="#investors">Investors</a>
          <a className={linkCls} href="#press">Press</a>
        </nav>
        <button className="md:hidden text-white" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-[#040079]/90">
          <a className={linkCls + ' block'} href="#about" onClick={() => setOpen(false)}>About</a>
          <a className={linkCls + ' block'} href="#ecosystem" onClick={() => setOpen(false)}>Ecosystem</a>
          <a className={linkCls + ' block'} href="#innovation" onClick={() => setOpen(false)}>Technology</a>
          <a className={linkCls + ' block'} href="#global" onClick={() => setOpen(false)}>Global</a>
          <a className={linkCls + ' block'} href="#investors" onClick={() => setOpen(false)}>Investors</a>
          <a className={linkCls + ' block'} href="#press" onClick={() => setOpen(false)}>Press</a>
        </div>
      )}
    </header>
  )
}
