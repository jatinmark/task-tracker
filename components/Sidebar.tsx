'use client'

import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="w-64 border-r p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2 px-2 py-1">
        <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold">
          P
        </div>
        <span className="font-semibold">Project M.</span>
      </div>
      <nav className="space-y-1">
        {['Home', 'Messages', 'Tasks', 'Members', 'Settings'].map((item) => (
          <Link
            key={item}
            href="#"
            className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            {item}
          </Link>
        ))}
      </nav>
    </div>
  )
}