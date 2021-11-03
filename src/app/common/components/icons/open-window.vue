<docs></docs>

<template>
  <i
    class="vc icn-open-window"
    aria-hidden="true"
  >
    <svg
      :width="$props.size"
      :height="$props.size"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  </i>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    'size': {
      type: [
        String,
        Number,
      ],
      default: 24,
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
.vc {
  &.icn-open-window {
    display: block;
    aspect-ratio: 1 / 1;

    @supports (width: fit-content) {
      // safari 15 でも正常に動作してない為、、
      // width: fit-content;
    }

    svg {
      display: inherit;
      width: inherit;
      height: inherit;
    }
  }
}
</style>
