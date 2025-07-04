// components/LanguageSwitcher.js
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  
  const changeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    router.push(router.pathname, router.asPath, { locale: lang });
  };
  
  return (
    <select 
      onChange={changeLanguage} 
      value={i18n.language}
      className="bg-blue-700 border border-white text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      <option value="en">English</option>
      <option value="ne">नेपाली (Nepali)</option>
    </select>
  );
}