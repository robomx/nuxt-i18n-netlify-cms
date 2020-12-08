import path from 'path'
import chalk from 'chalk'

module.exports = function(moduleOptions) {
  const options = {
    ...this.options['@nuxtjs/i18n-netlify-cms'],
    ...this.options.i18n,
    ...moduleOptions
  }

  // Run netlify cms proxy server if the flag is mentioned in i18n config
  if (options.proxy) {
    require('netlify-cms-proxy-server/dist')
  }

  this.nuxt.hook('listen', function(server, { port }) {
    const url = 'http://localhost:' + (process.env.PORT || 8081) + '/'

    if (options.proxy)
      this.nuxt.options.cli.badgeMessages.push(
        `Netlify CMS Proxy Server: ${chalk.underline.yellow(url)}`
      )
  })

  // add i18n module to keep it simpler
  this.requireModule(['nuxt-i18n'])

  this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}

module.exports.meta = require('../package.json')
