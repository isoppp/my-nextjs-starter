import AppFooter from '@/components/AppFooter'
import AppHeader from '@/components/AppHeader'
import AppProviders from '@/components/core/AppProviders'
import { DebugObserver } from '@/components/core/DebugObserver'
import FlashMessages from '@/components/shared/FlashMessages'
import About from '@/components/views/About'
import Home from '@/components/views/Home'
import { NextPage } from 'next'
import Head from 'next/head'
import { Link, Outlet, ReactLocation, Router } from 'react-location'
const location = new ReactLocation()
const IndexPage: NextPage = () => {
  return (
    <AppProviders>
      {process.env.NODE_ENV === 'development' && <DebugObserver />}
      <Head>
        <title>my-nextjs-starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Router
        location={location}
        routes={[
          { path: '/', element: <Home /> },
          { path: '/about', element: <About /> },
        ]}
      >
        <AppHeader />
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
        </div>
        <main>
          <Outlet />
        </main>
        <AppFooter />
      </Router>
      <FlashMessages />
    </AppProviders>
  )
}

export default IndexPage
