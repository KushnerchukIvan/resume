export interface PortfolioProject {
  slug: string
  number: string
  name: string
  category: string
  description: string
  longDescription: string
  details?: string[]
  highlights?: string[]
  liveUrl?: string
  repoUrl?: string
  stack: string[]
  accent: string
  mark: string
}

export const projects: PortfolioProject[] = [
  {
    slug: 'shopflow', number: '01', name: 'ShopFlow', category: 'Fullstack-облік складу · Laravel + React',
    description: 'Система обліку складу та товарних запасів: транзакційні залишки, переміщення між складами, інвентаризація, замовлення постачальникам, звіти й рольовий доступ.',
    longDescription: 'ShopFlow — повноцінна fullstack-система обліку складу для малого та середнього бізнесу, яку я спроєктував і зібрав від схеми бази даних до інтерфейсу. Продукт закриває повний цикл роботи зі складом: автентифікація з рольовим доступом, каталог товарів і постачальників, залишки, переміщення між складами, інвентаризація, закупівлі, звіти й адміністрування.',
    details: [
      'Фронтенд — SPA на React 19 і TypeScript із Tailwind CSS 4: маршрутизація React Router, серверний стан на TanStack Query, локальний UI-стан на Zustand, форми на React Hook Form і Zod, графіки Recharts. Інтерфейс має світлу й темну тему, адаптивний каркас із бічною панеллю та мобільним меню й однакові стани завантаження, порожніх і помилкових відповідей у всіх таблицях.',
      'Бекенд — версійований REST API на Laravel 13: автентифікація Sanctum через stateful cookies і CSRF, чотири ролі, політики доступу, Form Requests для валідації та тонкі контролери, що делегують бізнес-логіку доменним сервісам. Джерело істини — PostgreSQL 17 із транзакціями й блокуванням рядків, а Redis відповідає за кеш, сесії та черги. Кожна зміна кількості записується в незмінний журнал рухів складу, тож історію неможливо переписати, а від’ємні залишки заблоковані на рівні інваріантів.',
      'Розгортання — Docker Compose у dev- і production-конфігураціях (PHP-FPM + Nginx + воркер черг, health checks, окремі образи). Якість підтверджена тестами PHPUnit, Vitest із React Testing Library та наскрізними сценаріями Playwright, а публічний контракт API описаний в OpenAPI-специфікації разом з архітектурною й deployment-документацією.',
    ],
    highlights: [
      'Транзакційний облік залишків: блокування рядків, незмінний журнал рухів і захист від від’ємних залишків.',
      'Чотири ролі та доступ лише до призначених складів — обмеження на рівні API, middleware й політик, а не UI.',
      'Переміщення між складами, інвентаризація з виявленням застарілих підрахунків і замовлення постачальникам із частковим прийманням.',
      'Дашборд із KPI та графіками, звіти з експортом у CSV і серверна пагінація, фільтри та сортування в усіх списках.',
      'Docker Compose для розробки та production-стек PHP-FPM + Nginx із воркером черг і health checks.',
      'Тести PHPUnit (44 тести, 272 перевірки), Vitest із React Testing Library (17) та Playwright (7 e2e-сценаріїв), OpenAPI-специфікація.',
    ],
    repoUrl: 'https://github.com/KushnerchukIvan/ShopFlow',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'React Router', 'TanStack Query', 'Zustand', 'Axios', 'React Hook Form', 'Zod', 'Recharts', 'Sonner', 'Laravel 13', 'PHP 8.3', 'Sanctum', 'Eloquent ORM', 'PostgreSQL 17', 'Redis 7', 'Docker', 'Nginx', 'PHPUnit', 'Vitest', 'Playwright', 'OpenAPI'], accent: 'sand', mark: 'S',
  },
  {
    slug: 'ai-semantic-search', number: '02', name: 'AI Semantic Search', category: 'AI-powered search · Next.js',
    description: 'Пошук по базі знань React і Next.js звичайною мовою з миттєвими результатами та потоковим поясненням від AI.',
    longDescription: 'Застосунок поєднує локальний пошук по невеликій базі знань із генеративним поясненням релевантності результатів. Пошукові збіги відображаються одразу, а відповідь AI надходить потоком через Ollama та Vercel AI SDK. Інтерфейс побудований на Next.js і React.',
    liveUrl: 'https://ai-powered-frontend-feature-njxjoq50d-kushnerchukivans-projects.vercel.app/',
    repoUrl: 'https://github.com/KushnerchukIvan/Ai-Powered-Frontend-Feature',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Vercel AI SDK', '@ai-sdk/react', 'ai-sdk-ollama', 'Ollama', 'Tailwind CSS 3', 'Lucide'], accent: 'violet', mark: 'AI',
  },
  {
    slug: 'fingrunt', number: '03', name: 'FinGrunt', category: 'Financial literacy · React',
    description: 'Інтерактивний застосунок із фінансової грамотності: уроки, практичні калькулятори та інструменти для планування бюджету.',
    longDescription: 'Освітній вебзастосунок, що поєднує короткі уроки з тестами та практичні інструменти для роботи з особистими фінансами. Дашборд показує доходи, витрати й заощадження; користувач може вести транзакції, встановлювати місячні бюджети, переглядати підказки на основі своїх даних і користуватися шістьма фінансовими калькуляторами. Інтерфейс доступний українською та англійською, а дані зберігаються локально в браузері.',
    liveUrl: 'https://fin-grunt-b5xgachzj-kushnerchukivans-projects.vercel.app/',
    repoUrl: 'https://github.com/KushnerchukIvan/FinGrunt',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'React Router', 'Zustand', 'React Hook Form', 'Zod', 'Recharts', 'i18next', 'Lucide'], accent: 'lime', mark: 'F',
  },
  {
    slug: 'uptowin', number: '04', name: 'Uptowin', category: 'Digital experience · Nuxt 3',
    description: 'Яскравий ігровий досвід із виразною айдентикою, динамічними переходами та увагою до кожної взаємодії.',
    longDescription: 'Практичний проєкт, у якому поєдналися сучасний стек Vue та Nuxt, адаптивний дизайн, локалізація й motion-дизайн. У фокусі — цілісний візуальний напрям, швидкий інтерфейс і послідовний досвід на різних екранах.',
    liveUrl: 'https://uptowin-m1jwp3dhs-kushnerchukivans-projects.vercel.app/',
    stack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Pinia', 'GSAP', 'Swiper', 'SCSS', 'i18next', 'Axios', 'Yup'], accent: 'lime', mark: 'U',
  },
  {
    slug: 'flowboard', number: '05', name: 'Flowboard', category: 'Product UI · Nuxt 3',
    description: 'Концепт командного робочого простору для проєктів, завдань і щоденної командної роботи.',
    longDescription: 'Багатосторінковий продукт із дашбордом, дошкою завдань та інструментами керування командою. Проєкт допоміг поглибити практику з Vue 3 Composition API, Nuxt, Pinia, типізацією та компонентною архітектурою.',
    liveUrl: 'https://flowboard-6gdk5qb28-kushnerchukivans-projects.vercel.app/auth',
    stack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Pinia', 'SCSS', 'GraphQL', 'Nuxt Image', 'JWT'], accent: 'blue', mark: 'F',
  },
  {
    slug: 'library', number: '06', name: 'Library Authors', category: 'CRUD application · Angular',
    description: 'Інтерфейс для керування авторами бібліотеки з повним циклом створення й редагування записів.',
    longDescription: 'Навчальний CRUD-застосунок, побудований у межах навчання в CyberBionic Systematics. В інтерфейсі реалізовано роботу зі списком авторів і основними операціями керування даними.',
    liveUrl: 'https://kushnerchukivan.github.io/library/authors',
    repoUrl: 'https://github.com/KushnerchukIvan/library',
    stack: ['Angular 21', 'Angular CDK', 'Bootstrap', 'RxJS', 'TypeScript', 'REST API'], accent: 'orange', mark: 'L',
  },
  {
    slug: 'ai-job-search', number: '07', name: 'AI Job Search', category: 'AI product · Angular',
    description: 'Експеримент із пошуком вакансій, що поєднує генеративний AI та дані з пошукових сервісів.',
    longDescription: 'Навчальний портфоліо-проєкт із Angular, Gemini API та SerpAPI. Досліджує, як інтегрувати зовнішні сервіси в зрозумілий користувацький сценарій пошуку роботи.',
    liveUrl: 'https://ai-job-search-umber.vercel.app/',
    repoUrl: 'https://github.com/KushnerchukIvan/ai-job-search',
    stack: ['Angular 21', 'TypeScript', 'RxJS', 'Gemini API', 'SerpAPI'], accent: 'violet', mark: 'A',
  },
  {
    slug: 'job-finder-backend', number: '08', name: 'Job Finder API', category: 'Backend API · Node.js',
    description: 'Backend для пошуку вакансій: збирає результати пошуку та використовує AI, щоб відфільтрувати релевантні пропозиції.',
    longDescription: 'REST API на Express.js, що отримує результати вакансій через SerpAPI та передає їх Gemini для відбору релевантних позицій. Конфігурація сервісів і ключів винесена в середовище, а API доступний клієнтському застосунку через HTTP endpoints.',
    repoUrl: 'https://github.com/KushnerchukIvan/job-finder-backend',
    stack: ['Node.js', 'Express 5', 'REST API', 'SerpAPI', 'Google Gemini API', 'node-fetch', 'dotenv', 'CORS'], accent: 'lime', mark: 'J',
  },
]

