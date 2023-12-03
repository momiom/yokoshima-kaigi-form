declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, eventValues }: { action: string; eventValues: object }) => {
  window.gtag('event', action, eventValues)
}

export const exception = ({ message, isFatal }: { message: string; isFatal: boolean }) => {
  event({
    action: 'exception',
    eventValues: {
      description: message,
      fatal: isFatal,
    },
  })
}

export const serverSideEvent = ({
  action,
  eventValues,
}: {
  action: string
  eventValues: object
}) => {
  void fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${GA_TRACKING_ID}&api_secret=${process.env.GA_API_SECRET}`,
    {
      method: 'POST',
      body: JSON.stringify({
        client_id: 'server_side_event',
        timestamp_micros: '100',
        non_personalized_ads: false,
        events: [
          {
            name: action,
            params: eventValues,
          },
        ],
      }),
    },
  )
}

export const serverSideException = ({
  message,
  isFatal = false,
}: {
  message: string
  isFatal: boolean
}) => {
  serverSideEvent({
    action: 'exception',
    eventValues: {
      description: message,
      fatal: isFatal,
    },
  })
}
