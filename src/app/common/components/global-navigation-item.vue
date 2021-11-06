<docs></docs>

<template>
  <div
    v-if="!$props.hidden"
    class="vc global-navigation-item"
    role="listitem"
  >
    <a
      v-ripple
      :href="$props.href"
      itemprop="url"
      @click="$store.dispatch('theGlobalMenu', _theGlobalMenu)"
    >
      <icn-arrow-downward v-if="$mq === 'd'" />
      <span itemprop="name">
        <slot />
      </span>
      <icn-arrow-downward v-if="$mq !== 'd'" />
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
    'hidden': {
      type: Boolean,
      default: false,
    },
  },
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

<style lang="scss" scoped>
@use "sass:math";

.global-navigation-item {
  @media (min-width: 899px) {
    font-size: 1.4rem;
  }

  @media (max-width: 898px) {
    font-size: 2rem;
    border-bottom: .1rem solid #333;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: currentColor;

    @media (min-width: 899px) {
      border-radius: .3rem;
    }

    @media (max-width: 898px) {
      padding: 1.6rem;
    }

    span {
      @media (max-width: 898px) {
        flex-grow: 1;
      }
    }

    i {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>
