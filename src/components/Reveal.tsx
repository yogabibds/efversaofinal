'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  blur?: boolean
  style?: React.CSSProperties
}

export default function Reveal({ children, className = '', delay = 0, blur = false, style }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: blur ? 0 : 40, filter: blur ? 'blur(12px)' : 'blur(0px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: .9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
