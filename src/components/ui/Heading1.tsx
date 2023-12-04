import { cn } from '@/lib/utils'

export default function H1({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <h1 className={cn('mb-5 font-dot text-3xl font-bold', className)}>{children}</h1>
}
