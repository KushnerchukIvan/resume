
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://KushnerchukIvan.github.io/resume/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/resume"
  },
  {
    "renderMode": 2,
    "route": "/resume/about"
  },
  {
    "renderMode": 2,
    "route": "/resume/skills"
  },
  {
    "renderMode": 2,
    "route": "/resume/projects"
  },
  {
    "renderMode": 2,
    "route": "/resume/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 700, hash: '33d19aeb8d9db3ee1b68f9213bf7d1aa4406a8bc15af7105270d13576de67834', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 985, hash: '5c1f0b5a5d7ae449dd0de34517bd69fcc6e4df96e2559bef7c3dbee5a1a504f0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 7990, hash: '15599eb877fca4ded7c59e777e96db21aa7bcbe83b1f3906d27bf7a14cef5062', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 8720, hash: '3a1c56760d1ee6b3a957454b7182f8cf5f998adda46cd42f057ddede0c692917', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 5669, hash: '57806e3efcccd99b51a2700ef4d5fb5a1af90cb16880a62e51389405e2d36ebb', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 14459, hash: '87d76e66487c61675b168bfd059aff6b20d9b1b782b24a7cd144030a7798dc7d', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 9226, hash: 'c2ad8f366c2d05b6016b8eeac6fad4b9c8e5d00da27aae81c1d4e930d99002af', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-EOXRU7PR.css': {size: 103, hash: 'ykaYVwpkVaE', text: () => import('./assets-chunks/styles-EOXRU7PR_css.mjs').then(m => m.default)}
  },
};
