import { Outlet } from 'react-router'
import { Footer } from '../components/footer'

export function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}
