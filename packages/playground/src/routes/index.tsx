import { createBrowserRouter } from 'react-router-dom'
import { RootRoute } from './root'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute />,
    },
])
