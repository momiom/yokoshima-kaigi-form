import Link from 'next/link'
import UnderLine from './UnderLine'
import Image from 'next/image'

export default function LogoHeader() {
  return (
    <div className="relative w-full max-w-md">
      <Link href="/">
        <Image
          alt="image"
          src="/images/logo.png"
          width={1280}
          height={1280}
          // sizes="100vw"
          className="h-full w-full rounded-t-2xl object-contain"
        />
        <div className="absolute left-0 top-0">
          <h1 className="font-dot text-5xl font-bold">
            <UnderLine>
              &nbsp;平成
              <br />
              <span className="text-blue-400">&nbsp;よこしま</span>
              <br />
              &nbsp;会議
            </UnderLine>
          </h1>
        </div>
      </Link>
    </div>
  )
}
