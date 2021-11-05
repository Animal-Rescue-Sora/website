<docs></docs>

<template>
  <div class="vc news">
    <div
      v-if="$data.xhr.loading.status.loading"
      class="news__loading-spinner"
    >
      <svg viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10" />
      </svg>
    </div>
    <div
      v-if="$data.xhr.loading.status.error"
      class="news__error-msg"
    >
      <p>何らかの原因によりデータの読み込みに失敗しました。時間をおいて再度ページを読み込み直してください。</p>
    </div>
    <div role="list">
      <div
        v-for="(item, i) in $data.items.slice(0, $data.appear)"
        :key="i"
        role="listitem"
      >
        <time
          :datetime="$dayjs(item.datetime).format()"
          v-text="$dayjs(item.datetime).format('YYYY年MM月DD日')"
        />
        <fragment v-if="item.href">
          <p>
            <a
              :href="item.href"
              target="_blank"
              rel="noopener"
            >
              <span v-text="item.text" />
              <icn-open-window />
            </a>
          </p>
        </fragment>
        <fragment v-else>
          <p v-html="item.text" />
        </fragment>
      </div>
    </div>
    <button
      v-if="$data.items.length > $data.appear"
      v-ripple
      type="button"
      @click="$data.appear = $data.appear + 5"
    >
      <span>もっと見る</span>
    </button>
  </div>
</template>

<script>
import icnOpenWindow from './icons/open-window';

export default {
  name: '',
  title: '',
  components: {
    icnOpenWindow,
  },
  filter: {},
  props: {},
  data: function() {
    return {
      items: [],
      xhr: {
        loading: {
          status: {
            loading: true,
            error: false,
          },
        },
      },
      appear: 5,
    };
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {
    this.axios({
      method: 'get',
      baseURL: 'https://animal-rescue-sora.microcms.io/api/v1',
      url: '/news',
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': 'c5704986ff11430fbcd965af9b4539a11b65'
      },
      params: {
        limit: 50
      },
      timeout: 3000,
    }).then((response) => {
      this.$data.items = response.data.contents;
    }).catch((error) => {
      this.$data.xhr.loading.status.error = true;
    }).finally(() => {
      this.$data.xhr.loading.status.loading = false;
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

.news {
  margin: 0 auto;
  width: min(100%, 84.4rem);

  &__loading-spinner {
    svg {
      display: block;
      margin: auto;
      width: 10rem;
      height: 10rem;
      animation: rotate 2s linear infinite;
      transform-origin: center center;

      circle {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
      }
    }
  }

  &__error-msg {
    p {
      color: #f00;
      font-weight: 700;
      text-align: center;
    }
  }

  [role="listitem"] {
    padding: 1.6rem 0;

    + [role="listitem"] {
      border-top: .1rem solid #9e9e9e;
    }
  }

  time {
    font-weight: 700;
    font-size: 1.4rem;
    font-style: italic;
    color: #757575;
  }

  a {
    ::v-deep .icn-open-window {
      display: inline;
      vertical-align: text-top;

      @media not all and (min-resolution: .001dpcm) {
        @supports (-webkit-appearance: none) {
          vertical-align: -webkit-baseline-middle;
        }
      }

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    &:hover { text-decoration: none; }
  }

  button {
    display: grid;
    place-items: center;
    margin: 1.6rem auto 0;
    width: min(100%, 30rem);
    height: 4rem;
    font-weight: 500;
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
  }
}
</style>
