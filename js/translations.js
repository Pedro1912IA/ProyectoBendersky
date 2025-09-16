// Objeto con todas las traducciones
const translations = {
  // Menú de navegación
  'nav': {
    'inicio': {
      'es': 'inicio',
      'en': 'Home'
    },
    'trayectoria': {
      'es': 'Trayectoria',
      'en': 'About'
    },
    'galeria': {
      'es': 'Galería',
      'en': 'Gallery'
    },
    'exposiciones': {
      'es': 'Exposiciones',
      'en': 'Exhibitions'
    },
    'contacto': {
      'es': 'Contacto',
      'en': 'Contact'
    }
  },
  
  // Página de inicio
  'home': {
    'bienvenida': {
      'es': 'Bienvenidos al sitio oficial de Eduardo Bendersky.',
      'en': 'Welcome to the official website of Eduardo Bendersky.'
    },
    'cita': {
      'es': '"El resultado no interesa. Lo importante es el devenir de los trabajos, pues te pone en actitud de recibir. Y a veces sucede."',
      'en': '"The result doesn\'t matter. What\'s important is the process of the work, as it puts you in a position to receive. And sometimes it happens."'
    },
    'descripcion': {
      'es': 'Sumergite en el universo provocador de Eduardo Bendersky, donde cada obra cuestiona tus certezas y despierta emociones que van más allá de las palabras. El arte que encontrarás no se explica: se siente, se vive en lo más profundo, trascendiendo toda frontera o idioma.',
      'en': 'Explore the captivating world of Eduardo Bendersky, a bilingual artist whose work transcends linguistic boundaries. Immerse yourself in a collection of evocative pieces that speak to the soul, regardless of language.'
    }
  },
  
  // Página Gallery/Galería
  'gallery': {
    'titulo': {
      'es': 'Galería',
      'en': 'Gallery'
    },
    'pinturas': {
      'es': 'Pinturas al óleo',
      'en': 'Oil Paintings'
    },
    'dibujos': {
      'es': 'Dibujos',
      'en': 'Drawings'
    },
    'colecciones': {
      'es': 'Colecciones',
      'en': 'Collections'
    }
  },
  
  // Página Exhibitions/Exposiciones
  'exhibitions': {
    'titulo': {
      'es': 'Exposiciones',
      'en': 'Exhibitions'
    },
    'individuales': {
      'es': 'Exposiciones Individuales',
      'en': 'Solo Exhibitions'
    },
    'colectivas': {
      'es': 'Exposiciones Colectivas',
      'en': 'Group Exhibitions'
    }
  },
  
  // Página About/Trayectoria
  'about': {
    'titulo': {
      'es': 'Aspectos destacados de la carrera – Eduardo Bendersky',
      'en': 'Career Highlights – Eduardo Bendersky'
    },
    'etapa1_titulo': {
      'es': 'Formación temprana e influencias',
      'en': 'Early training and influences'
    },
    'etapa1_fecha': {
      'es': '1932–1951',
      'en': '1932–1951'
    },
    'etapa1_texto': {
      'es': 'Nacido en Córdoba, Argentina, en 1932, Bendersky comenzó sus estudios artísticos en la Academia de Bellas Artes de su ciudad natal, aunque no los completó formalmente. Desde temprano mostró una inclinación hacia la exploración visual profunda e introspectiva.',
      'en': 'Born in Córdoba, Argentina, in 1932, Bendersky began his artistic studies at the Academy of Fine Arts in his hometown, although he did not formally complete them. From an early age, he showed an inclination toward deep and introspective visual exploration.'
    },
    'etapa2_titulo': {
      'es': 'Expansión artística en París',
      'en': 'Artistic expansion in Paris'
    },
    'etapa2_fecha': {
      'es': '1952–1962',
      'en': '1952–1962'
    },
    'etapa2_texto': {
      'es': 'Durante su primera residencia en París (1952-1962), vivió y trabajó inmerso en la escena artística europea. Estudió en el célebre Atelier 17 del grabador Stanley William Hayter, donde entró en contacto con corrientes del arte abstracto y surrealista. Su estilo comenzó a gestarse entre lo metafísico y lo introspectivo.',
      'en': 'During his first residency in Paris (1952–1962), he lived and worked immersed in the European art scene. He studied at the renowned Atelier 17 of engraver Stanley William Hayter, where he came into contact with abstract and surrealist art movements. His style began to take shape between the metaphysical and the introspective.'
    },
    'etapa3_titulo': {
      'es': 'Viajes por América Latina',
      'en': 'Travels through Latin America'
    },
    'etapa3_fecha': {
      'es': '1963–1965',
      'en': '1963–1965'
    },
    'etapa3_texto': {
      'es': 'Viajó extensamente por Brasil, Perú, Bolivia, Centroamérica, Jamaica y Trinidad, experiencias que marcaron su mirada estética y simbólica. En 1965 obtuvo la beca del Fondo Nacional de las Artes, reconocimiento clave en su trayectoria.',
      'en': 'He traveled extensively through Brazil, Peru, Bolivia, Central America, Jamaica, and Trinidad, experiences that shaped his aesthetic and symbolic vision. In 1965, he received a grant from the National Arts Fund, a key recognition in his career.'
    },
    'etapa4_titulo': {
      'es': 'Período en Buenos Aires y exposiciones',
      'en': 'Period in Buenos Aires and exhibitions'
    },
    'etapa4_fecha': {
      'es': '1966–1977',
      'en': '1966–1977'
    },
    'etapa4_texto': {
      'es': 'Instalado en Buenos Aires, se consolidó como un artista de culto. En este período expuso obras con títulos conceptuales y enigmáticos como Intuición de lo Innombrable (1971) y De lo Innombrable (1972), revelando su interés por lo misterioso e inefable.',
      'en': 'Settling in Buenos Aires, he established himself as a cult artist. During this period, he exhibited works with conceptual and enigmatic titles such as Intuición de lo Innombrable (Intuition of the Unnameable, 1971) and De lo Innombrable (Of the Unnameable, 1972), revealing his interest in the mysterious and ineffable.'
    },
    'etapa5_titulo': {
      'es': 'Regreso a París y madurez artística',
      'en': 'Return to Paris and artistic maturity'
    },
    'etapa5_fecha': {
      'es': '1977–1979',
      'en': '1977–1979'
    },
    'etapa5_texto': {
      'es': 'Regresó a París por un breve pero significativo período de dos años. Esta segunda etapa francesa reafirmó su relación con el arte europeo y con los lenguajes plásticos más poéticos y simbólicos.',
      'en': 'He returned to Paris for a brief but significant period of two years. This second French period reaffirmed his relationship with European art and with the most poetic and symbolic visual languages.'
    },
    'etapa6_titulo': {
      'es': 'Últimos años y legado',
      'en': 'Final years and legacy'
    },
    'etapa6_fecha': {
      'es': '1979–1993',
      'en': '1979–1993'
    },
    'etapa6_texto': {
      'es': 'Establecido nuevamente en Buenos Aires, desarrolló una obra introspectiva, marcada por el paso de la no figuración a la figuración, evocando a los frescos renacentistas italianos. Falleció en 1993, dejando una obra enigmática, delicada y profunda.',
      'en': 'Settling once again in Buenos Aires, he developed an introspective body of work, marked by a shift from non-figuration to figuration, evoking Italian Renaissance frescoes. He died in 1993, leaving behind an enigmatic, delicate, and profound body of work.'
    }
  },
  
  // Página Gallery/Galería
  'gallery': {
    'titulo': {
      'es': 'Galería',
      'en': 'Gallery'
    },
    'colecciones': {
      'es': 'Colecciones',
      'en': 'Collections'
    },
    'pinturas': {
      'es': 'Pinturas al óleo',
      'en': 'Oil Paintings'
    },
    'dibujos': {
      'es': 'Dibujos',
      'en': 'Drawings'
    }
  },
  
  // Página Exhibitions/Exposiciones
  'exhibitions': {
    'titulo': {
      'es': 'Exposiciones',
      'en': 'Exhibitions'
    },
    'individuales': {
      'es': 'Exposiciones Individuales',
      'en': 'Solo Exhibitions'
    },
    'colectivas': {
      'es': 'Exposiciones Colectivas',
      'en': 'Group Exhibitions'
    },
    'expo2001': {
      'es': 'Centro Cultural Recoleta - Bs As.',
      'en': 'Recoleta Cultural Center - Buenos Aires.'
    },
    'expo1993': {
      'es': 'Galería Palatina - Bs As.',
      'en': 'Palatina Gallery - Buenos Aires.'
    },
    'expo1991': {
      'es': '"Oleos", Galería Rubbers - Bs As.',
      'en': '"Oils", Rubbers Gallery - Buenos Aires.'
    },
    'expo1990': {
      'es': 'Septiembre, es elegido Jurado del "LXXIX Salón Nacional de Artes Plásticas", con sede en el Museo Provincial de Bellas Artes "Emilio A. Caraffa" - Córdoba.',
      'en': 'September, selected as Jury for the "LXXIX National Salon of Visual Arts", held at the Provincial Museum of Fine Arts "Emilio A. Caraffa" - Córdoba.'
    },
    'expo1989': {
      'es': '"Pinturas" Galería Rubbers - Bs As.',
      'en': '"Paintings" Rubbers Gallery - Buenos Aires.'
    }
  },
  
  // Página Contact/Contacto
  'contact': {
    'titulo': {
      'es': 'Contacto',
      'en': 'Contact'
    },
    'nombre_label': {
      'es': 'Nombre',
      'en': 'Name'
    },
    'email_label': {
      'es': 'Email',
      'en': 'Email'
    },
    'mensaje_label': {
      'es': 'Mensaje',
      'en': 'Message'
    },
    'nombre': {
      'es': 'Tu nombre',
      'en': 'Your name'
    },
    'email': {
      'es': 'Tu email',
      'en': 'Your email'
    },
    'mensaje': {
      'es': 'Tu Mensaje',
      'en': 'Your message'
    },
    'enviar': {
      'es': 'Enviar',
      'en': 'Send'
    },
    'agradecimiento': {
      'es': 'Gracias por tu mensaje! Te responderemos pronto.',
      'en': 'Thank you for your message! We\'ll get back to you soon.'
    }
  },
  
  // Footer
  'footer': {
    'derechos': {
      'es': '© 2025 Eduardo Bendersky. Todos los derechos reservados.',
      'en': '© 2025 Eduardo Bendersky. All rights reserved.'
    }
  }
};

