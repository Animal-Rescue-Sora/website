<docs></docs>

<template>
  <nav
    itemscope
    itemtype="https://schema.org/SiteNavigationElement"
    aria-label="メインメニュー"
    class="vc global-navigation"
  >
    <slot />
  </nav>
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
@use "sass:math";

.global-navigation {
  @media (min-width: 899px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: .8rem;
  }

  @media (max-width: 898px) {
    display: none;
  }
}
</style>
