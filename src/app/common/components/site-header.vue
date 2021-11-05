<docs></docs>

<template>
  <header
    v-scroll-lock="_theGlobalMenu"
    class="vc site-header"
  >
    <div
      v-if="$mq !== 'd'"
      role="presentation"
    >
      <div
        v-ripple
        @click="$store.dispatch('theGlobalMenu', _theGlobalMenu)"
      />
    </div>
    <slot v-if="$mq !== 'd'" />
    <div>
      <div>
        <logo width="80" height="35" />
        <slot v-if="$mq === 'd'" />
        <button
          v-if="$mq !== 'd'"
          v-ripple
          type="button"
          @click="$store.dispatch('theGlobalMenu', _theGlobalMenu)"
        >
          <span role="presentation">
            <span role="presentation" />
            <span role="presentation" />
            <span role="presentation" />
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import logo from './logo';

export default {
  name: '',
  title: '',
  components: {
    logo,
  },
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

<style lang="scss" scoped>
@use "sass:math";

.site-header {
  position: sticky;
  z-index: 11;
  top: 0;
  box-shadow: 0 #{math.div(3, 10)}rem #{math.div(6, 10)}rem rgba(#000, .16), 0 #{math.div(3, 10)}rem #{math.div(6, 10)}rem rgba(#000, .23);

  > div {
    &[role="presentation"] {
      @media (max-width: 898px) {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        color: #fff;
        pointer-events: none;
      }

      > div {
        height: 100%;
        background-color: rgba(0, 0, 0, .72);
        transition: transform .5s cubic-bezier(.075, .82, .165, 1);
        transform: translateX(100%);
        pointer-events: auto;

        [data-global-menu-active="true"] & {
          transform: translateX(0);
        }
      }
    }

    &:not([role="presentation"]) {
      position: relative;
      padding: .8rem min(percentage(math.div(16, 320)), 1.6rem);
      background-color: #fff;

      > div {
        margin: 0 auto;
        width: min(100%, 96rem);

        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    background-color: #424242;
    color: #fff;
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    > span {
      position: relative;
      display: inherit;
      flex-direction: column;
      justify-content: center;
      width: 2.4rem;
      height: 1.8rem;
      transition: transform .25s cubic-bezier(.175, .885, .32, 1.275);

      [data-global-menu-active="true"] & {
        transform: rotate(180deg);
      }

      &::before,
      &::after {
        position: absolute;
        top: 50%;
        margin-top: -.1rem;
        width: 100%;
        height: .2rem;
        border-radius: .2rem;
        background-color: #fff;
        transition: transform .25s cubic-bezier(.67, -.08, .56, 1.51);
        transform: rotate(0);
        content: "";
      }

      &::before {
        transition-delay: .48s;

        [data-global-menu-active="true"] & {
          transform: rotate(45deg);
        }
      }

      &::after {
        transition-delay: .56s;

        [data-global-menu-active="true"] & {
          transform: rotate(-45deg);
        }
      }

      > span {
        height: .2rem;
        background-color: #fff;
        transition: transform .25s cubic-bezier(.175, .885, .32, 1.275);

        [data-global-menu-active="true"] & {
          transform: scaleX(0);
        }

        &:nth-child(1) {
          transform-origin: 0% 50%;
          transition-delay: .24s;
        }

        &:nth-child(2) {
          transition-delay: .32s;
        }

        &:nth-child(3) {
          transform-origin: 100% 50%;
          transition-delay: .4s;
        }

        + span {
          margin-top: .3rem;
        }
      }
    }
  }
}
</style>
