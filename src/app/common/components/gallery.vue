<docs></docs>

<template>
  <div
    :class="!item.gallery.length ? 'gallery--standalone' : null"
    class="gallery"
  >
    <div class="gallery-stage">
      <picture>
        <source
          :srcset="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=1152&h=1440&fm=webp` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440&fm=webp'"
          type="image/webp"
        >
        <img
          ref="theGallery"
          :src="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=1152&h=1440` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440'"
          width="576"
          height="720"
          loading="lazy"
        >
      </picture>
    </div>
    <div
      v-if="item.gallery.length"
      ref="galleryThumbs"
      class="gallery-thumb"
    >
      <div class="gallery-thumb__item gallery-thumb__item--active">
        <picture v-ripple>
          <source
            :srcset="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=324&h=405&fm=webp` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=324&h=405&fm=webp'"
            type="image/webp"
          >
          <img
            :src="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=324&h=405` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=324&h=405'"
            :data-src="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=1152&h=1440` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440'"
            width="576"
            height="720"
            loading="lazy"
            @click="galleryChange"
          >
        </picture>
      </div>
      <div
        v-for="(photo, i) in item.gallery"
        :key="`gallery-${i}`"
        class="gallery-thumb__item"
      >
        <picture v-ripple>
          <source
            :srcset="photo.img.url ? `${photo.img.url}?fit=crop&w=324&h=405&fm=webp` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=324&h=405&fm=webp'"
            type="image/webp"
          >
          <img
            :src="photo.img.url ? `${photo.img.url}?fit=crop&w=324&h=405` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=324&h=405'"
            :data-src="photo.img.url ? `${photo.img.url}?fit=crop&w=1152&h=1440` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440'"
            width="576"
            height="720"
            loading="lazy"
            @click="galleryChange"
          >
        </picture>
      </div>
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
    'item': {
      type: Object,
      default: function() {
        return {
        };
      },
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
  methods: {
    galleryChange: function(el) {
      for (let i = 0; i < this.$refs.galleryThumbs.querySelectorAll('.gallery-thumb__item').length; i++) {
        this.$refs.galleryThumbs.querySelectorAll('.gallery-thumb__item')[i].classList.remove('gallery-thumb__item--active');
      }

      el.currentTarget.closest('.gallery-thumb__item').classList.add('gallery-thumb__item--active');
      this.$refs.theGallery.setAttribute('src', el.currentTarget.getAttribute('data-src'));
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.gallery {
  border-bottom: .1rem solid #e6e6e6;

  &--standalone {
    @media (min-width: 641px) {
      justify-content: center;
    }
  }

  @media (min-width: 641px) {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2.4rem;
    padding-bottom: 2.4rem;
    gap: 1.6rem percentage(math.div(16, 736));
  }

  @media (max-width: 640px) {
    margin-bottom: 1.6rem;
    padding-bottom: 1.6rem;
  }

  img {
    backface-visibility: hidden;
  }
}

.gallery-stage {
  @media (min-width: 641px) {
    width: 50%;
  }
}

.gallery-thumb {
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 641px) {
    width: 50%;
    gap: 1.5rem percentage(math.div(15, 360));
  }

  @media (max-width: 640px) {
    margin-top: 1.6rem;
    gap: 1.6rem;
  }

  .gallery-thumb__item {
    @media (min-width: 641px) {
      width: percentage(math.div(110, 360));
    }

    @media (max-width: 640px) {
      width: 5.2rem;
    }

    picture {
      box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
      transition: box-shadow .5s cubic-bezier(.175, .885, .32, .275);

      img {
        transition: opacity .5s cubic-bezier(.175, .885, .32, .275);
        touch-action: manipulation;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        cursor: pointer;
      }
    }

    &--active {
      picture {
        pointer-events: none;
        box-shadow: none;

        img {
          opacity: .48;
        }
      }
    }
  }
}
</style>
