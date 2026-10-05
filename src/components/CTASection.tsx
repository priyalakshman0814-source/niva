import Button from './Button'
import Reveal from './Reveal'
export default function CTASection() {
  return <section className="section"><div className="wrap"><Reveal className="cta"><h2>Let&rsquo;s build the future of connected health.</h2><p>See how devices, data and AI can come together in one calm, personal experience.</p>
    <div className="row"><Button to="/contact">Book a Demo</Button><Button to="/contact" variant="ghost">Contact Niva</Button></div></Reveal></div></section>
}
