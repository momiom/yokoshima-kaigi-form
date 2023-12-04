'use server'

import { Client } from '@notionhq/client'
import { type MessageFormInput } from './types'
import { type CreatePageParameters } from '@notionhq/client/build/src/api-endpoints'
import * as gtag from '@/lib/GoogleAnalytics'
import { redirect } from 'next/navigation'

export async function postMessageAction(data: MessageFormInput) {
  console.log('postMessageAction', data)
  gtag.serverSideEvent({ action: 'post_message', eventValues: data })
  const notion = new Client({ auth: process.env.NOTION_API_KEY })
  const requestData = makeNotionRequestData(data)

  let success = false
  try {
    const response = await notion.pages.create(requestData)
    console.log('posted:', response)
    gtag.serverSideEvent({ action: 'post_message_success', eventValues: { response } })
    success = true
  } catch (error) {
    console.error('error:', error)
    gtag.serverSideException({ message: JSON.stringify(error), isFatal: false })
    success = false
  }

  if (success) {
    redirect('/form/success')
  } else {
    redirect('/form/failure')
  }
}

function makeNotionRequestData(data: MessageFormInput): CreatePageParameters {
  return {
    parent: {
      database_id: process.env.NOTION_DATABASE_ID!,
    },
    properties: {
      ラジオネーム: {
        title: [
          {
            text: {
              content: data.radioName,
            },
          },
        ],
      },
      返信先メールアドレス: {
        rich_text: [
          {
            text: {
              content: data.email ?? '',
            },
          },
        ],
      },
      おたより本文: {
        rich_text: [
          {
            text: {
              content: data.message ?? '',
            },
          },
        ],
      },
      非公開メッセージ: {
        rich_text: [
          {
            text: {
              content: data.privateMessage ?? '',
            },
          },
        ],
      },
    },
    children: [
      {
        object: 'block',
        heading_2: {
          rich_text: [
            {
              text: {
                content: 'おたより本文',
              },
            },
          ],
        },
      },
      {
        object: 'block',
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.message ?? '',
              },
            },
          ],
          color: 'default',
        },
      },
      {
        object: 'block',
        heading_2: {
          rich_text: [
            {
              text: {
                content: '非公開メッセージ',
              },
            },
          ],
        },
      },
      {
        object: 'block',
        paragraph: {
          rich_text: [
            {
              text: {
                content: data.privateMessage ?? '',
              },
            },
          ],
          color: 'default',
        },
      },
      {
        object: 'block',
        paragraph: {
          rich_text: [
            {
              type: 'mention',
              mention: {
                user: {
                  id: '6bea1933-5a8e-4601-8cd2-67f75f3d4345',
                },
              },
            },
          ],
          color: 'default',
        },
      },
    ],
  }
}
