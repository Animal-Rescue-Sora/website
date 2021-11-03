<docs></docs>

<template>
  <div class="vc google-map">
    <div>
      <iframe
        :src="$props.src"
        width="768"
        height="475"
        allowfullscreen=""
        loading="lazy"
      />
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
      default: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1652.3768220443976!2d136.18805627619022!3d34.075828995126045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x60067f97e7339b33%3A0xf50fb5a468d59729!2z5LiJ6YeN55yM5bC-6bey5biC5Lit5p2R55S677yXIOWwvum3sumnhQ!3m2!1d34.0747241!2d136.1902624!4m5!1s0x60067fbe82203797%3A0x943d824b26ea3f92!2z44CSNTE5LTM2NTgg5LiJ6YeN55yM5bC-6bey5biC5YCJ44OO6LC355S677yR77yR4oiS77yS77yX!3m2!1d34.076933!2d136.1873159!5e0!3m2!1sja!2sjp!4v1635347870574!5m2!1sja!2sjp'
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

.google-map {
  > div {
    position: relative;
    overflow: hidden;

    margin: 0 auto;
    width: min(100%, 76.8rem) ;

    &::before {
      display: block;
      padding-top: percentage(math.div(1, 1.618));
      content: "";
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}
</style>