// Función para obtener el idioma actual
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'es'; // Por defecto español
}

// Función para cambiar el idioma
function toggleLanguage() {
  const currentLang = getCurrentLanguage();
  const newLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('language', newLang);
  updatePageLanguage();
  updateLanguageButton();
}

// Función para actualizar el botón de idioma
function updateLanguageButton() {
  const currentLang = getCurrentLanguage();
  const langButtons = document.querySelectorAll('.language-toggle');
  
  langButtons.forEach(button => {
    if (currentLang === 'es') {
      button.textContent = 'ES/EN';
    } else {
      button.textContent = 'EN/ES';
    }
  });
}

// Función para actualizar los textos de la página según el idioma
function updatePageLanguage() {
  const currentLang = getCurrentLanguage();
  const currentPage = getCurrentPage();
  
  // Actualizar menú de navegación
  updateNavigation(currentLang);
  
  // Actualizar contenido específico de la página
  switch (currentPage) {
    case 'home':
      updateHomePage(currentLang);
      break;
    case 'about':
      updateAboutPage(currentLang);
      break;
    case 'gallery':
      updateGalleryPage(currentLang);
      break;
    case 'exhibitions':
      updateExhibitionsPage(currentLang);
      break;
    case 'contact':
      updateContactPage(currentLang);
      break;
  }
  
  // Actualizar footer
  updateFooter(currentLang);
}

