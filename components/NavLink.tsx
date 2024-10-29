"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface PropInterface {
    path: string
    text: string
    icon?: React.ReactNode
    className?: string
}

export default function NavLink(props: PropInterface) {
    const pathname = usePathname()
    const active = pathname === props.path

    return (
        <Link
            href={props.path}
            className={cn(active ? "opacity-100 text-foreground transition-colors" : "text-foreground transition-colors opacity-65", props.className)}
        >
            <div className="flex gap-4 items-center">
                <span className='w-6 h-6'>{props.icon}</span>
                <span>{props.text}</span>
            </div>
        </Link>
    )
}
