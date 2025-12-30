import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ChatProvider } from './context/ChatContext';
import Layout from './components/layout/Layout';

// Pages
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ChatProvider>
          <Layout>
            <React.Suspense fallback={<div className="min-h-screen bg-steel-900 flex items-center justify-center"><div className="w-12 h-12 border-4 border-flame-500 border-t-transparent rounded-full animate-spin"></div></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </React.Suspense>
          </Layout>
        </ChatProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
