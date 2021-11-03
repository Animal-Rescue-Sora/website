<docs></docs>

<template>
  <button
    v-ripple
    @click="$store.dispatch('theGlobalModal', $props.modalId)"
    type="button"
    class="vc modal-trigger-button"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    'modal-id': {
      type: Number,
      default: 1,
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

.vc {
  &.modal-trigger-button {
    display: grid;
    place-items: center;
    margin-top: 1.6rem;
    width: 100%;
    height: 4rem;
    font-weight: 500;
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
  }
}
</style>
