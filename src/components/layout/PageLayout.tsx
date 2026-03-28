import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Aurora } from './Aurora'

export function PageLayout() {
  return (
    <>
      <Aurora />
      <Navbar />
      <div className="page-wrapper">
        <main className="page-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
