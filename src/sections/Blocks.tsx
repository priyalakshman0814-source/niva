import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { FeatureCard, DeviceCard, InsightCard } from '../components/Cards'
import { platform, devices, flow, aiPoints, personal, nutrition, solutions, steps, why, insights } from '../data/content'
const S = ({ children, soft }: { children: ReactNode; soft?: boolean }) => <section className={`section ${soft ? 'soft' : ''}`}><div className="wrap">{children}</div></section>
export const Platform = () => <S><SectionHeading eyebrow="Platform" title="One ecosystem, four simple steps" text="Niva turns scattered health information into guidance you can use." />
  <div className="grid g4">{platform.map((p, i) => <FeatureCard key={p.n} {...p} i={i} />)}</div></S>
export const Devices = () => <S soft><SectionHeading eyebrow="Smart devices" title="Built to connect with the devices people already use" text="Examples of the planned ecosystem. No device integrations are live in this preview." />
  <div className="grid g3">{devices.map((d, i) => <DeviceCard key={d.name} d={d} i={i} />)}</div></S>
export const DataFlow = () => <S><SectionHeading center eyebrow="Data to decisions" title="From data to decisions" />
  <div className="flow">{flow.map((f, i) => <motion.div key={f} className="flow-step" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><b>{i + 1}</b>{f}{i < flow.length - 1 && <ChevronRight className="chev" size={18} />}</motion.div>)}</div></S>
export { default as AI } from './AIFlow'
export const Personalization = () => <S><SectionHeading eyebrow="Personalized health" title="Recommendations should never be generic" text="Niva is designed to consider many parts of your day together." />
  <div className="chips">{personal.map((p, i) => <Reveal key={p} delay={i * 0.04} className="chip">{p}</Reveal>)}</div></S>
export const Nutrition = () => <S soft><div className="split"><SectionHeading eyebrow="Concept: Indian nutrition" title="Food guidance that fits real Indian life" text="Instead of generic diet plans, Niva could eventually understand the following and suggest more practical choices. This is a concept, not a working system." />
  <div className="chips">{nutrition.map(n => <span key={n} className="chip green">{n}</span>)}</div></div></S>
export const Solutions = () => <S><SectionHeading eyebrow="Solutions" title="Designed for different people" />
  <div className="grid g3">{solutions.map((s, i) => <FeatureCard key={s.title} {...s} i={i} />)}</div></S>
export const HowItWorks = () => <S soft><SectionHeading eyebrow="How Niva works" title="From connection to daily action" />
  <div className="timeline">{steps.map(([t, d], i) => <Reveal key={t} delay={i * 0.07} className="tl"><b>0{i + 1}</b><h3>{t}</h3><p>{d}</p></Reveal>)}</div></S>
export const Why = () => <S><SectionHeading eyebrow="Why Niva" title="A calmer, clearer approach" />
  <div className="grid g5">{why.map(([t, d], i) => <Reveal key={t} delay={i * 0.05} className="card mini"><h3>{t}</h3><p>{d}</p></Reveal>)}</div></S>
export const InsightsPreview = () => <S soft><SectionHeading eyebrow="Insights" title="Ideas behind connected health" text="Placeholder articles for V1." />
  <div className="grid g3">{insights.slice(0, 3).map(a => <InsightCard key={a.slug} a={a} />)}</div></S>
