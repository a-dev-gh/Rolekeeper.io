import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — RoleKeeper</title>
      </Helmet>
      <div className="placeholder-page">
        <h1><span className="mg">404</span></h1>
        <p>This page doesn't exist yet.</p>
      </div>
    </>
  )
}