// Determinar la página actual
function getCurrentPage() {
  const path = window.location.pathname;
  
  if (path.includes('index.html') || path.endsWith('/')) {
    return 'home';
  } else if (path.includes('about.html')) {
    return 'about';
  } else if (path.includes('gallery.html')) {
    return 'gallery';
  } else if (path.includes('exhibitions.html')) {
    return 'exhibitions';
  } else if (path.includes('contact.html')) {
    return 'contact';
  }
  
  return 'home'; // Por defecto
}

// Actualizar navegación
function updateNavigation(lang) {
  // Obtener todos los enlaces de navegación
  const navLinks = document.querySelectorAll('header .flex.items-center.gap-9 a');
  
  if (navLinks.length >= 5) {
    navLinks[0].textContent = translations.nav.inicio[lang];
    navLinks[1].textContent = translations.nav.trayectoria[lang];
    navLinks[2].textContent = translations.nav.galeria[lang];
    navLinks[3].textContent = translations.nav.exposiciones[lang];
    navLinks[4].textContent = translations.nav.contacto[lang];
  }
}

// Actualizar página de inicio
function updateHomePage(lang) {
  const welcomeHeading = document.querySelector('.layout-content-container h2');
  const quote = document.querySelector('.layout-content-container em');
  const description = document.querySelector('.layout-content-container p');
  
  if (welcomeHeading) {
    welcomeHeading.textContent = translations.home.bienvenida[lang];
  }
  
  if (quote) {
    quote.textContent = translations.home.cita[lang];
  }
  
  if (description) {
    description.textContent = translations.home.descripcion[lang];
  }
}

