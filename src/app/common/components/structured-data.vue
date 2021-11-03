<docs></docs>

<template>
  <div
    class="vc structured-data"
    data-JSON-LD
  >
    <script type="application/ld+json">
      {{ JSON.stringify($data.jsonld) }}
    </script>
  </div>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {},
  data: function() {
    return {
      jsonld:  {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NPO法人アニマルレスキュー宇宙",
        "legalName": "NPO法人アニマルレスキュー宇宙",
        "url": "https://animal-rescue-sora.netlify.app/",
        "logo": "https://animal-rescue-sora.netlify.app/common/img/logo.jpg",
        "foundingDate": "2020-04-13",
        "founders": {
          "@type": "Person",
          "name": "宮本 真澄"
        },
        "address": [{
          "@type": "PostalAddress",
          "streetAddress": "倉ノ谷町 11-27",
          "addressLocality": "尾鷲市",
          "addressRegion": "三重県",
          "postalCode": "519-3658",
          "addressCountry": "JAPAN"
        }, {
          "@type": "PostalAddress",
          "streetAddress": "島勝浦257番地",
          "addressLocality": "北牟婁郡紀北町",
          "addressRegion": "三重県",
          "postalCode": "519-3205",
          "addressCountry": "JAPAN"
        }],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "+81-80-5165-0043",
          "email": "animalrescuesora@gmail.com"
        },
        "sameAs": [
          "https://www.instagram.com/a.r_sora/",
          "https://twitter.com/cocomiroku",
          "https://www.facebook.com/animalrescuesora/",
          "https://www.instagram.com/nono.ar.sora/",
          "https://www.npo-homepage.go.jp/npoportal/detail/024001072",
          "https://npoanimalrescuesora.jimdofree.com/",
          "https://ameblo.jp/animalleskyusora/entry-12529018705.html",
          "https://activo.jp/users/109800",
          "https://www.pet-home.jp/member/user911521/",
          "https://cake033.wixsite.com/my-site-1",
        ]
      },
    };
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(function() {});
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.test {
  width: 100%;
}
</style>
