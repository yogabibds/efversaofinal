'use client'
import { useState, FormEvent } from 'react'

interface Field {
  name: string; label: string; type?: string
  placeholder?: string; required?: boolean; options?: string[]
}

interface Props {
  to: string; subject: string; submitLabel?: string; fields: Field[]
}

export default function MailtoForm({ to, subject, submitLabel = 'Enviar', fields }: Props) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handle = (e: FormEvent) => {
    e.preventDefault()
    const body = fields.map(f => `${f.label}: ${values[f.name] || ''}`).join('\n')
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) return <p className="text-sm text-muted">Abrindo seu e-mail. Confirme o envio por lá.</p>

  return (
    <form onSubmit={handle} className="flex flex-col gap-3 w-full max-w-md">
      {fields.map(f => {
        if (f.type === 'textarea') return (
          <textarea key={f.name} placeholder={f.placeholder} required={f.required}
            onChange={e => setValues(v => ({ ...v, [f.name]: e.target.value }))}
            className="w-full rounded-xl border border-line bg-white/[.04] p-3 text-fg text-sm resize-none min-h-[100px] outline-none focus:border-gold/40" />
        )
        if (f.type === 'select') return (
          <select key={f.name} onChange={e => setValues(v => ({ ...v, [f.name]: e.target.value }))}
            className="w-full rounded-xl border border-line bg-white/[.04] p-3 text-fg text-sm outline-none focus:border-gold/40">
            {f.options?.map(o => <option key={o}>{o}</option>)}
          </select>
        )
        return (
          <input key={f.name} type={f.type || 'text'} placeholder={f.placeholder} required={f.required}
            onChange={e => setValues(v => ({ ...v, [f.name]: e.target.value }))}
            className="w-full rounded-full border border-line bg-white/[.04] px-5 py-3 text-fg text-sm outline-none focus:border-gold/40" />
        )
      })}
      <button type="submit" className="btn btn-primary self-start">{submitLabel}</button>
    </form>
  )
}
