import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Instagram } from 'lucide-react'
import { footer } from '../data/content'
import { Logo } from './Navbar'
export default function Footer() {
  return <footer className="footer"><div className="wrap">
    <div className="f-grid"><div className="f-brand"><Logo /><p>A smarter approach to connected health.</p>
      <div className="social"><a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#" aria-label="X"><Twitter size={18} /></a><a href="#" aria-label="Instagram"><Instagram size={18} /></a></div></div>
      {Object.entries(footer).map(([h, ls]) => <div key={h}><h4>{h}</h4>{ls.map(([l, to]) => <Link key={l} to={to}>{l}</Link>)}</div>)}</div>
    <div className="f-bot">&copy; {new Date().getFullYear()} Niva. Concept preview. Demo data only; not medical advice.</div></div></footer>
}
