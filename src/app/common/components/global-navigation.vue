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
    overflow-y: auto;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 5.6rem;
    width: 100%;
    height: 100vh;
    background-color: #333e48;
    color: #fff;
    transition: transform .25s cubic-bezier(.455, .03, .515, .955) .25s;
    transform: translateX(-100%);
  }

  @media (max-width: 898px) and (min-width: 641px) {
    max-width: 32rem;
  }

  @media (max-width: 640px) {
    max-width: 24rem;
  }

  [data-global-menu-active="true"] & {
    @media (max-width: 898px) {
      transform: translateX(0);
    }
  }
}
</style>
