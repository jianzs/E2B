'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { FooterMain } from '@/components/Footer'
import { HeaderMain } from './HeaderMain'

export function LayoutMain({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const relativePathname = pathname?.replace(new RegExp('^/docs'), '')
  const isAuth = relativePathname?.startsWith('/sign-in')

  return (
      <div className={clsx('h-full w-full flex flex-col')}>
        
        {/* @ts-ignore */}
        <HeaderMain isAuth={isAuth} />
        {/* {!isAuth && <Navigation className="hidden lg:my-4 lg:block" />} */}

        <main className="w-full h-full flex flex-col">
          {children}
        </main>

        <FooterMain />
 
      </div>
  )
}


