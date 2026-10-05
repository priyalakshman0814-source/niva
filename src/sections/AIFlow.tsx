import { motion } from 'framer-motion'
import { Activity, Moon, Apple, HeartPulse, Brain, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { aiPoints } from '../data/content'
const ins = [[Activity, 'Activity'], [Moon, 'Sleep'], [Apple, 'Nutrition'], [HeartPulse, 'Recovery']] as const
const Line = () => <motion.div className="ai-line" animate={{ backgroundPositionY: ['0%', '200%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
export default function AIFlow() {
  return <section className="section soft"><div className="wrap">
    <SectionHeading center eyebrow="Niva Intelligence" title="Intelligence that understands your health journey." text="Data, patterns, insights. Designed to support everyday decisions, not to diagnose or treat." />
    <div className="aiflow">
      <div className="ai-in">{ins.map(([I, l], i) => <motion.div key={l} className="ai-chip" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><I size={18} />{l}</motion.div>)}</div>
      <Line />
      <motion.div className="ai-core" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <motion.span animate={{ scale: [1, 1.07, 1], opacity: [0.5, 0.15, 0.5] }} transition={{ duration: 5, repeat: Infinity }} /><Brain size={30} /><b>Niva Intelligence</b><small>Data &rarr; Patterns &rarr; Insights</small></motion.div>
      <Line />
      <div className="ai-out"><Sparkles size={18} /><div><b>Personalized insight</b><p>Your sleep has been steady this week. A moderate session today may suit your recovery.</p></div></div>
    </div>
    <div className="chips center">{aiPoints.map(p => <span key={p} className="chip">{p}</span>)}</div></div></section>
}
