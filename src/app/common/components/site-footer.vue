<docs></docs>

<template>
  <footer
    class="vc site-footer"
    itemscope
    itemtype="https://schema.org/WPFooter"
    role="contentinfo"
  >
    <small>
      ©<time :datetime="$dayjs().format()" itemprop="copyrightYear">{{ $dayjs().format('YYYY') }}</time> <span itemprop="copyrightHolder">NPO法人 アニマルレスキュー宇宙<span v-if="$mq !== 's'">（動物保護団体）</span></span>
    </small>
  </footer>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {},
  data: function() {
    return {};
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
.site-footer {
  padding: 1.6rem;
  background-color: #424242;
  color: #fff;
  text-align: center;
}
</style>
