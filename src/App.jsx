import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Quality from './pages/Quality.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import { usePageTitle } from './components/ui.jsx'

function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="page-hero not-found">
      <div className="wrap">
        <p className="kicker kicker-inv">404</p>
        <h1 id="page-title">Page not found</h1>
        <p className="page-hero-intro">The page you are looking for does not exist.</p>
        <Link className="btn btn-signal" to="/">
          Back to home
        </Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="quality" element={<Quality />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
