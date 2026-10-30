/* ------------------------------------------------------------------
   Spanish copy. Transcribed from Claude Design "Portfolio Redesign ES.dc.html".
   Same shape as copy.en.js; see the notes there.
   ------------------------------------------------------------------ */
COPY.es = {
  htmlLang: 'es-MX',
  numWords: ['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince'],
  ordinals: ['cero','primero','segundo','tercero','cuarto','quinto','sexto','séptimo','octavo','noveno','décimo','undécimo','duodécimo','decimotercero','decimocuarto','decimoquinto'],
  ordinalSuffix: 'º',

  titles: {
    home: 'Elias Cohen — Senior Product Manager',
    about: 'Sobre mí — Elias Cohen',
    process: 'Cómo trabajo — Elias Cohen',
    resume: 'CV — Elias Cohen',
    notFound: 'No encontrado — Elias Cohen',
    caseSuffix: ' — Elias Cohen'
  },

  nav: {
    items: [
      { key: 'home', label: 'Inicio' },
      { key: 'work', label: 'Proyectos' },
      { key: 'process', label: 'Cómo trabajo' },
      { key: 'about', label: 'Sobre mí' },
      { key: 'resume', label: 'CV' }
    ],
    cta: 'Contáctame',
    badge: 'Disponible',
    brandAria: 'Elias Cohen — inicio',
    menuAria: 'Menú',
    primaryAria: 'Principal',
    langAria: 'Idioma',
    langNames: { en: 'English', es: 'Español' }
  },

  footer: 'Elias Cohen · Senior Product Manager',

  marquee: ['Automatización', 'Integraciones enterprise', 'Funciones con IA', 'APIs', 'SQL', 'Discovery', 'Priorización'],

  words: ['fricción', 'trabajo manual', 'pasos de más', 'tareas repetitivas', 'idas y vueltas', 'parches'],

  dial: [
    { label: 'Proyectos', angle: -90, x: '50%', y: '-5%', page: 'work' },
    { label: 'Cómo trabajo', angle: 30, x: '97%', y: '77%', page: 'process' },
    { label: 'CV', angle: 150, x: '3%', y: '77%', page: 'resume' }
  ],

  hero: {
    eyebrow: 'Senior Product Manager · SaaS B2B · CDMX',
    h1: ['{pmYearsWordCap} años eliminando ', ' del software que la gente usa todos los días.'],
    p: 'Me especializo en lo que nadie ve, pero todos sufren cuando falla: integraciones, automatización de procesos y, más recientemente, reportes con IA. He trabajado en startups de la Ciudad de México y en una empresa SaaS enterprise. Antes de reunirme con ingeniería ya leí la documentación de la API, y mis queries de SQL los hago yo.',
    see: 'Ver proyectos',
    download: 'Descargar CV'
  },

  metricsAria: 'Cifras',
  metrics: [
    { count: 15, prefix: '', suffix: '%', accent: false, label: 'más adopción de automatizaciones en BetterCloud, después de replantear cómo se construían las integraciones' },
    { count: 35, prefix: '−', suffix: '%', accent: true, label: 'de tickets de soporte relacionados con flujos, al cambiar errores genéricos por diagnósticos claros' },
    { count: 30, prefix: '', suffix: '+', accent: false, label: 'integraciones con nuevas acciones de automatización (más de 10 en total)' },
    { count: 4500, prefix: '', suffix: '+', accent: false, label: 'usuarios en la app de súper que llevé de la idea al lanzamiento en iOS y Android' }
  ],

  work: {
    h2: 'Proyectos',
    meta: '{productCountWordCap} productos · {careerStartYear} → hoy',
    lede: 'Automatización para TI, datos de ventas, paquetería, limpieza comercial y súper a domicilio. Industrias muy distintas, pero en todas había un proceso manual que la gente ya daba por hecho. Ahí es donde suelo empezar.',
    more: 'Ver caso →',
    fillerKicker: '¿Buscas PM?',
    fillerTitle: 'Tu producto podría ser el {nextProductOrdinal}.',
    fillerCta: 'Contáctame',
    fillerResume: 'CV'
  },

  exp: {
    h2: 'Experiencia',
    lede: '{productCountWordCap} productos en {pmYearsWord} años. Y antes, un año como becario de TI, que es donde aprendí a entender cómo funciona un sistema antes de ponerme a escribir requerimientos.'
  },

  toolkit: {
    eyebrow: 'Herramientas',
    h2: ['Sé lo suficiente de tecnología para ', 'aportar', ' en serio.'],
    legend: 'Uso diario',
    education: 'Formación',
    degree: 'Ciencias de la Computación',
    school: 'Universidad Iberoamericana · {gradYear}',
    languages: 'Idiomas',
    langRows: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'C1 / C2' }
    ],
    based: 'Vivo en',
    city: 'Ciudad de México'
  },

  contact: {
    eyebrow: 'Hablemos',
    h2: ['¿Tu equipo sigue haciendo ', 'a mano', ' algo que debería resolver el software?'],
    linkedin: 'LinkedIn',
    city: 'Ciudad de México'
  },

  about: {
    eyebrow: 'Sobre mí',
    h1: ['En las juntas de planeación, alguien tiene que hablar por el ', 'cliente', '. Casi siempre me toca a mí.'],
    lede: 'Llevo {pmYearsWord} años como PM y me ha tocado ver muchas discusiones de roadmap. Casi siempre gana quien tiene más información, y el cliente rara vez tiene un lugar en la mesa.',
    lead: 'Para mí, el trabajo de PM se resume en algo bastante concreto: que la gente que usa el producto tenga voz cuando decidimos qué sigue.',
    prose: [
      'Eso implica leer mucho. Tickets de soporte, notas de llamadas, solicitudes de clientes. Si diez clientes piden diez cosas parecidas, prefiero encontrar el problema que tienen en común antes de que alguien escriba una línea de código.',
      'También implica explicar el porqué de cada decisión, aunque parezca de más. Cuando ingeniería entiende para qué estamos construyendo algo, toma mejores decisiones técnicas y me avisa más rápido si me equivoqué.',
      'Mi trabajo está en medio de diseño, ingeniería y negocio, y cada área jala para su lado. Cuando no hay acuerdo, lo que necesita el cliente es lo que decide.'
    ],
    principles: [
      { n: '01', title: 'Resolver el problema de fondo', body: 'Una solicitud aislada es un dato. Si se repite, conviene construir algo que resuelva el caso para todos los clientes que lo van a pedir después.' },
      { n: '02', title: 'Entender la parte técnica', body: 'Leo la documentación de las APIs y hago mis propios queries. Así las decisiones técnicas se toman junto con ingeniería y no a sus espaldas.' },
      { n: '03', title: 'Priorizar con datos', body: 'Un modelo de puntuación no toma la decisión por ti, pero evita que la tome quien habla más fuerte en la junta.' }
    ],
    outroKicker: 'Un poco más de mí',
    outroTitle: 'Vivo en la Ciudad de México y estudié Ciencias de la Computación en la Ibero. Por eso sigo leyendo la documentación de la API antes de cada junta, cosa que los ingenieros siempre agradecen.',
    cta: 'Ver proyectos'
  },

  caseUi: {
    back: '← Todos los proyectos',
    next: 'Siguiente',
    outcomesAria: 'Resultados',
    chaptersAria: 'Capítulos'
  },

  process: {
    eyebrow: 'Cómo trabajo',
    h1: ['La mitad del trabajo es decidir qué ', 'no', ' hacer.'],
    lede: '{stageCountWordCap} etapas y un modelo de priorización. La regla más importante es sencilla: ingeniería entiende el porqué antes de recibir cualquier ticket.',
    trackAria: 'El proceso',
    trackKicker: 'El proceso',
    scoringEyebrow: 'Cómo priorizo',
    scoringH2: 'Las discusiones del backlog se resuelven con números.',
    scoringP: 'Cuando llegué a BetterCloud, la priorización dependía mucho de la intuición. Armé un modelo con pesos por criterio para que lo que se gana y lo que se sacrifica en cada decisión quedara a la vista. Ahora la conversación es sobre los pesos, y es mucho más productiva. Hoy lo usan varios PMs de la empresa.',
    scoringNote: 'El modelo no decide por ti. Lo que hace es que el desacuerdo quede claro.',
    rulesKicker: 'Con ingeniería',
    rulesH2: 'Me meto a fondo en lo técnico y luego dejo trabajar al equipo.'
  },

  stages: [
    { n: '01', title: 'Escuchar', body: 'Tickets, llamadas con analistas, reuniones con clientes y el historial de solicitudes. Lo reviso todo junto, porque casi siempre apunta a lo mismo.', out: 'Resultado: un mapa real de lo que piden los clientes' },
    { n: '02', title: 'Encontrar el patrón', body: 'Si diez tickets piden la misma acción, probablemente hay un hueco en la plataforma. Se resuelve el hueco y dejan de llegar los tickets.', out: 'Resultado: el problema, bien definido' },
    { n: '03', title: 'Priorizar', body: 'Cada idea pasa por el modelo de puntuación antes de que alguien se enamore de una solución.', out: 'Resultado: una lista priorizada que puedo justificar' },
    { n: '04', title: 'Construir con ingeniería', body: 'El equipo conoce el porqué antes de que exista el ticket. Llego con la API y los datos revisados, y la decisión técnica la tomamos juntos.', out: 'Resultado: requerimientos que no se caen a la primera' },
    { n: '05', title: 'Medir', body: 'Adopción, volumen de tickets, pedidos. Si el número no se mueve, quiero entender por qué antes de pasar a lo siguiente.', out: 'Resultado: el siguiente problema a resolver' }
  ],

  criteria: [
    { name: 'Impacto en clientes', pct: 30, note: 'A cuántas cuentas afecta y qué tanto' },
    { name: 'Potencial de adopción', pct: 25, note: '¿De verdad lo van a usar?' },
    { name: 'Esfuerzo', pct: 20, note: 'Cuánto le cuesta a ingeniería, siendo realistas' },
    { name: 'Alineación estratégica', pct: 15, note: '¿Mejora la plataforma o solo una función?' },
    { name: 'Riesgo', pct: 10, note: 'Qué se puede romper y a quién le afecta' }
  ],

  rules: [
    { n: '01', title: 'Primero el porqué', body: 'El contexto lo explico en persona. Un ticket en Jira no es el lugar para entender por qué hacemos algo.' },
    { n: '02', title: 'Llegar preparado', body: 'Antes de la junta técnica ya revisé la API y los datos.' },
    { n: '03', title: 'El cómo es de ellos', body: 'Yo respondo por el problema y el resultado. La implementación la decide ingeniería y no me meto.' },
    { n: '04', title: 'Una sola persona decide', body: 'En La Frutería fui el único PM de tres productos. Nunca hubo duda de quién tomaba las decisiones, y eso ahorró más tiempo que cualquier proceso.' }
  ],

  tools: [
    { name: 'APIs', core: true },
    { name: 'SQL', core: true },
    { name: 'Cloud SQL', core: false },
    { name: 'Desarrollo de funciones con IA', core: true },
    { name: 'Figma', core: true },
    { name: 'Tableau', core: false },
    { name: 'Fullstory', core: false },
    { name: 'Analítica', core: true },
    { name: 'Notion', core: false }
  ],

  resume: {
    barLabel: 'CV · imprímelo o guárdalo en PDF',
    print: 'Imprimir / Guardar PDF',
    outroTitle: ['Olvídate de ', 'copiar y pegar.', ''],
    outroSub: 'Un clic y es tuyo para imprimir o compartir',
    title: 'Senior Product Manager',
    linkedin: 'LinkedIn',
    city: 'Ciudad de México',
    summaryLabel: 'Perfil',
    summary: 'Senior Product Manager con {pmYearsPlus} años de experiencia en SaaS B2B, especializado en automatización de procesos, integraciones enterprise y funciones con IA. He trabajado desde startups en etapa temprana hasta empresas enterprise, con foco en reducir el trabajo manual y aumentar la adopción. Colaboro de cerca con ingeniería en APIs, SQL y decisiones de producto con IA.',
    experienceLabel: 'Experiencia',
    skillsLabel: 'Habilidades',
    skills: ['APIs', 'SQL', 'Cloud SQL', 'Tableau', 'Figma', 'Fullstory', 'Notion', 'Desarrollo de funciones con IA', 'Analítica'],
    educationLabel: 'Formación',
    degree: 'Ciencias de la Computación',
    school: 'Universidad Iberoamericana · {gradYear}',
    languages: 'Idiomas · Español (nativo) | Inglés (C1/C2)',
    jobs: [
      { title: 'Product Manager, BetterCloud', meta: 'dic 2023 – actual · Ciudad de México', bullets: [
        'Replanteé la forma de construir integraciones: de desarrollos a la medida para un cliente a soluciones con cobertura para toda la plataforma. Analicé las necesidades de toda la base de clientes, lancé más de 10 acciones de automatización en más de 30 integraciones y aumenté ~15% la adopción de automatizaciones.',
        'Resolví un problema de fondo en el manejo de identidades: los flujos no reconocían a usuarios con correos secundarios. Rediseñé la lógica para unir perfiles y agregué controles manuales para administradores, con lo que se cerró uno de los problemas más recurrentes en soporte.',
        'Cambié los mensajes de error genéricos por diagnósticos claros que explican qué falló y cómo resolverlo. Los tickets de soporte relacionados con flujos bajaron ~35%.',
        'Actualmente desarrollo una capa de reportes con IA que permite a los equipos de TI consultar datos de cumplimiento, ROI y adopción en lenguaje natural. En beta con clientes enterprise.',
        'Diseñé un modelo de puntuación ponderado para priorizar el roadmap, que reemplazó un proceso basado principalmente en la intuición. Hoy lo usan varios PMs de la organización.'
      ]},
      { title: 'Product Manager, LeadGenius', meta: 'oct 2022 – sep 2023 · Ciudad de México · Promovido desde Jr. PM', bullets: [
        'Promovido de Jr. PM a PM en menos de un año. Pasé de facilitar ceremonias ágiles a ser responsable de los PRDs, definir el enfoque técnico con ingeniería y validar el producto con stakeholders.',
        'Responsable de la extensión de navegador, una herramienta multiplataforma que llevaba perfiles de prospectos desde LinkedIn y los principales CRMs a campañas activas.'
      ]},
      { title: 'Product Manager, La Frutería', meta: 'jul 2020 – oct 2022 · Ciudad de México · De generalista a PM', bullets: [
        'Llevé una app de súper a domicilio de la idea al lanzamiento en iOS y Android. Creció a más de 4,500 usuarios con mejoras continuas basadas en comentarios de clientes.',
        'Detecté problemas graves de UX en el diseño original (botones cortados, flujos rotos, sin identidad visual). Diseñé un prototipo completo en Figma, lo validé con usuarios frecuentes y se lo presenté al fundador. El rediseño se implementó y aumentó ~20% la creación de pedidos.',
        'Único PM y responsable de UX en 3 productos al mismo tiempo: una app de súper a domicilio, una plataforma web de servicios de limpieza y una app de paquetería. Contacto principal con ingeniería, con decisiones técnicas además de las de producto y diseño.',
        'Rediseñé el sitio del servicio de limpieza e integré un cotizador en línea, lo que eliminó las idas y vueltas manuales en el proceso de venta.'
      ]}
    ]
  },

  error: {
    eyebrow: 'Error 404',
    h1: ['Esta página nunca ', 'salió', ' a producción.'],
    p: 'Se quedó en discovery o la sacaron del roadmap. Lo demás está en el inicio.',
    back: 'Ir al inicio'
  },

  studies: [
    {
      key: 'bettercloud', name: 'BetterCloud', url: 'bettercloud.com', dates: 'dic 2023 – actual',
      role: 'Product Manager',
      teaser: 'Cambié la forma en que se construían las integraciones y logré que los flujos con error expliquen qué pasó y cómo arreglarlo.',
      context: 'BetterCloud ayuda a los equipos de TI a administrar todas las aplicaciones SaaS de su empresa: usuarios, flujos y datos en un solo lugar. Mi área es la base sobre la que los clientes automatizan su operación: gestión de usuarios, flujos de trabajo y las integraciones que los conectan.',
      outcomes: [
        { value: '~15%', label: 'más adopción de automatizaciones' },
        { value: '−35%', label: 'de tickets de soporte relacionados con flujos' },
        { value: '30+', label: 'integraciones con nuevas acciones' }
      ],
      chapters: [
        { date: '2024', title: 'Integraciones pensadas como plataforma', body: [
          'Cada integración se construía según llegaba la solicitud: un cliente la pedía, se hacía la acción y se cerraba el ticket. Analicé qué acciones necesitaba toda la base de clientes y convertí esa lista de pendientes en un mapa de cobertura.',
          'Lanzamos más de 10 acciones de automatización en más de 30 integraciones. La adopción creció alrededor de 15% y el equipo de ingeniería dejó de mantener tantos desarrollos a la medida.'
        ]},
        { date: '2024', title: 'Rediseño del manejo de identidades', body: [
          'Cuando un usuario tenía un correo secundario, los flujos no lo reconocían. La automatización se saltaba justo a la persona para la que estaba pensada, sin avisarle a nadie. Era de los problemas más recurrentes en soporte.',
          'Rediseñé la lógica para unir perfiles y agregué controles manuales para los administradores. Ahora pueden corregir los datos ellos mismos, sin abrir un ticket.'
        ]},
        { date: '2025', title: 'Errores que sí explican qué hacer', body: [
          'Cuando un flujo se saltaba una acción, el cliente veía un error genérico que no le servía de nada. Rehicimos el manejo de errores a nivel de cada acción, y ahora cada caso muestra un diagnóstico claro: qué pasó y cómo solucionarlo.',
          'Los tickets de soporte relacionados con flujos bajaron cerca de 35%. Los clientes empezaron a confiar en los reportes en vez de escalarlos.'
        ]},
        { date: 'En beta', title: 'AI Admin Insights', body: [
          'Una capa de reportes con IA para equipos de TI. Pueden preguntar sobre cumplimiento, ROI y adopción como le preguntarían a una persona, y obtienen reportes personalizables y recomendaciones de integraciones.',
          'Está en beta con clientes enterprise. La meta es que los líderes de TI y seguridad usen BetterCloud para tomar decisiones, además de automatizar su operación.'
        ]},
        { date: 'Continuo', title: 'Priorizar con un modelo y no con intuición', body: [
          'En el backlog se discutía mucho y se medía poco. Diseñé un modelo de puntuación ponderado para priorizar el roadmap, con los pros y contras de cada decisión por escrito.',
          'Hoy lo usan otros PMs de la organización de producto.'
        ]}
      ]
    },
    {
      key: 'leadgenius', name: 'LeadGenius', url: 'leadgenius.com', dates: 'oct 2022 – sep 2023',
      role: 'Jr. Product Manager → Product Manager',
      teaser: 'Estuve a cargo de la extensión de navegador que extrae datos de prospectos desde LinkedIn y los principales CRMs. Entré como Jr. PM y en menos de un año ya era responsable de los PRDs.',
      context: 'LeadGenius le da a los equipos de ventas B2B los datos de contactos y empresas que alimentan su pipeline. Llegué cuando el producto estaba en beta y lo único que importaba era que funcionara bien. Me fui como PM de una de sus herramientas más usadas.',
      outcomes: [
        { value: '1 año', label: 'para pasar de Jr. PM a PM' },
        { value: 'Beta → GA', label: 'durante la etapa de estabilización' },
        { value: '2 fuentes', label: 'LinkedIn y los principales CRMs en una sola extensión' }
      ],
      chapters: [
        { date: 'oct 2022', title: 'Jr. PM: una beta a prueba', body: [
          'Había mucha competencia y seguíamos en beta, así que la confiabilidad era nuestro principal argumento. Mi trabajo era detectar fallas antes de que las vieran los clientes.',
          'Definí las métricas que seguía el equipo y diseñé un dashboard para ver el estado del producto de un vistazo. Eso redujo el tiempo para detectar y resolver problemas.'
        ]},
        { date: 'jul 2023', title: 'PM: a cargo de la extensión', body: [
          'Me promovieron antes de cumplir el año. Pasé de facilitar las ceremonias ágiles a escribir los PRDs, definir el enfoque técnico con ingeniería y validar el producto con stakeholders.',
          'Quedé a cargo de la extensión de navegador, que llevaba perfiles de prospectos desde LinkedIn y los principales CRMs directo a las campañas activas.',
          'También hice que las reuniones con clientes y analistas alimentaran el roadmap. Antes se veían como algo exclusivo de ventas.'
        ]}
      ]
    },
    {
      key: 'sender', name: 'Sender', url: 'sender.mx', dates: 'dic 2021 – oct 2022',
      role: 'Project Manager → Product Manager',
      teaser: 'Recibí una plataforma de paquetería de marca blanca y la convertí en un producto con identidad y roadmap propios.',
      context: 'Sender es una plataforma de paquetería donde cada envío se puede rastrear en todo momento. Cuando llegué, funcionaba sobre una solución de marca blanca: las reglas las ponía alguien más y el producto no tenía personalidad.',
      outcomes: [
        { value: 'Producto propio', label: 'antes era marca blanca' },
        { value: '3 roles', label: 'proyecto, producto y UI/UX al mismo tiempo' },
        { value: 'Rediseño completo', label: 'de principio a fin' }
      ],
      chapters: [
        { date: 'dic 2021', title: 'Trabajar con lo que había', body: [
          'No construimos la plataforma, la heredamos. Lo primero fue entender qué se podía y qué no se podía hacer con la base de marca blanca, y planear el producto a partir de esos límites.',
          'Con eso claro, la planeación y los recursos se enfocaron en que los clientes reconocieran a Sender como marca, y no solo como un servicio que funcionaba.'
        ]},
        { date: 'ene 2022', title: 'Diseñar para diferenciarnos', body: [
          'Todos los competidores se veían igual. Además de la gestión del proyecto, tomé el diseño de UI y UX y probé los flujos más usados: cotizar, rastrear y volver a enviar.',
          'El reto era que se viera mejor sin volverse más complicado. Subieron tanto el uso como la satisfacción de los clientes.'
        ]},
        { date: 'feb 2022', title: 'Product manager', body: [
          'Pasé a product management. Ingeniería, diseño y marketing trabajaban con un mismo roadmap, y yo decidía qué salía y cuándo.'
        ]}
      ]
    },
    {
      key: 'selimex', name: 'Selimex', url: 'selimex.com.mx', dates: 'jul 2020 – oct 2022',
      role: 'UI & UX Designer → Project Manager',
      teaser: 'Diseñé un cotizador en línea para una empresa de limpieza comercial. Los clientes obtienen su precio sin tener que esperar a un vendedor.',
      context: 'Selimex es una empresa de limpieza comercial en la Ciudad de México. Su sitio tenía mucha información, pero ninguna forma de cotizar. Cada solicitud terminaba en llamadas y correos de ida y vuelta.',
      outcomes: [
        { value: 'Cotización inmediata', label: 'sin esperar a ventas' },
        { value: 'La primera', label: 'en el mercado de limpieza comercial en México' },
        { value: 'Diseño y ejecución', label: 'ambos a mi cargo' }
      ],
      chapters: [
        { date: 'jul 2020', title: 'El cotizador', body: [
          'Diseñé un cotizador en línea donde el cliente indica superficies, frecuencia y tamaño del espacio, y recibe su precio al momento.',
          'La primera versión era muy básica. Con los datos de uso fuimos ajustando cada versión, hasta que el cotizador se volvió lo más importante del sitio.'
        ]},
        { date: 'mar 2021', title: 'A cargo de la transformación digital', body: [
          'Como project manager llevé todo el proyecto digital. Prioricé un backlog largo, coordiné las entregas y cuidé que el trabajo sirviera para lograr resultados y no solo para palomear pendientes.'
        ]}
      ]
    },
    {
      key: 'la_fruteria', name: 'La Frutería', url: 'lafruteria.app', dates: 'jul 2020 – oct 2022',
      role: 'Associate PM → Product Manager',
      teaser: 'Llevé una app de súper a domicilio de la idea al lanzamiento en iOS y Android. Después propuse un rediseño que aumentó los pedidos cerca de 20%.',
      context: 'La Frutería entrega súper el mismo día en la Ciudad de México. Cuando llegué había una base, pero faltaba estructura. Terminé siendo el único PM y responsable de UX de tres productos a la vez.',
      outcomes: [
        { value: '4,500+', label: 'usuarios en la app' },
        { value: '~20%', label: 'más pedidos después del rediseño' },
        { value: '3 productos', label: 'súper, limpieza y paquetería con un solo PM' }
      ],
      chapters: [
        { date: 'jul 2020', title: 'De la idea al lanzamiento', body: [
          'Reduje la lista de funcionalidades a lo esencial y lanzamos el MVP en iOS y Android en enero de 2021.',
          'Después del lanzamiento, el backlog se volvió roadmap. Cada versión tenía que traer algo que los usuarios notaran.'
        ]},
        { date: 'mar 2021', title: 'El rediseño que subió los pedidos', body: [
          'El diseño original tenía problemas serios: botones cortados, flujos que no terminaban y cero identidad visual. Hice un prototipo completo en Figma desde cero, lo probé con los usuarios más frecuentes y se lo presenté al fundador.',
          'Se implementó y la creación de pedidos subió alrededor de 20%. La app superó los 4,500 usuarios, siempre mejorando con lo que nos decían los clientes.'
        ]},
        { date: '2021 – 2022', title: 'Único PM en tres productos', body: [
          'Una app de súper, una plataforma web de servicios de limpieza y una app de paquetería. En los tres fui el contacto principal de ingeniería y tomé decisiones técnicas además de las de producto y diseño.'
        ]}
      ]
    }
  ],

  timeline: [
    { key: 'bettercloud', dates: 'dic 2023 – actual', employer: 'BetterCloud', role: 'Product Manager', note: 'Integraciones y automatización para equipos de TI. Actualmente llevo una beta de reportes con IA con clientes enterprise.' },
    { key: 'leadgenius', dates: 'oct 2022 – sep 2023', employer: 'LeadGenius', role: 'Jr. Product Manager → Product Manager', note: 'A cargo de la extensión que lleva perfiles de LinkedIn y CRMs a las campañas. Me promovieron a PM antes de cumplir el año.' },
    { key: 'sender', dates: 'dic 2021 – oct 2022', employer: 'Sender', role: 'Project Manager → Product Manager', note: 'Recibí una plataforma de paquetería de marca blanca y le di identidad y roadmap propios.' },
    { key: 'selimex', dates: 'jul 2020 – oct 2022', employer: 'Selimex', role: 'UI & UX Designer → Project Manager', note: 'Cotizador en línea para una empresa de limpieza comercial. Fue el primero en su mercado en México.' },
    { key: 'la_fruteria', dates: 'jul 2020 – oct 2022', employer: 'La Frutería', role: 'Associate PM → Product Manager', note: 'App de súper a domicilio, desde la idea hasta el lanzamiento. Superó los 4,500 usuarios y un rediseño que propuse aumentó los pedidos cerca de 20%.' },
    { dates: 'dic 2018 – dic 2019', employer: 'Grupo GDI', role: 'Becario de TI', note: 'Aquí entendí cómo funcionan los sistemas que sostienen a una empresa y empecé a hablar el idioma de ingeniería.' }
  ]
};
