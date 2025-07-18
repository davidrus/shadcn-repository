import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { StoryFn } from '@storybook/react'
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
  RootRoute,
  Route,
} from '@tanstack/react-router'

// 🟢 1️⃣ Definujeme root route
const rootRoute = new RootRoute({
  component: () => <>{/* Empty root wrapper */}</>,
})

// 🟢 2️⃣ Definujeme child route, explicitně s getParentRoute
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => null,
})

// 🟢 3️⃣ Router s routeTree
const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute]),
  history: createMemoryHistory({
    initialEntries: ['/'],
  }),
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// 🟢 4️⃣ Decorator
const withRouter = (Story: StoryFn) => (
  // <RouterProvider router={router}>
  <Story />
  // </RouterProvider>
)

// 🟢 5️⃣ i18n mock
;(globalThis as any).mockUseTranslation = () => ({
  t: (key: string) => key,
  i18n: { language: 'en', changeLanguage: () => Promise.resolve() },
})

// 🟢 6️⃣ Final preview export
const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
