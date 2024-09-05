import english from './lang/en.json';
import spanish from './lang/es.json';
import { defaultLang, ui } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export const getI18N = ({
  currentLocale = defaultLang
}: {
  currentLocale: Lang;
}) => {
  if (currentLocale === 'en') return { ...spanish, ...english };
  return spanish;
};
