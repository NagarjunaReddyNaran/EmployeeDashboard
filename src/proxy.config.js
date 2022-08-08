module.exports = {
  '/api/v2/*': {
    target: 'https://209.217.95.19:18100',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    timeout: 6000000
  },
};

// module.exports = {
//   '/200/*': {
//     target: 'https://httpstat.us',
//     secure: false,
//     logLevel: 'debug',
//     changeOrigin: true,
//   },
//   '/entries/*': {
//     target: 'https://api.publicapis.org',
//     secure: false,
//     logLevel: 'debug',
//     changeOrigin: true,
//   },
//   '/entries/abcd/*': {
//     target: 'https://api.publicapis.org',
//     secure: false,
//     logLevel: 'debug',
//     changeOrigin: true,
//     pathRewrite: { '/entries/abcd/': '/entries/' },
//   },
// };
