import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'
import logo from '../assets/branding/logo.svg'
import Button from './Button'
export const Logo = () => <Link to="/" className="logo" aria-label="Niva home"><img src={logo} alt="Niva" height={30} /></Link>
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  useEffect(() => { const f = () => setSc(window.scrollY > 24); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`nav ${sc ? 'scrolled' : ''}`}><div className="wrap"><div className="nav-in">
      <Logo />
      <nav className="nav-links">{nav.map(n => <NavLink key={n.to} to={n.to}>{n.label}</NavLink>)}</nav>
      <div className="nav-cta"><Button to="/contact">Book a Demo</Button></div>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div></div>
    <AnimatePresence>{open && <motion.div className="drawer" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
      {nav.map((n, i) => <motion.div key={n.to} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}><NavLink to={n.to}>{n.label}</NavLink></motion.div>)}
      <Button to="/contact">Book a Demo</Button></motion.div>}</AnimatePresence></header>
  )
}
