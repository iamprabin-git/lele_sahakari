import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
        <p className="text-xl text-gray-600 mb-8">{t('description')}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
          {t('cta')}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard title={t('feature1')} />
        <FeatureCard title={t('feature2')} />
        <FeatureCard title={t('feature3')} />
      </div>
      
      <div className="bg-gray-100 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-4">{t('about')}</h2>
        <p className="text-lg leading-relaxed">
          {t('content')}
        </p>
      </div>
      
      <LanguageExamples />
    </div>
  );
}

const FeatureCard = ({ title }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center">{title}</h3>
  </div>
);

const LanguageExamples = () => {
  const { t, i18n } = useTranslation('common');
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold">Language Examples</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 border-r border-gray-200">
          <h3 className="text-lg font-bold mb-4">English</h3>
          <p className="mb-2"><span className="font-semibold">Greeting:</span> Hello, how are you?</p>
          <p className="mb-2"><span className="font-semibold">Question:</span> Where is the nearest hospital?</p>
          <p className="mb-2"><span className="font-semibold">Common Phrase:</span> Thank you very much!</p>
        </div>
        <div className="p-6 font-sans-ne">
          <h3 className="text-lg font-bold mb-4">नेपाली (Nepali)</h3>
          <p className="mb-2"><span className="font-semibold">अभिवादन:</span> नमस्ते, तपाईंलाई कस्तो छ?</p>
          <p className="mb-2"><span className="font-semibold">प्रश्न:</span> नजिकैको अस्पताल कहाँ छ?</p>
          <p className="mb-2"><span className="font-semibold">सामान्य वाक्यांश:</span> धेरै धेरै धन्यवाद!</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}