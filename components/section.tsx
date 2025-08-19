type SectionProps = {
  id?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">{children}</div>
    </section>
  )
}


