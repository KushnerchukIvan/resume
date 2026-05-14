
export default {
  basePath: 'https://KushnerchukIvan.github.io/resume',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
