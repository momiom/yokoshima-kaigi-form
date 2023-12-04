import UnderLine from '@/components/UnderLine'
import H1 from '@/components/ui/Heading1'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-col gap-6">
      <p className="text-center">
        この番組は、平成生まれの男女、れいかとかずきが
        <br />
        日常のあれこれを若干よこしまな気持ちで議論するトークプログラムです。
      </p>

      <div className="text-center">
        <H1>
          <UnderLine>おたより</UnderLine>
        </H1>
        <Link href="/form">おたよりはこちらから</Link>
      </div>

      <div className="text-center">
        <H1>
          <UnderLine>番組公式 X</UnderLine>
        </H1>
        <a href="https://x.com/yokoshimakaigi?s=21&t=KgPwbj6KTkC4l6iwFUpjPA">
          平成よこしま会議 @yokoshimakaigi
        </a>
      </div>

      <div className="text-center">
        <H1>
          <UnderLine>Spotify</UnderLine>
        </H1>
        <a href="https://anchor.fm/n3j1j81skhg">https://anchor.fm/n3j1j81skhg</a>
      </div>
    </main>
  )
}
