import PageTransition from '../components/PageTransition'
import CTASection from '../components/CTASection'
import Hero from '../sections/Hero'
import Dashboard from '../sections/Dashboard'
import * as B from '../sections/Blocks'
export default function Home() {
  return <PageTransition><Hero /><B.Platform /><B.Devices /><B.DataFlow /><B.AI /><B.Personalization /><B.Nutrition /><Dashboard /><B.HowItWorks /><B.Solutions /><B.Why /><B.InsightsPreview /><CTASection /></PageTransition>
}
