<docs></docs>

<template>
  <div
    :id="$props.id ? $props.id : null"
    :tabindex="$props.id ? '-1' : null"
    class="vc heading-2"
  >
    <h2>
      <i aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
          <path d="M7.925 12.95c1.334 2.959.926 6.028-.91 6.856-1.836.828-4.406-.898-5.74-3.856-1.334-2.958-.926-6.027.91-6.855 1.836-.829 4.406.897 5.74 3.855zM26.076 12.95c-1.334 2.959-.926 6.028.91 6.856 1.836.828 4.406-.898 5.74-3.856 1.334-2.958.926-6.027-.91-6.855-1.836-.829-4.406.897-5.74 3.855zM15.73 7.019c.684 3.172-.358 6.087-2.328 6.512-1.97.424-4.12-1.803-4.803-4.975-.684-3.172.359-6.087 2.328-6.511 1.969-.424 4.119 1.803 4.803 4.974zM18.222 7.022c-.683 3.172.358 6.087 2.327 6.511 1.969.425 4.12-1.803 4.803-4.974.684-3.172-.358-6.087-2.328-6.511-1.968-.425-4.12 1.802-4.802 4.974zM13.265 17.622c-.481.83-2.708 3.578-4.248 4.515-1.54.937-3.45 2.31-3.13 5.462.32 3.153 3.554 4.502 5.683 4.382 2.129-.119 6.142-.511 9.007-.114 2.865.397 6.48.096 7.328-2.922s-1.047-4.941-2.525-6.032c-1.478-1.091-3.946-4.353-4.706-5.85-.76-1.497-4.63-4.239-7.41.559z" />
        </svg>
      </i>
      <span v-if="$slots.default">
        <slot />
      </span>
      <fragment v-if="$mq !== 's'">
        <span v-if="$slots['desktop']">
          <slot name="desktop" />
        </span>
      </fragment>
      <fragment v-else>
        <span v-if="$slots['mobile']">
          <slot name="mobile" />
        </span>
      </fragment>
      <i aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
          <path d="M7.925 12.95c1.334 2.959.926 6.028-.91 6.856-1.836.828-4.406-.898-5.74-3.856-1.334-2.958-.926-6.027.91-6.855 1.836-.829 4.406.897 5.74 3.855zM26.076 12.95c-1.334 2.959-.926 6.028.91 6.856 1.836.828 4.406-.898 5.74-3.856 1.334-2.958.926-6.027-.91-6.855-1.836-.829-4.406.897-5.74 3.855zM15.73 7.019c.684 3.172-.358 6.087-2.328 6.512-1.97.424-4.12-1.803-4.803-4.975-.684-3.172.359-6.087 2.328-6.511 1.969-.424 4.119 1.803 4.803 4.974zM18.222 7.022c-.683 3.172.358 6.087 2.327 6.511 1.969.425 4.12-1.803 4.803-4.974.684-3.172-.358-6.087-2.328-6.511-1.968-.425-4.12 1.802-4.802 4.974zM13.265 17.622c-.481.83-2.708 3.578-4.248 4.515-1.54.937-3.45 2.31-3.13 5.462.32 3.153 3.554 4.502 5.683 4.382 2.129-.119 6.142-.511 9.007-.114 2.865.397 6.48.096 7.328-2.922s-1.047-4.941-2.525-6.032c-1.478-1.091-3.946-4.353-4.706-5.85-.76-1.497-4.63-4.239-7.41.559z" />
        </svg>
      </i>
    </h2>
  </div>
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
.heading-2 {
  margin: 0 auto 1.6rem;
  text-align: center;

  &:not(:first-child) {
    margin-top: 5.6rem;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    @media (min-width: 641px) {
      font-size: 3.2rem;
    }

    @media (max-width: 640px) {
      font-size: 2.4rem;
    }

    i {
      display: block;

      @media (min-width: 641px) {
        width: 3.2rem;
        height: 3.2rem;
        transform: translateY(-.2rem);
      }

      @media (max-width: 640px) {
        width: 2.4rem;
        height: 2.4rem;
        transform: translateY(-.1rem);
      }

      svg {
        display: inherit;
        width: inherit;
        height: inherit;

        path {
          fill: currentColor;
        }
      }
    }
  }
}
</style>
