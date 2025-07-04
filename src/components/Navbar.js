// components/Navbar.js
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();
  
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">{t('title')}</div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => router.push('/')}
              className="hover:bg-blue-700 px-3 py-2 rounded transition-colors"
            >
              {t('home')}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}