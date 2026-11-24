import { forwardRef, useRef } from 'react'
import { motion } from 'motion/react'
import { useMagnetic } from '../hooks/useMagnetic'
import './Button.css'

/*
 * Botão/Link reutilizável.
 * variant: 'solid' (latão) | 'outline' (pílula como o RESERVAR da hero) | 'ghost'
 * Microinterações: scale sutil (Motion), deslocamento magnético (GSAP) e
 * preenchimento que sobe no hover (CSS transform).
 */
const Button = forwardRef(function Button(
  { as = 'button', href, variant = 'outline', size = 'md', icon, magnetic = true, loading = false, className = '', children, ...rest },
  forwardedRef,
) {
  const innerRef = useRef(null)
  const ref = forwardedRef || innerRef
  useMagnetic(ref, { strength: magnetic ? 0.25 : 0 })

  const Tag = href ? motion.a : as === 'button' ? motion.button : motion[as] || motion.button
  const extra = href
    ? { href, ...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    : { type: rest.type || 'button' }

  return (
    <Tag
      ref={ref}
      className={`btn btn--${variant} btn--${size} ${loading ? 'is-loading' : ''} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 26 }}
      aria-busy={loading || undefined}
      {...extra}
      {...rest}
    >
      <span className="btn__fill" aria-hidden="true" />
      <span className="btn__label">
        {loading ? <span className="btn__spinner" aria-hidden="true" /> : null}
        <span>{children}</span>
        {icon && !loading ? <span className="btn__icon">{icon}</span> : null}
      </span>
    </Tag>
  )
})

export default Button
