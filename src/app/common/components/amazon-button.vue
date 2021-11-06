<docs></docs>

<template>
  <div class="vc amazon-button">
    <a
      v-ripple
      :href="$data.HREF"
      target="_blank"
      rel="noopener"
    >
      <img
        alt="amazon.co.jp 欲しいものリスト"
        :width="$props.width"
        :height="$props.height"
        :src="$props.src"
        loading="lazy"
      >
      <span>
        <slot />
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    'href': {
      type: String,
      default: 'https://www.amazon.co.jp/hz/wishlist/ls/',
    },
    'width': {
      type: String,
      default: '300',
    },
    'height': {
      type: String,
      default: '112',
    },
    'src': {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAHBCAMAAABOubI+AAABL1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////7xIP////////////////////////////////////////////4mR3////////////////////////////////4mR3////////4mR3////////////////////////////4mR34mR34mR34mR3////////4mR3////////4mR3////4mR3////4mR3////4mR34mR34mR3////4mR34mR34mR34mR34mR34mR34mR3////4mR3////4mR34mR34mR34mR34mR34mR34mR34mR34mR34mR34mR34mR3////////4mR2lgZEdAAAAY3RSTlMACSHP6+m57eEX0Rv7LRJrH9vLh8LxnlS0A9T3rYwPC32kmJLl0v1ZQMZxKSWC/Ni9Cl008zxkRXaRPtkzBQe6qEmaaWA3yXkZUkkx9C3t56t54ExnUHAno4AUsiDA+IhZECBmsOYUAAAosElEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXYubfdtIEgAMPDySZgEw4GDNgcDCLGxgoyCXATBEKIi1wiXqDz/u/QqlUPlBC8u15K0vkeAK1Hw49sAYQQQgghhBBCCCGEEEIIIYQQQgg5p1P057OuvVqVm7+krJW9C7fjAhCJOnl9/W30lvXH6MtWz1480OgJeVPBX4eLvqU0m0/DX1rNprKyN/VtHog0BX0e7vor5fFo9I85pWdvDlMaPSFH2s+L2qT0hOcNB6Ned92GW7Es7jeBY/3gBN7eT4hc//RhYfes72oV7+An4Fo6613NeHf02sBY7dzbGf2VNQrTwyawrZ/sild/zi/hxiT8vRc41q8dqusJIDIk592JOsRIVGXh3sG/1nE9K1vFY62suXALwM6v20a6dfJi3XkeZBuvA0PFSIZp03P/t5vDhr/frVKqdtrwasmy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',
    },
  },
  data: function() {
    return {
      HREF: this.$props.href,
      xhr: {
        loading: {
          status: {
            loading: true,
            error: false,
          },
        },
      },
    };
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {
    this.axios({
      method: 'get',
      baseURL: 'https://animal-rescue-sora.microcms.io/api/v1',
      url: '/wishlist',
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': 'c5704986ff11430fbcd965af9b4539a11b65'
      },
      params: {
        limit: 100
      },
      timeout: 3000,
    }).then((response) => {
      this.$data.HREF = response.data.href;
    }).catch((error) => {
      //this.$data.xhr.loading.status.error = true;
    }).finally(() => {
      //this.$data.xhr.loading.status.loading = false;
    });
  },
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
@use "sass:math";

.amazon-button {
  margin-top: 2.4rem;
  text-align: center;

  a {
    border-radius: 7.2rem;
    background-color: #333e48;
    box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
    color: #fff;
    text-decoration: none;


    @media (min-width: 641px) {
      display: inline-flex;
      padding: 1.6rem 3.2rem 1.6rem 1.6rem;
      vertical-align: middle;
      align-items: center;
    }

    @media (max-width: 640px) {
      display: block;
      padding: 1.2rem 1.2rem 2rem;
    }

    img {
      backface-visibility: hidden;

      @media (max-width: 640px) {
        margin: 0 auto;
      }
    }

    span {
      display: block;
    }
  }
}
</style>
