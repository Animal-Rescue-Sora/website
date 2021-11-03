<docs></docs>

<template>
  <section
    :id="$props.id ? $props.id : null"
    :tabindex="$props.id ? '-1' : null"
    :class="$props.classification ? `page-section--${$props.classification}` : null"
    :style="{ backgroundImage: `url(${$props.src})` }"
    class="vc page-section"
  >
    <div>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    'id': {
      type: String,
      default: null,
    },
    'classification': {
      type: String,
      default: null,
    },
    'src': {
      type: String,
      default: null,
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

.page-section {
  position: relative;
  padding: 0 min(percentage(math.div(16, 320)), 1.6rem);

  &--animal-01 {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;

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
  }

  &--animal-02 {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;

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
  }

  &--mono-tone-01 { background-color: #fafafa; }
  &--pale-tone-01 { background-color: #fffde7; }
  &--pale-tone-02 { background-color: #fce4ec; }
  &--pale-tone-03 { background-color: #e3f2fd; }

  &:not(.page-section--full-view-width) {
    > div {
      margin: 0 auto;
      width: min(100%, 96rem);
    }
  }

  > div {
    position: relative;

    @media (min-width: 641px) {
      padding: 4rem 0;
    }

    @media (max-width: 640px) {
      padding: 2.4rem 0;
    }

    .heading-2 {
      + p {
        margin-top: 1.6rem;
        text-align: center;

        br {
          @media (max-width: 640px) {
            display: none;
          }
        }

        + p {
          margin-top: 1.6rem;
          text-align: center;

          br {
            @media (max-width: 640px) {
              display: none;
            }
          }
        }
      }
    }
  }

  &--full-view-width {
    overflow: hidden;

    > div {
      @media (min-width: 641px) {
        padding: 4rem 0 6rem;
      }

      @media (max-width: 640px) {
        padding: 2.4rem 0 4rem;
      }
    }
  }
}
</style>
