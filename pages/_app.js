// pages/_app.js
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import Navbar from '@/components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Handle system preference for dark mode
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  return (
    <div className="theme-transition">
      <Navbar />
      <main className="flex-grow container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4 text-center">
      <p>© 2023 Multilingual Website. All rights reserved.</p>
    </div>
  </footer>
);

export default appWithTranslation(MyApp);