import PageTransition from '../components/PageTransition'
const L = ({ t }: { t: string }) => <PageTransition><section className="page-head"><div className="wrap narrow"><h1>{t}</h1><p>Placeholder. Final {t.toLowerCase()} text will be provided before launch.</p></div></section></PageTransition>
export const Privacy = () => <L t="Privacy" />
export const Terms = () => <L t="Terms" />
