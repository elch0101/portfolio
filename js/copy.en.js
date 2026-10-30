/* ------------------------------------------------------------------
   English copy. Transcribed from Claude Design "Portfolio Redesign.dc.html".
   Strings may contain {placeholders} filled from vals() in app.js
   (pmYearsWord, pmYearsWordCap, pmYearsPlus, careerStartYear, gradYear,
   productCountWord, productCountWordCap, nextProductOrdinal,
   stageCountWordCap). Three-part arrays are [before, accented word, after].
   No HTML in strings; templates escape everything.
   ------------------------------------------------------------------ */
COPY.en = {
  htmlLang: 'en',
  numWords: ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen'],
  ordinals: ['zeroth','first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth'],
  ordinalSuffix: 'th',

  titles: {
    home: 'Elias Cohen — Senior Product Manager',
    about: 'About — Elias Cohen',
    process: 'How I work — Elias Cohen',
    resume: 'Résumé — Elias Cohen',
    notFound: 'Not found — Elias Cohen',
    caseSuffix: ' — Elias Cohen'
  },

  nav: {
    items: [
      { key: 'home', label: 'Home' },
      { key: 'work', label: 'Work' },
      { key: 'process', label: 'How I work' },
      { key: 'about', label: 'About' },
      { key: 'resume', label: 'Résumé' }
    ],
    cta: 'Get in touch',
    badge: 'Open to roles',
    brandAria: 'Elias Cohen — home',
    menuAria: 'Menu',
    primaryAria: 'Primary',
    langAria: 'Language',
    langNames: { en: 'English', es: 'Español' }
  },

  footer: 'Elias Cohen · Senior Product Manager',

  marquee: ['Workflow automation', 'Enterprise integrations', 'AI features', 'APIs', 'SQL', 'Discovery', 'Prioritization'],

  words: ['friction', 'guesswork', 'busywork', 'workarounds', 'back-and-forth', 'dead ends'],

  // Hero dial chips: angle = where the red arc points on hover; x/y = chip anchor on the circle.
  dial: [
    { label: 'The work', angle: -90, x: '50%', y: '-5%', page: 'work' },
    { label: 'How I work', angle: 30, x: '97%', y: '77%', page: 'process' },
    { label: 'Résumé', angle: 150, x: '3%', y: '77%', page: 'resume' }
  ],

  hero: {
    eyebrow: 'Senior Product Manager · B2B SaaS · Mexico City',
    h1: ['{pmYearsWordCap} years cutting the ', ' out of the software people use.'],
    p: 'I work on the plumbing most people never see: integrations, workflow automation and, lately, AI reporting. I\'ve done it at small startups in Mexico City and at an enterprise SaaS company. I read the API docs before the engineering meeting and write my own SQL.',
    see: 'See the work',
    download: 'Download résumé'
  },

  // Numbers strip. `count` animates from 0; prefix/suffix wrap it.
  metricsAria: 'Numbers',
  metrics: [
    { count: 15, prefix: '', suffix: '%', accent: false, label: 'growth in automation adoption after the integrations overhaul at BetterCloud' },
    { count: 35, prefix: '−', suffix: '%', accent: true, label: 'workflow-related support tickets, after replacing generic errors with real diagnostics' },
    { count: 30, prefix: '', suffix: '+', accent: false, label: 'integrations that gained new automation actions, 10+ in all' },
    { count: 4500, prefix: '', suffix: '+', accent: false, label: 'people using the grocery app I took from idea to v1 on iOS and Android' }
  ],

  work: {
    h2: 'Selected work',
    meta: '{productCountWordCap} products · {careerStartYear} → now',
    lede: 'IT automation, sales data, parcel logistics, commercial cleaning and groceries. Each one had a manual step that everyone had stopped noticing. That\'s usually where I start.',
    more: 'Read the story →',
    fillerKicker: 'Hiring?',
    fillerTitle: 'The {nextProductOrdinal} one is still open.',
    fillerCta: 'Get in touch',
    fillerResume: 'Résumé'
  },

  exp: {
    h2: 'Experience',
    lede: '{productCountWordCap} products in {pmYearsWord} years. Before those, an IT internship where I picked up the habit of looking at the system before writing the spec.'
  },

  toolkit: {
    eyebrow: 'Toolkit',
    h2: ['Close enough to the build to be ', 'useful', '.'],
    legend: 'Use it every day',
    education: 'Education',
    degree: 'B.S. Computer Science',
    school: 'Universidad Iberoamericana · {gradYear}',
    languages: 'Languages',
    langRows: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'C1 / C2' }
    ],
    based: 'Based in',
    city: 'Mexico City'
  },

  contact: {
    eyebrow: 'Let\'s talk',
    h2: ['Is your team still doing something ', 'by hand', ' that software should do?'],
    linkedin: 'LinkedIn',
    city: 'Mexico City, MX'
  },

  about: {
    eyebrow: 'About me',
    h1: ['Someone has to argue for the ', 'customer', ' in planning. Usually that\'s me.'],
    lede: 'I\'ve been a PM for {pmYearsWord} years. The roadmap arguments I\'ve watched were usually won by whoever had the most context, and the customer is almost never in the meeting.',
    lead: 'After {pmYearsWord} years in product, my view of the job is fairly narrow. I\'m there to make sure the people using the product get a vote when we decide what to build next.',
    prose: [
      'In practice that means a lot of reading. Support tickets, call notes, the request log. When ten customers ask for ten slightly different things, I want to find the one problem underneath before anyone writes code.',
      'It also means sharing more of my reasoning than feels necessary. Engineers who know why we\'re building something make better calls on how, and they push back sooner when I\'ve got it wrong.',
      'I sit between design, engineering and the business, and each of them wants something different from me on any given week. When they disagree, the customer is my tiebreaker.'
    ],
    principles: [
      { n: '01', title: 'Build for the pattern', body: 'One request is a data point. When it shows up a second time, build the version that covers everyone who\'ll ask next.' },
      { n: '02', title: 'Learn the stack', body: 'I read the API docs and run my own queries, so technical tradeoffs get decided with engineering instead of handed to them.' },
      { n: '03', title: 'Score it, then argue', body: 'A weighted score won\'t make the decision for you. It does keep the loudest person in the room from making it.' }
    ],
    outroKicker: 'Outside the roadmap',
    outroTitle: 'I live in Mexico City and studied computer science at Universidad Iberoamericana. I still open the API docs before the meeting, which engineers tend to appreciate.',
    cta: 'See the work'
  },

  caseUi: {
    back: '← All work',
    next: 'Next',
    outcomesAria: 'Outcomes',
    chaptersAria: 'Chapters'
  },

  process: {
    eyebrow: 'How I work',
    h1: ['Most of the job is deciding what ', 'not', ' to build.'],
    lede: '{stageCountWordCap} stages and a scoring model. The rule I care about most is simpler: engineering hears the reasoning before they ever see a ticket.',
    trackAria: 'The track',
    trackKicker: 'The stages',
    scoringEyebrow: 'The scoring model',
    scoringH2: 'Every backlog argument becomes a number.',
    scoringP: 'When I got to BetterCloud, prioritization mostly ran on instinct. I built a weighted model so the tradeoffs were written down where everyone could see them. Now we argue about the weights, which is a far more useful argument. Several PMs in the org use it.',
    scoringNote: 'It won\'t decide for you. It makes the disagreement specific.',
    rulesKicker: 'Working with engineering',
    rulesH2: 'I learn enough to be useful, then get out of the way.'
  },

  stages: [
    { n: '01', title: 'Read everything', body: 'Support tickets, analyst calls, customer briefings and the request log all go in one pile. Five inboxes are usually telling the same story.', out: 'Output: a map of what people are really asking for' },
    { n: '02', title: 'Find the pattern', body: 'Ten tickets asking for the same action usually point to one gap in the platform. Close the gap and the tickets stop.', out: 'Output: the problem, in one sentence' },
    { n: '03', title: 'Score it', body: 'Every candidate goes through the weighted model before anyone gets attached to a solution. The tradeoff is on the table from the start.', out: 'Output: a ranked list I can defend' },
    { n: '04', title: 'Build it with them', body: 'Engineering hears the why before the ticket exists. I show up having read the API docs and looked at the data, so we make the technical call together.', out: 'Output: a spec that holds up once building starts' },
    { n: '05', title: 'Check the number', body: 'Adoption, ticket volume, order creation. If the number doesn’t move, I want to know why before planning anything else.', out: 'Output: the next problem' }
  ],

  criteria: [
    { name: 'Customer impact', pct: 30, note: 'How many accounts, and how badly' },
    { name: 'Adoption potential', pct: 25, note: 'Will people use it, or will it just ship' },
    { name: 'Effort', pct: 20, note: 'Engineering cost, estimated honestly' },
    { name: 'Strategic fit', pct: 15, note: 'Does it move the platform, or only the feature' },
    { name: 'Risk', pct: 10, note: 'What breaks, and who notices' }
  ],

  rules: [
    { n: '01', title: 'Reasoning before ticket', body: 'Engineers hear the why from me in conversation. A Jira description is a bad place to learn it.' },
    { n: '02', title: 'Read the docs first', body: 'By the time the technical conversation starts, I’ve already looked at the API and the data.' },
    { n: '03', title: 'Their call on the how', body: 'I own the problem and the outcome. How it gets built is their decision, and I don’t relitigate it.' },
    { n: '04', title: 'One point of contact', body: 'At La Frutería I was the only PM on three products. Nobody had to wonder who made the call, and that saved more time than any process.' }
  ],

  tools: [
    { name: 'APIs', core: true },
    { name: 'SQL', core: true },
    { name: 'Cloud SQL', core: false },
    { name: 'AI feature development', core: true },
    { name: 'Figma', core: true },
    { name: 'Tableau', core: false },
    { name: 'Fullstory', core: false },
    { name: 'Analytics', core: true },
    { name: 'Notion', core: false }
  ],

  resume: {
    barLabel: 'Résumé · print or save as PDF',
    print: 'Print / save PDF',
    title: 'Senior Product Manager',
    linkedin: 'LinkedIn',
    city: 'Mexico City, Mex',
    summaryLabel: 'Summary',
    summary: 'Senior Product Manager, {pmYearsPlus} years in B2B SaaS, focused on workflow automation, enterprise integrations and AI features. Experience ranges from early-stage startups to enterprise. Consistent record of removing manual work and raising adoption. Works directly with engineering on APIs, SQL and AI product decisions.',
    experienceLabel: 'Experience',
    skillsLabel: 'Skills',
    skills: ['APIs', 'SQL', 'Cloud SQL', 'Tableau', 'Figma', 'Fullstory', 'Notion', 'AI feature development', 'Analytics'],
    educationLabel: 'Education',
    degree: 'B.S. Computer Science',
    school: 'Universidad Iberoamericana · {gradYear}',
    languages: 'Languages · Spanish (native) | English (C1/C2)',
    jobs: [
      { title: 'Product Manager, BetterCloud', meta: 'Dec 2023 – Present · Mexico City', bullets: [
        'Overhauled how integrations were built: moved from one-off customer requests to full-coverage platform builds. Researched action needs across the customer base, shipped 10+ automation actions across 30+ integrations, and drove ~15% growth in automation adoption.',
        'Fixed a systemic identity matching bug where users with secondary emails weren’t recognized by workflows. Rearchitected the merge logic and added manual admin controls, resolving one of the most persistent pain points in the support queue.',
        'Replaced generic error messages with specific, admin-readable diagnostics that told customers what went wrong and how to fix it. Reduced workflow-related support tickets by ~35%.',
        'Building an AI reporting layer for IT teams that lets users query compliance, ROI, and adoption data through natural language. Currently in beta with enterprise customers.',
        'Built a weighted scoring model for roadmap prioritization, replacing a largely gut-feel process. Adopted by multiple PMs across the product org.'
      ]},
      { title: 'Product Manager, LeadGenius', meta: 'Oct 2022 – Sep 2023 · Mexico City · Promoted from Jr. PM', bullets: [
        'Promoted from Jr. PM to PM within the year, with scope expanding from agile facilitation to owning PRDs, working directly with engineering on technical approach, and validating product fit with stakeholders.',
        'Owned the browser extension, a cross-platform tool that pulled prospect profiles from LinkedIn and major CRMs into active campaigns.'
      ]},
      { title: 'Product Manager, La Frutería', meta: 'Jul 2020 – Oct 2022 · Mexico City · Began as generalist, grew into PM', bullets: [
        'Took a grocery delivery mobile app from idea to v1 launch on iOS and Android, growing it to 4,500+ users and iterating continuously based on customer feedback.',
        'Found serious UX issues in the app’s original design: buttons cut off, broken flows, no visual identity. Built a complete Figma prototype from scratch, validated it with heavy users, and pitched it to the founder. The redesign shipped and drove a ~20% increase in order creation.',
        'Acted as the sole PM and UX resource across 3 simultaneous products: a mobile grocery delivery app, a web-based cleaning service platform, and a parcel delivery app. Primary point of contact with engineering, making calls on technical approach alongside product and design decisions.',
        'Redesigned the cleaning service site to include a dynamic self-serve quote generator, removing manual back-and-forth from the sales process.'
      ]}
    ]
  },

  error: {
    eyebrow: 'Error 404',
    h1: ['This page never ', 'shipped', '.'],
    p: 'Either it\'s still in discovery or it got cut in planning. The rest of the site is back home.',
    back: 'Back home'
  },

  // Case studies. `key` doubles as the URL hash (#bettercloud). Order = display order.
  // Keys must match across languages (the hash is language-independent).
  studies: [
    {
      key: 'bettercloud', name: 'BetterCloud', url: 'bettercloud.com', dates: 'Dec 2023 – Present',
      role: 'Product Manager',
      teaser: 'Took integrations from one-off customer requests to full-coverage builds, and made failed workflows explain what went wrong.',
      context: 'BetterCloud is a SaaS management platform. IT teams use it to manage users, workflows and data across every app their company pays for. I work on the layer customers automate on top of: user management, workflows and the integrations that connect them.',
      outcomes: [
        { value: '~15%', label: 'growth in automation adoption' },
        { value: '−35%', label: 'workflow-related support tickets' },
        { value: '30+', label: 'integrations with new automation actions' }
      ],
      chapters: [
        { date: '2024', title: 'Integrations at platform scale', body: [
          'Integrations were built in the order requests came in. One customer asked, one action got built, one ticket closed. I went through what customers needed across the whole base and turned the request queue into a coverage map.',
          'We shipped 10+ automation actions across 30+ integrations. Automation adoption grew about 15%, and engineering spent a lot less time maintaining one-offs.'
        ]},
        { date: '2024', title: 'Identity matching, rearchitected', body: [
          'If a user had a secondary email address, workflows didn’t recognize them. The automation would skip the exact person it was written for, and nobody was told. It had been sitting in the support queue for a long time.',
          'I rearchitected the profile merge logic and gave admins manual controls in the UI. Now they fix identity data themselves instead of filing a ticket.'
        ]},
        { date: '2025', title: 'Errors that tell you what to do', body: [
          'When a workflow skipped an action, customers got a generic error that told them nothing. We rebuilt error reasoning at the action level, so every skip now comes with a diagnostic an admin can read: what happened and how to fix it.',
          'Workflow-related support tickets fell about 35%. Customers started trusting the reports instead of escalating them.'
        ]},
        { date: 'In beta', title: 'AI Admin Insights', body: [
          'An AI reporting layer for IT teams. They ask about compliance, ROI and adoption in plain language and get reports they can customize, plus suggestions for which integrations to add.',
          'It’s in beta with enterprise customers now. The aim is for IT and security leaders to open BetterCloud when they’re making decisions, beyond using it to run workflows.'
        ]},
        { date: 'Ongoing', title: 'A scoring model to replace gut feel', body: [
          'Backlog decisions were mostly argued, rarely scored. I built a weighted model for roadmap prioritization that puts the tradeoffs in writing.',
          'Other PMs in the product org have since picked it up for their own roadmaps.'
        ]}
      ]
    },
    {
      key: 'leadgenius', name: 'LeadGenius', url: 'leadgenius.com', dates: 'Oct 2022 – Sep 2023',
      role: 'Jr. Product Manager → Product Manager',
      teaser: 'Owned the browser extension that pulls prospect data from LinkedIn and CRMs. Joined as a Jr. PM running agile ceremonies and ended the year writing the PRDs.',
      context: 'LeadGenius sells B2B contact and account data to sales teams. I joined during beta, when customers judged us almost entirely on reliability, and left as the PM for one of the most-used parts of the product.',
      outcomes: [
        { value: '1 year', label: 'from Jr. PM to PM' },
        { value: 'Beta → GA', label: 'shepherded through the reliability phase' },
        { value: '2 surfaces', label: 'LinkedIn + major CRMs, one extension' }
      ],
      chapters: [
        { date: 'Oct 2022', title: 'Jr. PM, beta under scrutiny', body: [
          'The market was crowded and we were still in beta, so reliability was the main argument we had. My job was to find the anomalies before customers did.',
          'I set up the metrics the team tracked and designed a dashboard that showed product health on one screen. Problems got spotted and fixed faster.'
        ]},
        { date: 'Jul 2023', title: 'PM, owning the extension', body: [
          'I was promoted within the year. The job went from running agile ceremonies to writing PRDs, working out technical approach with engineering and checking fit with stakeholders.',
          'I owned the browser extension, which pulled prospect profiles from LinkedIn and major CRMs straight into live campaigns.',
          'Customer briefings and analyst meetings became a regular input to the roadmap. Before that, they had mostly been something sales did.'
        ]}
      ]
    },
    {
      key: 'sender', name: 'Sender', url: 'sender.mx', dates: 'Dec 2021 – Oct 2022',
      role: 'Project Manager → Product Manager',
      teaser: 'Inherited a white-label parcel delivery platform and gave it an identity and a roadmap of its own.',
      context: 'Sender is a parcel delivery platform where every shipment can be tracked end to end. When I joined it ran on a white-label base. Someone else’s framework set the limits, and the product had no identity of its own.',
      outcomes: [
        { value: 'White-label → own product', label: 'platform repositioned' },
        { value: '3 roles', label: 'project, product, and UI/UX in one seat' },
        { value: 'Full redesign', label: 'shipped end to end' }
      ],
      chapters: [
        { date: 'Dec 2021', title: 'Working inside someone else’s frame', body: [
          'We inherited the platform instead of building it. So I started by mapping what the white-label base could and couldn’t do, and planned the product around those limits.',
          'From there, planning and resourcing were about turning something that worked into something customers recognized as Sender.'
        ]},
        { date: 'Jan 2022', title: 'Designing the difference', body: [
          'Every competitor looked the same. I took on UI and UX design on top of project management and tested the flows people used most: quoting, tracking and shipping again.',
          'The redesign had to look better without getting slower to use. Engagement and satisfaction both went up.'
        ]},
        { date: 'Feb 2022', title: 'Product manager', body: [
          'I moved into product management. Engineering, design and marketing worked off one roadmap, and I decided what shipped when.'
        ]}
      ]
    },
    {
      key: 'selimex', name: 'Selimex', url: 'selimex.com.mx', dates: 'Jul 2020 – Oct 2022',
      role: 'UI & UX Designer → Project Manager',
      teaser: 'Built a self-serve quote tool for a commercial cleaning company, so customers could get a price without waiting on a salesperson.',
      context: 'Selimex is a commercial cleaning company in Mexico City. Their site had plenty of content and no way to get a quote from it, so every inquiry became a manual back-and-forth.',
      outcomes: [
        { value: 'Instant quotes', label: 'replaced manual sales back-and-forth' },
        { value: 'First of its kind', label: 'in the Mexican commercial cleaning market' },
        { value: 'Design → delivery', label: 'owned both ends' }
      ],
      chapters: [
        { date: 'Jul 2020', title: 'The quote generator', body: [
          'I designed an online quote generator. Customers describe the job (surfaces, how often, how much space) and get a price right away.',
          'The first version was rough. Engagement data decided each round of changes, and eventually the quote tool became the main reason people came to the site.'
        ]},
        { date: 'Mar 2021', title: 'Running the transformation', body: [
          'As project manager I ran the whole digital effort. I prioritized a long backlog, managed delivery and kept checking whether the work was moving the outcome or only the task list.'
        ]}
      ]
    },
    {
      key: 'la_fruteria', name: 'La Frutería', url: 'lafruteria.app', dates: 'Jul 2020 – Oct 2022',
      role: 'Associate PM → Product Manager',
      teaser: 'Took a grocery delivery app from idea to v1 on iOS and Android, then pitched a redesign that lifted order creation about 20%.',
      context: 'La Frutería does same-day grocery delivery in Mexico City. When I joined, the basics existed but the structure didn’t. I ended up as the only PM and UX person on three products at the same time.',
      outcomes: [
        { value: '4,500+', label: 'users on the delivery app' },
        { value: '~20%', label: 'increase in order creation after the redesign' },
        { value: '3 products', label: 'grocery, cleaning, and parcel, one PM' }
      ],
      chapters: [
        { date: 'Jul 2020', title: 'Idea to v1', body: [
          'I cut the feature list down to what the experience actually needed and shipped an MVP on iOS and Android by January 2021.',
          'After launch the backlog turned into a roadmap. Every release had to add something users would notice.'
        ]},
        { date: 'Mar 2021', title: 'The redesign that moved the number', body: [
          'The original design had real problems. Buttons were cut off, flows broke halfway through, and the app had no visual identity. I built a full Figma prototype from scratch, tested it with heavy users and pitched it to the founder.',
          'It shipped, and order creation went up about 20%. The app passed 4,500 users, with each round of changes based on what customers told us.'
        ]},
        { date: '2021 – 2022', title: 'Sole PM across three products', body: [
          'A mobile grocery app, a web platform for a cleaning service and a parcel delivery app. I was engineering’s main contact on all three and made the technical calls alongside the product and design ones.'
        ]}
      ]
    }
  ],

  timeline: [
    { key: 'bettercloud', dates: 'Dec 2023 – Present', employer: 'BetterCloud', role: 'Product Manager', note: 'Integrations and workflow automation for IT teams. Currently running an AI reporting beta with enterprise customers.' },
    { key: 'leadgenius', dates: 'Oct 2022 – Sep 2023', employer: 'LeadGenius', role: 'Jr. Product Manager → Product Manager', note: 'Owned the browser extension that pulls prospect profiles from LinkedIn and CRMs into campaigns. Promoted to PM within the year.' },
    { key: 'sender', dates: 'Dec 2021 – Oct 2022', employer: 'Sender', role: 'Project Manager → Product Manager', note: 'Inherited a white-label parcel platform and gave it a look and a roadmap of its own.' },
    { key: 'selimex', dates: 'Jul 2020 – Oct 2022', employer: 'Selimex', role: 'UI & UX Designer → Project Manager', note: 'Built a self-serve quote tool for a commercial cleaning company. Nobody else in that market in Mexico had one.' },
    { key: 'la_fruteria', dates: 'Jul 2020 – Oct 2022', employer: 'La Frutería', role: 'Associate PM → Product Manager', note: 'Grocery delivery app, idea to v1. It passed 4,500 users, and a redesign I pitched lifted order creation about 20%.' },
    { dates: 'Dec 2018 – Dec 2019', employer: 'Grupo GDI', role: 'IT Intern', note: 'My first look at how the systems behind a business fit together. Most of my engineering fluency started here.' }
  ]
};
