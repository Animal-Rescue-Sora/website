<docs></docs>

<template>
  <div
    :data-global-menu-active="_theGlobalMenu"
    class="vc page"
  >
    <slot name="site-header" />
    <slot />
    <slot name="site-footer" />
    <slot name="contact-bar" />
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
    return {};
  },
  computed: {
    _theGlobalMenu: function() {
      return this.$store.getters.theGlobalMenu;
    },
  },
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

<style lang="scss">
/*! purgecss start ignore */
.v-ripple {
  &__container {
    color: inherit;
    border-radius: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
    contain: strict;
  }

  &__animation {
    color: inherit;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: currentColor;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    will-change: transform, opacity;

    &--enter {
      transition: none;
    }

    &--in {
      transition: transform .25s cubic-bezier(.4, 0, .2, 1), opacity .1s cubic-bezier(.4, 0, .2, 1);
    }

    &--out {
      transition:opacity .3s cubic-bezier(.4, 0, .2, 1);
    }
  }
}
/*! purgecss end ignore */
</style>

<style lang="scss" scoped>
.page {
  min-height: inherit;
}
</style>
