export const languages = {
  en: 'English',
  es: 'Español'
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'contact.email': 'Email',
    'contact.download_cv': 'Download CV',
    'footer.spotify.title': 'Now playing...',
    'footer.spotify.not-playing': 'Nothing 😴'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'contact.email': 'Correo electrónico',
    'contact.download_cv': 'Descargar CV',
    'footer.spotify.title': 'Escuchando...',
    'footer.spotify.not-playing': 'Nada 😴'
  }
} as const;
