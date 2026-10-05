import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Button from '../components/Button'
export default function Contact() {
  const [sent, setSent] = useState(false)
  return <PageTransition><section className="page-head"><div className="wrap"><span className="eyebrow">Contact</span><h1>Book a demo</h1><p className="lead">Tell us about your goals and we will get in touch.</p></div></section>
    <section className="section"><div className="wrap narrow">{sent ? <div className="card ok"><CheckCircle2 size={32} /><h3>Thank you</h3><p>Your request has been noted. This is a frontend-only preview, so nothing was sent.</p></div> :
      <form className="form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
        <label>Name<input required /></label><label>Email<input type="email" required /></label><label>Company<input /></label><label>Phone<input type="tel" /></label>
        <label className="full">Message<textarea rows={4} /></label><Button type="submit">Send request</Button></form>}</div></section></PageTransition>
}
