<docs></docs>

<template>
  <i
    class="vc icn-arrow-downward"
    aria-hidden="true"
  >
    <svg
      :width="$props.size"
      :height="$props.size"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
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
  &.icn-arrow-downward {
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
