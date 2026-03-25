'use client'

import React from 'react'

export const Button: React.FC<{
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
  [key: string]: any
}> = ({ icon, children, className = "", ...props }) => (
  <button
    className={`relative cursor-pointer z-0 inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl 
    border border-zinc-300 bg-zinc-100 
    px-6 py-3 font-medium text-sm text-zinc-900 transition-all duration-500
    before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:opacity-0
    before:rounded-xl before:bg-zinc-900 before:transition-all before:duration-1000 before:content-[""]
    hover:scale-105 hover:text-white hover:before:opacity-100 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 ${className}`}
    {...props}
  >
    {icon && <span className="flex items-center">{icon}</span>}
    <span>{children}</span>
  </button>
)
