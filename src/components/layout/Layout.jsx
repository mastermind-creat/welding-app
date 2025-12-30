import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingMenu from './FloatingMenu';

const ChatbotUI = React.lazy(() => import('../chatbot/ChatbotUI'));

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white dark:bg-steel-900 text-steel-900 dark:text-white selection:bg-flame-500/30 transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingMenu />
            <React.Suspense fallback={null}>
                <ChatbotUI />
            </React.Suspense>
        </div>
    );
};

export default Layout;
