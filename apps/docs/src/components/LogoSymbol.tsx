import Image from 'next/image'
import logoE2B from '@/images/logos/e2b.svg'

export interface Props {
  className: string
}

export function LogoSymbol({
  className,
}: Props) {
  return (
    <Image
      src={logoE2B}
      alt="e2b logo"
      className={className}
    />
  )
}
