<template>
  <div>test</div>
</template>

<script>
export default {
  head() {
    return {
      title: 'i18n Content Management',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'i18n content management panel'
        }
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          async: true
        },
        {
          type: 'text/javascript',
          src: 'https://unpkg.com/netlify-cms@^2.10.68/dist/netlify-cms.js',
          async: true
        }
      ]
    }
  }
}
</script>
