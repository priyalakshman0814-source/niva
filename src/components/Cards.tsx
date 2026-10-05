import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'
export function FeatureCard({ icon: I, title, text, n, i = 0 }: { icon: LucideIcon; title: string; text: string; n?: string; i?: number }) {
  return <Reveal delay={i * 0.06} className="card"><div className="icon"><I size={22} /></div>{n && <span className="num">{n}</span>}<h3>{title}</h3><p>{text}</p></Reveal>
}
export function DeviceCard({ d, i }: { d: { name: string; icon: LucideIcon; desc: string; data: string; use: string }; i: number }) {
  return <Reveal delay={i * 0.05} className="card device"><div className="dvis"><span className="tag">Planned ecosystem</span><d.icon size={56} strokeWidth={1.2} /></div><h3>{d.name}</h3><p>{d.desc}</p>
    <dl><dt>Data collected</dt><dd>{d.data}</dd><dt>How Niva can use it</dt><dd>{d.use}</dd></dl></Reveal>
}
export function InsightCard({ a }: { a: { slug: string; tag: string; title: string; excerpt: string } }) {
  return <Reveal className="card insight"><span className="tag">{a.tag}</span><h3>{a.title}</h3><p>{a.excerpt}</p><Link to={`/insights/${a.slug}`} className="link">Read more <ArrowUpRight size={16} /></Link></Reveal>
}
export function DashboardCard({ label, value, note }: { label: string; value: string; note: string }) {
  return <div className="dcard"><span>{label}</span><strong>{value}</strong><small>{note}</small></div>
}
