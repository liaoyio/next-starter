import { StoreDemo } from '@/components/example/store'
import DarkModeToggle from '@/components/toggles/darkmode'
import { LanguageToggle } from '@/components/toggles/language'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col items-center gap-6'>
        <StoreDemo />

        <div className='flex w-full items-center justify-center gap-4'>
          {t('hello')}
          <LanguageToggle />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}
