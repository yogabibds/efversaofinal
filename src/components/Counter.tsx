'use client'
import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export default function Counter({ value, prefix = '', suffix = '', decimals = 0, className = '' }: CounterProps) {
  const [display, setDisplay] = useState(prefix ? prefix + '0' : '0')
  const ref = useRef<HTMLSpanElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        const dur = 2400
        const start = performance.now()
        const ease = (t: number) => 1 - Math.pow(1 - t, 3)
        const step = (ts: number) => {
          const p = Math.min((ts - start) / dur, 1)
          const v = value * ease(p)
          const fmt = decimals > 0
            ? v.toFixed(decimals).replace('.', ',')
            : Math.round(v).toLocaleString('pt-BR')
          setDisplay(prefix + fmt + suffix)
          if (p < 1) requestAnimationFrame(step)
          else setDisplay(prefix + (decimals > 0 ? value.toFixed(decimals).replace('.', ',') : value.toLocaleString('pt-BR')) + suffix)
        }
        requestAnimationFrame(step)
        obs.disconnect()
      }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value, prefix, suffix, decimals])

  return <span ref={ref} className={className}>{display}</span>
}
