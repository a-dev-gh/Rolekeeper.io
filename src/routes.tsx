import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { PageLayout } from './components/layout/PageLayout'
import { ProtectedRoute } from './components/layout/ProtectedRoute'

// Lazy-loaded pages for code splitting
const Landing = lazy(() => import('./pages/Landing'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Login = lazy(() => import('./pages/Login'))
const Guide = lazy(() => import('./pages/Guide'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const DashboardProfile = lazy(() => import('./pages/DashboardProfile'))
const Guilds = lazy(() => import('./pages/Guilds'))
const GuildDetail = lazy(() => import('./pages/GuildDetail'))
const UserProfile = lazy(() => import('./pages/UserProfile'))
const Leaderboard = lazy(() => import('./pages/Leaderboard'))
const Community = lazy(() => import('./pages/Community'))
const ForumPost = lazy(() => import('./pages/ForumPost'))
const Changelog = lazy(() => import('./pages/Changelog'))
const Roadmap = lazy(() => import('./pages/Roadmap'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Router created ONCE at module level — never recreated on re-renders
export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'donate', element: <Pricing /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
      { path: 'login', element: <Login /> },
      { path: 'guide', element: <Guide /> },
      { path: 'dashboard', element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
      { path: 'dashboard/profile', element: <ProtectedRoute><DashboardProfile /></ProtectedRoute> },
      { path: 'guilds', element: <Guilds /> },
      { path: 'guilds/:id', element: <GuildDetail /> },
      { path: 'u/:username', element: <UserProfile /> },
      { path: 'leaderboard', element: <Leaderboard /> },
      { path: 'community', element: <Community /> },
      { path: 'community/:postId', element: <ForumPost /> },
      { path: 'changelog', element: <Changelog /> },
      { path: 'roadmap', element: <Roadmap /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
