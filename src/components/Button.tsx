import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
export default function Button({ to, variant = 'primary', children, type }: { to?: string; variant?: 'primary' | 'ghost'; children: ReactNode; type?: 'submit' }) {
  const c = `btn btn-${variant}`
  return to ? <Link to={to} className={c}>{children}</Link> : <button type={type} className={c}>{children}</button>
}
