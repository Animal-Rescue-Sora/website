<docs></docs>

<template>
  <div
    itemscope
    itemtype="https://schema.org/FAQPage"
    class="vc faq-list"
  >
    <div
      v-if="$data.xhr.loading.status.loading"
      class="faq-list__loading-spinner"
    >
      <svg viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10" />
      </svg>
    </div>
    <div
      v-if="$data.xhr.loading.status.error"
      class="faq-list__error-msg"
    >
      <p>何らかの原因によりデータの読み込みに失敗しました。時間をおいて再度ページを読み込み直してください。</p>
    </div>

    <div role="list">
      <faq-list-item
        v-for="(item, i) in $data.items"
        :key="i"
      >
        <template #question>
          {{ item.question }}
        </template>
        <template #answer>
          {{ item.answer }}
        </template>
      </faq-list-item>
    </div>
  </div>
</template>

<script>
import faqListItem from './faq-list-item';

export default {
  name: '',
  title: '',
  components: {
    faqListItem
  },
  filter: {},
  props: {
    'path': {
      type: String,
      default: '',
    },
  },
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
    };
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {
    this.axios({
      method: 'get',
      baseURL: 'https://animal-rescue-sora.microcms.io/api/v1',
      url: '/faq',
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': 'c5704986ff11430fbcd965af9b4539a11b65'
      },
      params: {
        limit: 100
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
.faq-list {
  margin: 0 auto 2.4rem;

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

  .heading-2 + & {
    margin-top: 2.4rem;
  }
}
</style>
