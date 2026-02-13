import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import ComparisonTray, { useComparison } from './components/ComparisonEngine';
import { FloatingActions } from './components/FloatingActions';
import { TechSpecPrintTemplate } from './components/SpecPDFGenerator';
import productsData from './data/products.json';
import ProtectedRoute from './components/ProtectedRoute';
import { KRGAssist } from './components/KRGAssist';
import FloatingLeadHub from './components/FloatingLeadHub';

// Lazy load components for performance
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Customization = lazy(() => import('./pages/Customization'));
const Quality = lazy(() => import('./pages/Quality'));
const Contact = lazy(() => import('./pages/Contact'));
const B2BPortal = lazy(() => import('./pages/B2BPortal'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const ComparePage = lazy(() => import('./pages/ComparePage'));
const ESGPortal = lazy(() => import('./pages/ESGPortal'));
const Insights = lazy(() => import('./pages/Insights'));
const About = lazy(() => import('./pages/About'));
const Careers = lazy(() => import('./pages/Careers'));
const Support = lazy(() => import('./pages/Support'));
const Academy = lazy(() => import('./pages/Academy'));
const BuyerDashboard = lazy(() => import('./pages/BuyerDashboard'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));

function App() {
  const comparison = useComparison();

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen w-full relative">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="w-12 h-12 border-4 border-medical-700 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home addToCompare={comparison.addToCompare} />} />
                <Route path="/products" element={<Products />} />
                <Route path="/category/:categoryId" element={<CategoryPage addToCompare={comparison.addToCompare} />} />
                <Route path="/product/:productId" element={<ProductDetail addToCompare={comparison.addToCompare} />} />
                <Route path="/customization" element={<Customization />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/procurement" element={
                  <ProtectedRoute>
                    <B2BPortal />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <BuyerDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-study/:id" element={<CaseStudyDetail />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/esg" element={<ESGPortal />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/about" element={<About />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/support" element={<Support />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Suspense>
          </main>
          <ComparisonTray compareList={comparison.compareList} removeFromCompare={comparison.removeFromCompare} />
          <FloatingActions />
          <FloatingLeadHub />
          <KRGAssist />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
