<docs></docs>

<template>
  <div
    class="vc global-navigation-item"
    role="listitem"
  >
    <a
      :href="$props.href"
      itemprop="url"
    >
      <icn-arrow-downward />
      <span itemprop="name">
        <slot />
      </span>
    </a>
  </div>
</template>

<script>
import icnArrowDownward from './icons/arrow-downward';

export default {
  name: '',
  title: '',
  components: {
    icnArrowDownward,
  },
  filter: {},
  props: {
    'href': {
      type: String,
      default: null,
    },
  },
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

.global-navigation-item {
  font-size: 1.4rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: currentColor;

    i {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>
