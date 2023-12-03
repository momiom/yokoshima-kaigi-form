import UnderLine from '@/components/UnderLine'
import H1 from '@/components/ui/Heading1'

export default function SuccessSendForm() {
  return (
    <>
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
    </>
  )
}