// Actualizar página About/Trayectoria
function updateAboutPage(lang) {
  // Actualizar todos los elementos con atributos data-i18n
  const elements = document.querySelectorAll('[data-i18n^="about."]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const parts = key.split('.');
    
    if (parts.length === 2 && translations[parts[0]] && translations[parts[0]][parts[1]]) {
      element.textContent = translations[parts[0]][parts[1]][lang];
    } else if (parts.length === 3 && translations[parts[0]] && translations[parts[0]][parts[1]] && translations[parts[0]][parts[1]][parts[2]]) {
      element.textContent = translations[parts[0]][parts[1]][parts[2]][lang];
    }
  });
  
  // Actualizar elementos de navegación
  updateNavigation(lang);
  
  // Actualizar footer
  updateFooter(lang);
}

// Actualizar página Gallery/Galería
function updateGalleryPage(lang) {
  // Actualizar todos los elementos con atributos data-i18n
  const elements = document.querySelectorAll('[data-i18n^="gallery."]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const parts = key.split('.');
    
    if (parts.length === 2 && translations[parts[0]] && translations[parts[0]][parts[1]]) {
      element.textContent = translations[parts[0]][parts[1]][lang];
    }
  });
  
  // Actualizar elementos de navegación
  updateNavigation(lang);
  
  // Actualizar footer
  updateFooter(lang);
}

// Actualizar página Exhibitions/Exposiciones
function updateExhibitionsPage(lang) {
  // Actualizar todos los elementos con atributos data-i18n
  const elements = document.querySelectorAll('[data-i18n^="exhibitions."]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const parts = key.split('.');
    
    if (parts.length === 2 && translations[parts[0]] && translations[parts[0]][parts[1]]) {
      element.textContent = translations[parts[0]][parts[1]][lang];
    }
  });
  
  // Actualizar elementos de navegación
  updateNavigation(lang);
  
  // Actualizar footer
  updateFooter(lang);
}

// Actualizar página Contact/Contacto
function updateContactPage(lang) {
  // Actualizar todos los elementos con atributos data-i18n
  const elements = document.querySelectorAll('[data-i18n^="contact."]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const parts = key.split('.');
    
    if (parts.length === 2 && translations[parts[0]] && translations[parts[0]][parts[1]]) {
      element.textContent = translations[parts[0]][parts[1]][lang];
    }
  });
  
  // Actualizar placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder^="contact."]');
  
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const parts = key.split('.');
    
    if (parts.length === 2 && translations[parts[0]] && translations[parts[0]][parts[1]]) {
      element.placeholder = translations[parts[0]][parts[1]][lang];
    }
  });
  
  // Actualizar elementos de navegación
  updateNavigation(lang);
  
  // Actualizar footer
  updateFooter(lang);
  
  // Actualizar mensaje de agradecimiento si existe
  const thankYouMessage = document.querySelector('.layout-content-container > p.text-[#8d5e75]');
  if (thankYouMessage) {
    thankYouMessage.textContent = translations.contact.agradecimiento[lang];
  }
}

// Actualizar footer
function updateFooter(lang) {
  const copyright = document.querySelector('footer p.text-[#886375]');
  if (copyright) {
    copyright.textContent = translations.footer.derechos[lang];
  }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  // Añadir evento click a los botones de cambio de idioma
  const langButtons = document.querySelectorAll('.language-toggle');
  langButtons.forEach(button => {
    button.addEventListener('click', toggleLanguage);
  });
  
  // Actualizar la página con el idioma guardado
  updatePageLanguage();
  updateLanguageButton();
});
