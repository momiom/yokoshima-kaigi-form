import UnderLine from '@/components/UnderLine'
import H1 from '@/components/ui/Heading1'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SuccessSendForm() {
  return (
    <div className="flex flex-col gap-4">
      <H1 className="text-center">
        <UnderLine>
          おたより
          <br />
          ありがとうございます！
        </UnderLine>
      </H1>
      <p>
        あなたからのおたよりのおかげで、
        <br />
        もっと楽しくおしゃべりできます！
        <br />
        これからも引き続き、ご視聴・おたよりお待ちしてます！！
      </p>
      <p className="pt-1 text-right">れいか・かずき</p>

      <div className="mt-4 w-full text-center">
        <Button variant="outline" className="px-6 font-dot text-base" asChild>
          <Link href="/form">さらにおたよりを送る</Link>
        </Button>
      </div>
    </div>
  )
}
