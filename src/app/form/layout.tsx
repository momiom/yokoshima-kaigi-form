export const metadata = {
  title: 'おたよりフォーム | 平成よこしま会議 公式サイト',
  description:
    '平成よこしま会議の公式サイトです。おたよりはこのサイトから。この番組は、平成生まれの男女、れいかとかずきが日常のあれこれを、若干よこしまな気持ちで議論するトークプログラムです。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
