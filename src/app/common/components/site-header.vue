<docs></docs>

<template>
  <header class="vc site-header">
    <div>
      <logo width="80" height="35" />
      <slot />
      <fragment v-if="$mq !== 'd'">
        <button
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
      </fragment>
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
  z-index: 2;
  top: 0;
  padding: .8rem min(percentage(math.div(16, 320)), 1.6rem);
  background-color: #fff;
  box-shadow: 0 #{math.div(3, 10)}rem #{math.div(6, 10)}rem rgba(#000, .16), 0 #{math.div(3, 10)}rem #{math.div(6, 10)}rem rgba(#000, .23);

  > div {
    margin: 0 auto;
    width: min(100%, 96rem);

    display: flex;
    align-items: center;
    justify-content: space-between;
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
