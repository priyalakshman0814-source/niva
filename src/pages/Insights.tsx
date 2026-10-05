import { Link, useParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { InsightCard } from '../components/Cards'
import { insights } from '../data/content'
export const InsightsPage = () => <PageTransition><section className="page-head"><div className="wrap"><span className="eyebrow">Insights</span><h1>Insights</h1><p className="lead">Placeholder articles. Real content can be added in data/content.ts.</p></div></section>
  <section className="section"><div className="wrap grid g3">{insights.map(a => <InsightCard key={a.slug} a={a} />)}</div></section></PageTransition>
export function InsightDetail() {
  const a = insights.find(i => i.slug === useParams().slug)
  return <PageTransition><section className="page-head"><div className="wrap narrow">{a ? <><span className="eyebrow">{a.tag}</span><h1>{a.title}</h1><p className="lead">{a.excerpt}</p><p>Full article content will be added here. This is a placeholder for V1.</p></> : <h1>Article not found</h1>}<Link to="/insights" className="link">&larr; All insights</Link></div></section></PageTransition>
}
