import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Activity, HeartPulse, Moon, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { DashboardCard } from '../components/Cards'
import { dash } from '../data/content'
const bars: Record<string, number[]> = { Overview: [40, 58, 46, 72, 64, 80, 68], Activity: [55, 62, 48, 70, 82, 60, 75], Nutrition: [70, 64, 72, 58, 66, 74, 69], Sleep: [72, 68, 76, 70, 80, 74, 78], Recovery: [60, 66, 70, 64, 72, 76, 80] }
const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
export default function Dashboard() {
  const tabs = Object.keys(dash)
  const [t, setT] = useState(tabs[0])
  return <section className="section"><div className="wrap">
    <SectionHeading center eyebrow="Product preview" title="A glimpse of the future Niva dashboard" text="A static prototype with demo data. Not a live product." />
    <div className="dstage"><div className="dash">
      <div className="app-top"><i /><i /><i /><span>Niva &middot; Dashboard preview</span></div>
      <div className="dash-tabs">{tabs.map(x => <button key={x} className={x === t ? 'on' : ''} onClick={() => setT(x)}>{x}{x === t && <motion.i layoutId="tab" />}</button>)}</div>
      <AnimatePresence mode="wait"><motion.div key={t} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
        <div className="dgrid">{dash[t].stats.map(s => <DashboardCard key={s[0]} label={s[0]} value={s[1]} note={s[2]} />)}</div>
        <div className="dlow"><div className="dchart"><span>This week</span><div className="bars">{bars[t].map((h, i) => <motion.span key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.05, duration: 0.5 }}><em>{days[i]}</em></motion.span>)}</div></div>
          <div className="dinsight"><span>Personalized insight</span><p>{dash[t].insight}</p></div></div></motion.div></AnimatePresence>
      <div className="dash-foot">Demo data</div></div>
      <div className="flrow"><div className="fl d1"><Activity size={16} />Activity increased 12%</div><div className="fl d2"><HeartPulse size={16} />Recovery: Good</div><div className="fl d3"><Moon size={16} />Sleep: 7h 42m</div><div className="fl d4"><Sparkles size={16} />Personalized insight</div></div></div></div></section>
}
