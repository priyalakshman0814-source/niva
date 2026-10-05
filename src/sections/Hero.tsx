import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { Activity, Moon, HeartPulse, Sparkles, Watch } from 'lucide-react'
import Button from '../components/Button'
const bars = [40, 58, 46, 72, 64, 80, 68]
const fl = (d = 0) => ({ animate: { y: [0, -6, 0] }, transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' as const, delay: d } })
export default function Hero() {
  return <section className="hero"><div className="wrap hero-in">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <span className="eyebrow">Connected health, made personal</span>
      <h1>Niva&rsquo;s intelligent approach to connected health.</h1>
      <p className="lead">Connect your health data, understand your patterns, and turn insights into meaningful daily actions.</p>
      <div className="row"><Button to="/platform">Explore Niva</Button><Button to="/contact" variant="ghost">Book a Demo</Button></div>
      <p className="fine">Concept preview &middot; demo data shown</p></motion.div>
    <motion.div className="hv" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
      <div className="glow" />
      <div className="app"><div className="app-top"><i /><i /><i /><span>Niva &middot; Today</span></div>
        <div className="app-body"><div className="app-row">
          <div className="ring" style={{ '--p': 78 } as CSSProperties}><b>78</b><small>Readiness</small></div>
          <div className="mets">{[['Steps', '7,842'], ['Sleep', '7h 42m'], ['Heart rate', '72 bpm']].map(([a, b]) => <div key={a}><small>{a}</small><b>{b}</b></div>)}</div></div>
          <div className="bars">{bars.map((h, i) => <motion.span key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.6 + i * 0.06, duration: 0.6 }} />)}</div>
          <div className="app-insight"><Sparkles size={16} />Your activity has increased this week. Consider maintaining your current routine.</div></div></div>
      <motion.div className="fl f1" {...fl()}><Activity size={16} />Activity increased 12%</motion.div>
      <motion.div className="fl f2" {...fl(1.5)}><HeartPulse size={16} />Recovery: Good</motion.div>
      <motion.div className="fl f3" {...fl(3)}><Moon size={16} />Sleep: 7h 42m</motion.div>
      <div className="dev"><Watch size={26} strokeWidth={1.5} /></div></motion.div></div></section>
}
