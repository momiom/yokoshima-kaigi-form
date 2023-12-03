'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { postMessageAction } from '../postMessageAction'
import { Textarea } from '@/components/ui/textarea'
import UnderLine from '@/components/UnderLine'
import { strings } from '@/lib/const'
import { useState } from 'react'

const zodFormSchema = z.object({
  radioName: z.coerce
    .string({ required_error: 'この項目にはご記入をお願いします。' })
    .min(2, { message: '2文字以上でのご記入をお願いします。' }),
  message: z.coerce.string(),
  privateMessage: z.coerce.string(),
  email: z.optional(
    z
      .string()
      .email('メールアドレスに誤りがあるようです。正しいメールアドレスをご記入ください。')
      .or(z.literal('')),
  ),
})

export function MessageForm() {
  const form = useForm<z.infer<typeof zodFormSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    resolver: zodResolver(zodFormSchema),
    defaultValues: {
      radioName: '',
      message: '',
      privateMessage: '',
      email: '',
    },
  })

  const [isLoading, setLoading] = useState(false)
  function onSubmit(values: z.infer<typeof zodFormSchema>) {
    setLoading(true)
    void postMessageAction(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-8 space-y-8">
        <FormField
          control={form.control}
          name="radioName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-dot text-base">
                {strings.form.radioName.label}&nbsp;
                <UnderLine>
                  <small>※必須</small>
                </UnderLine>
              </FormLabel>
              <FormDescription></FormDescription>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-dot text-base">{strings.form.message.label}</FormLabel>
              <FormDescription>{strings.form.message.description}</FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privateMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-dot text-base">
                {strings.form.privateMessage.label}
              </FormLabel>
              <FormDescription>{strings.form.privateMessage.description}</FormDescription>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-dot text-base">{strings.form.email.label}</FormLabel>
              <FormDescription>{strings.form.email.description}</FormDescription>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-center">
          {!isLoading && (
            <Button type="submit" className="px-6 font-dot text-base">
              {strings.form.submit.label}
            </Button>
          )}
          {isLoading && (
            <Button disabled className="font-dot text-base">
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              {strings.form.submit.loadingLabel}
            </Button>
          )}
        </div>
      </form>
    </Form>
  )
}
