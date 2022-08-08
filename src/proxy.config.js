module.exports = {
  '/api/v2/departments': {
    target: 'https://209.217.95.19:18100',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: {"^/api" : "http://209.217.95.19:18100/api/v2/departments"}
  }
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
