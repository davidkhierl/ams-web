'use client'

import { theme } from '@/chakra-ui/theme'
import { ComponentPreviews, useInitial } from '@/components/dev'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { DevSupport } from '@react-buddy/ide-toolbox-next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactNode, useState } from 'react'

export interface AppProviderProps {
  children?: ReactNode
}
export function AppProvider({ children }: AppProviderProps) {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  )

  return (
    <QueryClientProvider client={client}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}>
            <>{children}</>
          </DevSupport>
        </ChakraProvider>
      </CacheProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
