import GoogleAnalytics from '@/components/GoogleAnalytics'
import LogoHeader from '@/components/LogoHeader'
import '@/styles/globals.css'

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const dot = localFont({
  src: './fonts/BestTen-CRT.otf',
  variable: '--font-dot',
})

export const metadata = {
  title: 'Create T3 App',
  description: 'Generated by create-t3-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body
        className={`font-sans ${inter.variable} ${dot.variable} flex flex-col items-center bg-[url(/images/bg.png)] bg-repeat`}
      >
        <GoogleAnalytics />
        <LogoHeader />
        <div className="px-4">{children}</div>
      </body>
    </html>
  )
}
