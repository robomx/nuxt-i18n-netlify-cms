import { resolve } from 'path'

export const rootDir = resolve(__dirname, '..')
export const buildDir = resolve(__dirname, '.nuxt')
export const srcDir = __dirname
export const modules = [{ handler: require('../') }]

export const i18n = {
  netlifyCms: {
    proxy: true,
    route: 'i18n',
    config: {
      title: 'i18n Content Management',
      publish_mode: 'editorial_workflow',
      media_folder: 'static/i18n/images',
      public_folder: '/i18n/images',
      open_authoring: true
    }
  },
  defaultLocale: 'en',
  vueI18nLoader: true,
  locales: [
    {
      code: 'en',
      name: 'English'
    },
    {
      code: 'fr',
      name: 'Français'
    }
  ],
  vueI18n: {
    locale: 'en',
    fallbackLocale: 'de',
    messages: {
      en: {
        message: 'works'
      },
      fr: {
        message: 'le travail'
      }
    }
  }
}
