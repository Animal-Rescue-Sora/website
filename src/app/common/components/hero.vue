<docs></docs>

<template>
  <div
    :style="{ backgroundImage: `url(${$props.src})` }"
    class="vc hero"
    role="img"
  >
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    'src': {
      type: String,
      default: null
    }
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

.hero {
  position: relative;
  padding: 0 min(percentage(math.div(16, 320)), 1.6rem);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  display: grid;
  place-items: center;

  @media (min-width: 641px) {
    height: 38.8rem;
  }

  @media (max-width: 640px) {
    height: 30rem;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .32);
    backdrop-filter: blur(.2rem);
    content: "";
  }

  > div {
    position: relative;
    text-align: center;
    color: #fff;

    h1 {
      @media (min-width: 899px) {
        font-size: 4.8rem;
      }

      @media (max-width: 898px) and (min-width: 641px) {
        font-size: 3.4rem;
      }

      + p {
        &::before {
          display: block;
          width: 4rem;
          height: .1rem;
          background-color: #fff;
          content: "";

          @media (min-width: 641px) {
            margin: 2.4rem auto;
          }

          @media (max-width: 640px) {
            margin: 1.6rem auto;
          }
        }
      }
    }

    p {
      font-size: 1.4rem;
    }
  }
}
</style>
