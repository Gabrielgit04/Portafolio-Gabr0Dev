import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  once?: boolean
}

const hiddenByDirection: Record<Direction, string> = {
  up: 'translate-y-4',
  down: '-translate-y-4',
  left: '-translate-x-4',
  right: 'translate-x-4',
  none: '',
}

export const Reveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ once })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        inView
          ? 'translate-x-0 translate-y-0 opacity-100'
          : `opacity-0 ${hiddenByDirection[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
