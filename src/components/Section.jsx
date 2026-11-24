/* Wrapper semântico das seções: id para navegação e data-nav para a navbar. */
export default function Section({ id, nav, className = '', children, label, ...rest }) {
  return (
    <section id={id} data-nav={nav || id} className={`section ${className}`} aria-label={label} {...rest}>
      {children}
    </section>
  )
}
