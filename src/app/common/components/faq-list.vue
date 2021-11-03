<docs></docs>

<template>
  <div
    itemscope
    itemtype="https://schema.org/FAQPage"
    class="vc faq-list"
  >
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

  .heading-2 + & {
    margin-top: 2.4rem;
  }
}
</style>
