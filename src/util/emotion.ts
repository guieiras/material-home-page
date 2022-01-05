import createCache from '@emotion/cache';
import { EmotionCache } from '@emotion/react';
import { NextComponentType, AppContextType, AppInitialProps, AppPropsType } from 'next/dist/shared/lib/utils';

export function createEmotionCache() {
  return createCache({ key: 'css' });
}

export type EmotionEnhancedAppType = NextComponentType<AppContextType, AppInitialProps, AppPropsWithEmotion>;
export interface AppPropsWithEmotion extends AppPropsType {
  emotionCache: EmotionCache;
}
