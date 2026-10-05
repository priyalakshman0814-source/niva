import type { ReactNode } from 'react'
import PageTransition from '../components/PageTransition'
import CTASection from '../components/CTASection'
import Dashboard from '../sections/Dashboard'
import * as B from '../sections/Blocks'
const Head = ({ e, t, p }: { e: string; t: string; p: string }) => <section className="page-head"><div className="wrap"><span className="eyebrow">{e}</span><h1>{t}</h1><p className="lead">{p}</p></div></section>
const Page = ({ head, children }: { head: [string, string, string]; children: ReactNode }) => <PageTransition><Head e={head[0]} t={head[1]} p={head[2]} />{children}<CTASection /></PageTransition>
export const PlatformPage = () => <Page head={['Platform', 'The Niva platform', 'Devices, data and AI working together in one connected experience.']}><B.Platform /><B.DataFlow /><Dashboard /><B.HowItWorks /></Page>
export const SolutionsPage = () => <Page head={['Solutions', 'Solutions for every audience', 'How the Niva ecosystem can eventually serve individuals, professionals and organizations.']}><B.Solutions /><B.Why /></Page>
export const DevicesPage = () => <Page head={['Devices', 'A growing device ecosystem', 'Planned connections with smart health and fitness devices.']}><B.Devices /></Page>
export const AIPage = () => <Page head={['AI', 'Niva Intelligence', 'Personalized insights designed to support healthier daily decisions.']}><B.AI /><B.Personalization /><B.Nutrition /></Page>
export const AboutPage = () => <Page head={['About', 'About Niva', 'Niva is building a connected health ecosystem that brings devices, health data, AI and personalized guidance together.']}><B.Why /></Page>
