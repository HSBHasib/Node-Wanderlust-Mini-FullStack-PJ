'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = ({children, className, href}) => {
  const pathname = usePathname();
  return (
    <div>
      <Link className={`font-medium text-[15px] ${href === pathname && 'text-[#15A1BF] underline pb-1'} ${className}`} href={href}>{children}</Link>
    </div>
  )
}

export default NavLinks
