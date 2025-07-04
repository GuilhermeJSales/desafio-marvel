import { createBrowserRouter } from 'react-router'
import Home from './pages/home'
import { Layout } from './layout'
import { Hero } from './pages/hero'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/hero/:id',
        element: <Hero />,
      },
    ],
  },
])

export { router }