export const skillGroups = [
  { title: 'Frontend Core', skills: [{ name: 'HTML', experience: '1 рік' }, { name: 'CSS', experience: '1 рік' }, { name: 'JavaScript', experience: '1 рік' }, { name: 'TypeScript', experience: '6 місяців' }] },
  { title: 'Frameworks & ecosystems', skills: [{ name: 'Vue.js', experience: '1 рік' }, { name: 'Nuxt.js', experience: '1 рік' }, { name: 'Pinia', experience: '1 рік' }, { name: 'Vue Router', experience: '1 рік' }, { name: 'Vuex', experience: '1 рік' }, { name: 'React', experience: 'Досвід' }, { name: 'Next.js', experience: 'Досвід' }, { name: 'React Router', experience: 'Досвід' }, { name: 'TanStack Query', experience: 'Досвід' }, { name: 'Zustand', experience: 'Досвід' }, { name: 'Angular', experience: '6 місяців' }] },
  { title: 'Styling & UI', skills: [{ name: 'Tailwind CSS', experience: 'Досвід' }, { name: 'Element UI', experience: '1 рік' }, { name: 'Lucide', experience: 'Досвід' }] },
  { title: 'Animation & graphics', skills: [{ name: 'D3.js', experience: '6 місяців' }, { name: 'GSAP', experience: 'Досвід' }, { name: 'Swiper', experience: 'Досвід' }] },
  { title: 'Forms & validation', skills: [{ name: 'React Hook Form', experience: 'Досвід' }, { name: 'Zod', experience: 'Досвід' }, { name: 'Yup', experience: 'Досвід' }] },
  { title: 'Backend & APIs', skills: [{ name: 'REST API', experience: '1 рік' }, { name: 'GraphQL', experience: '1 рік' }, { name: 'JWT', experience: '1 рік' }, { name: 'OpenAPI', experience: 'Досвід' }, { name: 'PHP', experience: 'Досвід' }, { name: 'Laravel', experience: 'Досвід' }, { name: 'Laravel Sanctum', experience: 'Досвід' }, { name: 'Eloquent ORM', experience: 'Досвід' }, { name: 'Symfony 5', experience: 'Досвід' }, { name: 'Doctrine ORM', experience: 'Досвід' }, { name: 'PostgreSQL', experience: 'Досвід' }, { name: 'Redis', experience: 'Досвід' }, { name: 'SQL & migrations', experience: 'Досвід' }, { name: 'Node.js', experience: 'Досвід' }, { name: 'Express', experience: 'Досвід' }, { name: 'SerpAPI', experience: 'Досвід' }, { name: 'Google Gemini API', experience: 'Досвід' }] },
  { title: 'Development tools', skills: [{ name: 'Git', experience: '1 рік' }, { name: 'Vite', experience: '1 рік' }, { name: 'Webpack', experience: '1 рік' }, { name: 'Docker', experience: 'Досвід' }, { name: 'Docker Compose', experience: 'Досвід' }, { name: 'Nginx', experience: 'Досвід' }, { name: 'PHP-FPM', experience: 'Досвід' }, { name: 'ESLint', experience: 'Досвід' }, { name: 'Prettier', experience: 'Досвід' }, { name: 'i18next', experience: 'Досвід' }, { name: 'Lazy loading', experience: '1 рік' }, { name: 'Code splitting', experience: '1 рік' }] },
  { title: 'Testing', skills: [{ name: 'Vitest', experience: '1 рік' }, { name: 'Vue Test Utils', experience: '1 рік' }, { name: 'React Testing Library', experience: 'Досвід' }, { name: 'PHPUnit', experience: 'Досвід' }, { name: 'Playwright', experience: '1 рік' }] },
  { title: 'AI & modern integrations', skills: [{ name: 'Vercel AI SDK', experience: 'Досвід' }, { name: 'Ollama', experience: 'Досвід' }] },
]

export const experienceHighlights = [
  'Розробляв і frontend, і backend частини SaaS-платформи аналітики Utrigg.',
  'Створював REST endpoints на Symfony 5 і реалізовував бізнес-логіку сервісів.',
  'Працював із базою даних через Doctrine ORM: змінював моделі, створював і застосовував міграції.',
  'Будував аналітичні віджети та візуалізації на Vue 2 і D3.js, додавав фільтри звітів і локалізацію.',
]

export const profile = {
  name: 'Іван Кушнерчук',
  role: 'Frontend Developer',
  location: 'Київ, Україна',
  email: 'ikushnerchuk2005@gmail.com',
  phone: '+380 93 700 50 09',
  github: 'https://github.com/KushnerchukIvan',
  linkedin: 'https://www.linkedin.com/in/ivan-kushnerchuk-188444293/',
}
