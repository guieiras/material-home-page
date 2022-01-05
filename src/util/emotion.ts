import createCache from '@emotion/cache'
import { EmotionCache } from '@emotion/react'
import { AppProps } from 'next/app'
import { AppType } from 'next/dist/shared/lib/utils'


export function createEmotionCache () {
  return createCache({ key: 'css' })
}

export interface AppPropsWithEmotion extends AppProps {
  emotionCache: EmotionCache;
}
