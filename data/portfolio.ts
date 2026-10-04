export interface PortfolioProject {
  slug: string
  number: string
  name: string
  category: string
  description: string
  longDescription: string
  liveUrl?: string
  repoUrl?: string
  stack: string[]
  accent: string
  mark: string
}

export const projects: PortfolioProject[] = [
  {
    slug: 'uptowin', number: '01', name: 'Uptowin', category: 'Digital experience · Nuxt 3',
    description: 'Яскравий ігровий досвід із виразною айдентикою, динамічними переходами та увагою до кожної взаємодії.',
    longDescription: 'Практичний проєкт, у якому поєдналися сучасний стек Vue та Nuxt, адаптивний дизайн, локалізація й motion-дизайн. У фокусі — цілісний візуальний напрям, швидкий інтерфейс і послідовний досвід на різних екранах.',
    liveUrl: 'https://uptowin-m1jwp3dhs-kushnerchukivans-projects.vercel.app/',
    stack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Pinia', 'GSAP', 'Swiper', 'SCSS', 'i18next', 'Axios', 'Yup'], accent: 'lime', mark: 'U',
  },
  {
    slug: 'flowboard', number: '02', name: 'Flowboard', category: 'Product UI · Nuxt 3',
    description: 'Концепт командного робочого простору для проєктів, завдань і щоденної командної роботи.',
    longDescription: 'Багатосторінковий продукт із дашбордом, дошкою завдань та інструментами керування командою. Проєкт допоміг поглибити практику з Vue 3 Composition API, Nuxt, Pinia, типізацією та компонентною архітектурою.',
    liveUrl: 'https://flowboard-6gdk5qb28-kushnerchukivans-projects.vercel.app/auth',
    stack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Pinia', 'SCSS', 'GraphQL', 'Nuxt Image', 'JWT'], accent: 'blue', mark: 'F',
  },
  {
    slug: 'library', number: '03', name: 'Library Authors', category: 'CRUD application · Angular',
    description: 'Інтерфейс для керування авторами бібліотеки з повним циклом створення й редагування записів.',
    longDescription: 'Навчальний CRUD-застосунок, побудований у межах навчання в CyberBionic Systematics. В інтерфейсі реалізовано роботу зі списком авторів і основними операціями керування даними.',
    liveUrl: 'https://kushnerchukivan.github.io/library/authors',
    repoUrl: 'https://github.com/KushnerchukIvan/library',
    stack: ['Angular 21', 'Angular CDK', 'Bootstrap', 'RxJS', 'TypeScript', 'REST API'], accent: 'orange', mark: 'L',
  },
  {
    slug: 'ai-job-search', number: '04', name: 'AI Job Search', category: 'AI product · Angular',
    description: 'Експеримент із пошуком вакансій, що поєднує генеративний AI та дані з пошукових сервісів.',
    longDescription: 'Навчальний портфоліо-проєкт із Angular, Gemini API та SerpAPI. Досліджує, як інтегрувати зовнішні сервіси в зрозумілий користувацький сценарій пошуку роботи.',
    liveUrl: 'https://ai-job-search-umber.vercel.app/',
    repoUrl: 'https://github.com/KushnerchukIvan/ai-job-search',
    stack: ['Angular 21', 'TypeScript', 'RxJS', 'Gemini API', 'SerpAPI'], accent: 'violet', mark: 'A',
  },
  {
    slug: 'job-finder-backend', number: '05', name: 'Job Finder API', category: 'Backend API · Node.js',
    description: 'Backend для пошуку вакансій: збирає результати пошуку та використовує AI, щоб відфільтрувати релевантні пропозиції.',
    longDescription: 'REST API на Express.js, що отримує результати вакансій через SerpAPI та передає їх Gemini для відбору релевантних позицій. Конфігурація сервісів і ключів винесена в середовище, а API доступний клієнтському застосунку через HTTP endpoints.',
    repoUrl: 'https://github.com/KushnerchukIvan/job-finder-backend',
    stack: ['Node.js', 'Express 5', 'REST API', 'SerpAPI', 'Google Gemini API', 'node-fetch', 'dotenv', 'CORS'], accent: 'lime', mark: 'J',
  },
]

export const skillGroups = [
  { title: 'Frontend', skills: ['Vue.js · 1 рік', 'Angular · 6 місяців', 'TypeScript · 6 місяців', 'JavaScript · 1 рік', 'HTML · 1 рік', 'CSS · 1 рік', 'Element UI · 1 рік'] },
  { title: 'Vue та керування станом', skills: ['Nuxt.js · 1 рік', 'Vue Router · 1 рік', 'Pinia · 1 рік', 'Vuex · 1 рік'] },
  { title: 'API та backend', skills: ['REST API · 1 рік', 'GraphQL · 1 рік', 'JWT · 1 рік', 'Symfony 5', 'PHP', 'Doctrine ORM', 'SQL та міграції БД'] },
  { title: 'Графіка та анімація', skills: ['D3.js · 6 місяців', 'GSAP', 'Swiper'] },
  { title: 'Якість, продуктивність та інструменти', skills: ['Git · 1 рік', 'Lazy loading · 1 рік', 'Code splitting · 1 рік', 'Vite · 1 рік', 'Webpack · 1 рік', 'Vitest · 1 рік', 'Vue Test Utils · 1 рік', 'Playwright · 1 рік', 'i18next', 'Yup', 'ESLint'] },
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
