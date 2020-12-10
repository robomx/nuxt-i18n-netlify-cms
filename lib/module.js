import chalk from 'chalk'
const { resolve } = require('path')
const r = (...path) => resolve(__dirname, ...path)
const requireContext = require('require-context')

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

  const cms = netlifyCmsConfig.config
  // Add admin page
  this.addTemplate({
    src: r('templates/index.html'),
    fileName: resolve(
      this.options.srcDir,
      this.options.dir.static + '/' + (netlifyCmsConfig.route || 'i18n'),
      'index.html'
    ),
    options: {
      title: cms.title || 'i18n Content Management'
    }
  })

  // Add Netlify CMS config
  this.addTemplate({
    src: r('templates/cms.yml'),
    fileName: resolve(
      this.options.srcDir,
      this.options.dir.static + '/' + (netlifyCmsConfig.route || 'i18n'),
      'config.yml'
    ),
    options: {
      default_locale: options.defaultLocale,
      locales: options.locales.map(l => {
        return l.code
      }),
      publish_mode: cms.publish_mode || 'editorial_workflow',
      media_folder: cms.media_folder || 'static/i18n/images',
      public_folder: cms.public_folder || '/i18n/images',
      open_authoring: cms.open_authoring || false
    }
  })

  // add locales folder data to vueI18n
  const locales = requireContext(
    this.options.srcDir + '/locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )

  const messages = {}
  locales.keys().forEach(key => {
    const lang = key.split('/')[0]
    // create lang key if don't exist
    if (!Object.prototype.hasOwnProperty.call(messages, lang)) {
      messages[lang] = {}
    }
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const routeName = matched[1]
      const fileI18nJson = locales(key).i18n || []
      const i18nMessages = {}
      fileI18nJson.forEach(val => {
        // replace space by "-"
        i18nMessages[val.key.replace(/ /g, '-')] = val.value
      })
      messages[lang][routeName] = i18nMessages
    }
  })

  // add message to Nuxt module
  this.nuxt.hook('ready', nuxt => {
    nuxt.options.i18n.vueI18n.messages = messages
  })
}

module.exports.meta = require('../package.json')
