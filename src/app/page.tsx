import UnderLine from '@/components/UnderLine'
import H1 from '@/components/ui/Heading1'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-col gap-12">
      <div className="text-center">
        <H1>
          <UnderLine>おたより</UnderLine>
        </H1>
        <Link href="/form">おたよりはこちらから！</Link>
      </div>

      <div className="text-center">
        <H1>
          <UnderLine>番組公式 X</UnderLine>
        </H1>
        <a href="https://x.com/yokoshimakaigi?s=21&t=KgPwbj6KTkC4l6iwFUpjPA" target="_blank">
          平成よこしま会議 @yokoshimakaigi
        </a>
      </div>

      <div className="text-center">
        <H1>
          <UnderLine>Spotify</UnderLine>
        </H1>
        <a href="https://anchor.fm/n3j1j81skhg" target="_blank">
          https://anchor.fm/n3j1j81skhg
        </a>
      </div>
    </main>
  )
}
