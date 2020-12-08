import chalk from 'chalk'
const { resolve, join } = require('path')

module.exports = function(moduleOptions) {
  const options = {
    ...this.options['@nuxtjs/i18n-netlify-cms'],
    ...this.options.i18n,
    ...moduleOptions
  }

  const netlifyCmsConfig = options.netlifyCms

  this.nuxt.hook('listen', (server, { host, port }) => {
    const url = `http://${host}:${process.env.PORT || 8081}/`

    if (netlifyCmsConfig.proxy) {
      // Run netlify cms proxy server if the flag is mentioned in i18n config
      require('netlify-cms-proxy-server/dist')

      this.nuxt.options.cli.badgeMessages.push(
        `Netlify CMS Proxy Server: ${chalk.underline.yellow(url)}`
      )
    }
  })

  // add i18n module to keep it simpler
  this.requireModule(['nuxt-i18n'])

  // Add admin page
  this.extendRoutes((routes, resolve) => {
    const routePaths = Object.assign({
      admin: resolve(__dirname, './templates/pages/index.vue')
    })
    routes.push({
      name: netlifyCmsConfig.route || 'i18n',
      path: '/' + (netlifyCmsConfig.route || 'i18n'),
      component: routePaths.admin
    })
  })

  // Add Netlify CMS config
  this.addTemplate({
    src: resolve(__dirname, './templates/config/cms.yml'),
    fileName: join('dist', 'static/admin/config.yml'),
    options
  })
}

module.exports.meta = require('../package.json')
