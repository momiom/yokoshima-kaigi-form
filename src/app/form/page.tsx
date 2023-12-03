import UnderLine from '@/components/UnderLine'
import H1 from '@/components/ui/Heading1'
import { MessageForm } from '@/features/messageForm/components/MessageForm'

export default function FormPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8">
        <H1>
          <UnderLine>おたよりフォーム</UnderLine>
        </H1>

        <MessageForm />
      </div>
    </>
  )
}
