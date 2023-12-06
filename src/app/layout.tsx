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
  display: 'block',
})

const siteName = '平成よこしま会議 公式サイト'
const description =
  '平成よこしま会議の公式サイトです。おたよりはこのサイトから。この番組は、平成生まれの男女、れいかとかずきが日常のあれこれを、若干よこしまな気持ちで議論するトークプログラムです。'
const url = 'https://heisei-yokoshima-kaigi.vercel.app'

export const metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@yokoshimakaigi',
    creator: '@yokoshimakaigi',
  },
  alternates: {
    canonical: url,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body
        className={`font-sans ${inter.variable} ${dot.variable} flex flex-col items-center bg-[url(/images/bg.png)] bg-repeat`}
      >
        <GoogleAnalytics />
        <LogoHeader />
        <div className="mb-28 mt-4 max-w-3xl px-5">{children}</div>
      </body>
    </html>
  )
}
