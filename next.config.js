// module.exports = {
//   env: {
//     customKey: 'my-value',
//   },
// }

module.exports = phase => {
  const isDev = phase === 'phase-development-server'
  // when `next build` or `npm run build` is used
  const isProd = phase === 'phase-production-build' && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging = phase === 'phase-production-build' && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  const env = {
    API_URL: (() => {
      if (isDev) return 'http://localhost:4000/speakers'
      if (isProd) {
        return 'https://www.siliconvalley-codecamp.com/rest/speakers/ps'
      }
      if (isStaging) return 'https://staging.api.siliconvalley-codecamp.com/rest/speakers/ps'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
  }
  console.log('env', env)
  // next.config.js object
  return {
    env,
  }
}
