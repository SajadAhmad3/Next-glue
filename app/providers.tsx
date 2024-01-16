'use client';

import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Suspense } from 'react';
import { config } from "../gluestack-ui.config";


export function Providers({ children }: { children: React.ReactNode }) {
  return(
  <Suspense>
  <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
  </Suspense>
  );
}
