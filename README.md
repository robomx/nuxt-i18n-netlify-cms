<div align="center">
  <img src ="https://github.com/anshcena/my-image-hosting-spot/blob/main/IMAGE_DIR/@nuxtjsi18n-netlify-cms.png?raw=true" width="1000" />
</div>

# Nuxt i18n Netlify CMS Module

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FRoboMx%2Fnuxt-i18n-netlify-cms&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Create admin panel to manage i18n content using Netlify CMS

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxt/i18n-netlify-cms` dependency to your project

```bash
yarn add @nuxt/i18n-netlify-cms # or npm install @nuxt/i18n-netlify-cms
```

2. Add `@nuxt/i18n-netlify-cms` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxt/i18n-netlify-cms',

    // With options
    ['@nuxt/i18n-netlify-cms', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## Screenshot

<img src="static/i18n-content.jpeg" alt="i18n content manage" width="600px">

## References

* [Nuxt i18n external JSON setup](https://phrase.com/blog/posts/nuxt-js-tutorial-i18n/#External_JSON_or_JS_Files)
* [Create Nuxt Module](https://nuxtjs.org/blog/creating-a-nuxt-module)

## License

[MIT License](./LICENSE)

Copyright (c) RoboMx <ask@robomx.tech>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxt/i18n-netlify-cms/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxt/i18n-netlify-cms

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxt/i18n-netlify-cms.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxt/i18n-netlify-cms

[github-actions-ci-src]: https://github.com/robomx/nuxt-18n-netlify-cms/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/robomx/nuxt-18n-netlify-cms/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/robomx/nuxt-18n-netlify-cms.svg
[codecov-href]: https://codecov.io/gh/robomx/nuxt-18n-netlify-cms

[license-src]: https://img.shields.io/npm/l/@nuxt/i18n-netlify-cms.svg
[license-href]: https://npmjs.com/package/@nuxt/i18n-netlify-cms
