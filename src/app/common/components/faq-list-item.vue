<docs></docs>

<template>
  <div
    :class="{ 'faq-list-item--active' : active }"
    class="vc faq-list-item"
    role="listitem"
  >
    <div
      v-ripple
      itemscope
      itemprop="mainEntity"
      itemtype="https://schema.org/Question"
      @click="$data.active = !$data.active"
    >
      <div>
        <div>
          <i>Q</i>
          <h3>
            <span itemprop="name">
              <slot name="question" />
            </span>
          </h3>
        </div>
        <i aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <g fill="var(--petemo-website-brown)">
              <path d="M0 6h14v2H0z" />
              <path d="M6 0h2v14H6z" />
            </g>
          </svg>
        </i>
      </div>
    </div>

    <slide-up-down
      :active="$data.active"
      :duration="250"
      itemscope
      itemprop="acceptedAnswer"
      itemtype="https://schema.org/Answer"
    >
      <div>
        <i>A</i>
        <div>
          <p itemprop="text">
            <slot name="answer" />
          </p>
          <div v-if="$slots.default">
            <slot />
          </div>
        </div>
      </div>
    </slide-up-down>
  </div>
</template>

<script>
import slideUpDown from 'vue-slide-up-down';

export default {
  name: '',
  title: '',
  components: {
    slideUpDown,
  },
  filter: {},
  props: {
    'status': {
      type: String,
      default: null,
    }
  },
  data: function() {
    return {
      active: false,
    };
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(function() {
      if (this.$props.status === 'active') {
        this.$data.active = true;
      }
    });
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

.vc {
  &.faq-list-item {
    border-radius: .3rem;
    background-color: #f5f5f5;
    transition: box-shadow .5s cubic-bezier(.39, .575, .565, 1);

    [itemprop="mainEntity"] > div > div,
    [itemprop="acceptedAnswer"] > div {
      display: flex;
      align-items: baseline;

      i {
        display: block;
        font-weight: 700;
        font-size: 2rem;

        @media (min-width: 641px) {
          margin-right: 3.2rem;
        }

        @media (max-width: 640px) {
          margin-right: .8rem;
        }
      }
    }

    &.faq-list-item--active {
      box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);

      [itemprop="mainEntity"] {
        > div {
          > i {
            transform: rotate(-360deg);

            svg {
              path {
                &:last-child {
                  transform: rotate(90deg);
                }
              }
            }
          }
        }
      }
    }

    [itemprop="mainEntity"] {
      border-radius: .3rem .3rem 0 0;
      cursor: pointer;
      touch-action: manipulation;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

      @media (min-width: 641px) {
        padding: percentage(math.div(24, 1280)) percentage(math.div(24, 1280));
      }

      @media (max-width: 640px) {
        padding: percentage(math.div(12, 296)) percentage(math.div(12, 296));
      }

      h3 {
        font-size: 1.6rem;
        font-weight: 500;
      }

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: .8rem;

        > i {
          display: block;
          width: 1.4rem;
          height: 1.4rem;
          transition: transform .5s cubic-bezier(.175, .885, .32, 1.275);

          svg {
            display: inherit;
            width: inherit;
            height: inherit;

            path {
              fill: currentColor;
              transform-origin: 50% 50%;
              transition: transform .5s cubic-bezier(.175, .885, .32, 1.275);
            }
          }
        }
      }
    }

    [itemprop="acceptedAnswer"] {
      transition-timing-function: cubic-bezier(.445, .05, .55, .95);

      > div {
        @media (min-width: 641px) {
          padding: 0 percentage(math.div(24, 1280)) percentage(math.div(32, 1280));
        }

        @media (max-width: 640px) {
          padding: 0 percentage(math.div(12, 296)) percentage(math.div(20, 296));
        }
      }
    }

    [itemprop="text"] {
      + div {
        &:not(:empty) {
          margin-top: 1.6rem;
        }
      }
    }

    + .faq-list-item {
      margin-top: 1.6rem;
    }
  }
}
</style>
