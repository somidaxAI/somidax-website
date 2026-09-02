import React, { lazy, Suspense, useEffect } from 'react'
import ReactDOM, { type Root } from 'react-dom/client'

declare global {
  interface Window { __somidaxRoot?: Root }
}
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Lazy-load every page so each route is its own JS chunk
const ProductPage     = lazy(() => import('./pages/ProductPage'))
const DevelopersPage  = lazy(() => import('./pages/DevelopersPage'))
const DAOPage         = lazy(() => import('./pages/DAOPage'))
const WhitePaperPage  = lazy(() => import('./pages/WhitePaperPage'))
const LegalPage       = lazy(() => import('./pages/LegalPage'))
const SignInPage      = lazy(() => import('./pages/SignInPage'))
const DashboardPage   = lazy(() => import('./pages/DashboardPage'))
const AIEnginePage    = lazy(() => import('./pages/product/AIEnginePage'))
const SomidaxPayPage  = lazy(() => import('./pages/product/SomidaxPayPage'))
const TokenLoyaltyPage = lazy(() => import('./pages/product/TokenLoyaltyPage'))
const IntegrationsPage = lazy(() => import('./pages/product/IntegrationsPage'))
const PricingPage     = lazy(() => import('./pages/product/PricingPage'))
const InvestorDeckPage = lazy(() => import('./pages/InvestorDeckPage'))
const NotFoundPage    = lazy(() => import('./pages/NotFoundPage'))

function PageLoader() {
  return (
    <div style={{ background: "#080B11", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid rgba(138,43,226,0.2)", borderTopColor: "#8A2BE2", animation: "spin 0.7s linear infinite" }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

const container = document.getElementById('root')!
if (!window.__somidaxRoot) {
  window.__somidaxRoot = ReactDOM.createRoot(container)
}
window.__somidaxRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/ai-engine" element={<AIEnginePage />} />
          <Route path="/product/somidax-pay" element={<SomidaxPayPage />} />
          <Route path="/product/token-loyalty" element={<TokenLoyaltyPage />} />
          <Route path="/product/integrations" element={<IntegrationsPage />} />
          <Route path="/product/pricing" element={<PricingPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/developers/:page" element={<DevelopersPage />} />
          <Route path="/dao" element={<DAOPage />} />
          <Route path="/dao/whitepaper" element={<WhitePaperPage />} />
          <Route path="/dao/:page" element={<DAOPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/legal/:page" element={<LegalPage />} />
          <Route path="/investors" element={<InvestorDeckPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
