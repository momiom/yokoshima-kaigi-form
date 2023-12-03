import { cn } from '@/lib/utils'

export default function UnderLine({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        `decoration-skip-ink-none block leading-[1.2] underline decoration-yellow-200 decoration-[0.5em] underline-offset-[-0.2em]`,
        className,
      )}
    >
      {children}
    </span>
  )
}
