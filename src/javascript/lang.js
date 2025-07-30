let translations = {};
let currentLang = 'es';

// Cargar traducciones desde lang.json
fetch('lang.json')
  .then(response => response.json())
  .then(data => {
    translations = data;
    applyTranslations(); // Idioma por defecto
  });

// Cambiar idioma
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('selectedLang', lang);
  applyTranslations();
}

// Aplicar traducciones
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
}

// Recordar idioma
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLang');
  if (savedLang) {
    currentLang = savedLang;
  }
  applyTranslations();
});
