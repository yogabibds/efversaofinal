'use client'
import { useState } from 'react'

interface PartnerLogoProps {
  name: string
  role: string
  /** filename inside /public/assets/img/logos/ e.g. 'warner-chappell.png' */
  logoFile: string
}

export default function PartnerLogo({ name, role, logoFile }: PartnerLogoProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="p-6 bg-white/[.018] flex flex-col items-start justify-center gap-3 min-h-[110px]">
      {!failed ? (
        <div className="bg-[#f8f6f1] rounded-[4px] px-4 py-3 inline-flex items-center">
          <img
            src={`/assets/img/logos/${logoFile}`}
            alt={`Logotipo ${name}`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-6 md:h-7 w-auto max-w-[140px] object-contain"
          />
        </div>
      ) : (
        <p className="text-fg font-bold text-[1.05rem]">{name}</p>
      )}
      <p className="text-gold text-[.78rem] uppercase tracking-wide">{role}</p>
    </div>
  )
}
