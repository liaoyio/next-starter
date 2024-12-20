'use client'

import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (!!localTheme || !systemTheme) return
    setTheme(systemTheme as string)
  }, [systemTheme])

  if (!mounted) return null

  return (
    <div className='flex size-8 items-center justify-center duration-200'>
      <label className='flex h-full w-full cursor-pointer items-center justify-center rounded-full border duration-200 hover:bg-gray-300/20'>
        <input
          className='hidden'
          type='checkbox'
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />
        {theme === 'light' ? (
          <Sun
            strokeWidth={1}
            className='h-5 w-5'
          />
        ) : (
          <MoonStar
            strokeWidth={1}
            className='h-5 w-5'
          />
        )}
      </label>
    </div>
  )
}
