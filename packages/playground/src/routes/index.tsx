import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './root'
import { ComponentsRoute } from './components'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: 'components',
                element: <ComponentsRoute />,
                // lazy: () => import('./components'),
            },
        ],
    },
])
