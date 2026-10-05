import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import { PlatformPage, SolutionsPage, DevicesPage, AIPage, AboutPage } from './pages/Pages'
import { InsightsPage, InsightDetail } from './pages/Insights'
import Contact from './pages/Contact'
import { Privacy, Terms } from './pages/Legal'
export default function App() {
  const loc = useLocation()
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  )
}
