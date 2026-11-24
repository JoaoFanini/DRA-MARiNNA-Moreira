/* Selo fixo de prévia: sempre visível, em todas as páginas de prévia da F9 Coding. */
export default function PreviewBadge() {
  return (
    <div className="f9-badge">
      <span className="f9-badge__logo" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 40 40">
          <defs>
            <linearGradient id="f9-fg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d4fff0" />
              <stop offset="1" stopColor="#7fe3bd" />
            </linearGradient>
          </defs>
          <path d="M12 9 H29 V15 H18 V19 H26 V25 H18 V31 H12 Z" fill="url(#f9-fg)" stroke="#ffffff" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      </span>
      <span>Prévia criada por F9 Coding <span className="f9-badge__sep">·</span> uso não autorizado</span>
    </div>
  )
}
