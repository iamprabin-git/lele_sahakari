// next.config.mjs
import nextI18NextConfig from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: nextI18NextConfig.i18n,
  react: { 
    useSuspense: false,
  },
};

export default nextConfig;