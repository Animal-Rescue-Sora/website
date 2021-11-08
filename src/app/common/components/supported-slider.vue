<docs></docs>

<template>
  <div class="vc supported-slider">
    <div
      v-if="$data.xhr.loading.status.loading"
      class="supported-slider__loading-spinner"
    >
      <svg viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10" />
      </svg>
    </div>
    <div
      v-if="$data.xhr.loading.status.error"
      class="supported-slider__error-msg"
    >
      <p>何らかの原因によりデータの読み込みに失敗しました。時間をおいて再度ページを読み込み直してください。</p>
    </div>
    <div
      ref="swiper"
      class="swiper"
    >
      <div class="swiper-wrapper">
        <div
          v-for="(item, i) in $data.items"
          :key="i"
          class="supported-slider__item swiper-slide"
        >
          <div class="supported-slider__thumb">
            <picture>
              <source
                :srcset="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=1152&h=1440&fm=webp` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440&fm=webp'"
                type="image/webp"
              >
              <img
                :alt="item.name"
                :src="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=1152&h=1440` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440'"
                width="576"
                height="720"
                loading="lazy"
              >
            </picture>
          </div>
          <div class="supported-slider__summary">
            <div>
              <p v-if="item.href">
                <a
                  :href="item.href ? item.href : null"
                  target="_blank"
                  rel="noopener"
                >
                  <span v-text="item.text" />
                  <icn-open-window />
                </a>
              </p>
              <p v-else>
                <span v-text="item.text" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="swiperPagination"
        class="swiper-pagination"
      />
    </div>
    <button
      v-ripple
      ref="swiperButtonPrev"
      class="supported-slider__btn csupported-slider__btn--prev swiper-button-prev"
      type="button"
    />
    <button
      v-ripple
      ref="swiperButtonNext"
      class="supported-slider__btn supported-slider__btn--next swiper-button-next"
      type="button"
    />
  </div>
</template>

<script>
import icnOpenWindow from './icons/open-window';

import {Swiper, Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([
  Autoplay,
  Navigation,
  Pagination,
]);

export default {
  name: '',
  title: '',
  components: {
    icnOpenWindow,
  },
  filter: {},
  props: {},
  data: function() {
    return {
      swiper: null,
      swiperOptions: {},
      items: [],
      xhr: {
        loading: {
          status: {
            loading: true,
            error: false,
          },
        },
      },
    };
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {
    this.axios({
      method: 'get',
      baseURL: 'https://animal-rescue-sora.microcms.io/api/v1',
      url: '/support',
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': 'c5704986ff11430fbcd965af9b4539a11b65'
      },
      params: {
        limit: 100
      },
      timeout: 3000,
    }).then((response) => {
      this.$data.items = response.data.contents;
    }).catch((error) => {
      this.$data.xhr.loading.status.error = true;
    }).finally(() => {
      this.$data.xhr.loading.status.loading = false;
    });
  },
  beforeMount: function() {},
  mounted: function() {
    this.$data.swiperOptions = {
      autoplay: {
        delay: 5000,
      },
      grabCursor: true,
      grabCursor: 1,
      slidesPerView: 'auto',
      centerInsufficientSlides: true,
      followFinger: true,
      speed: 500,
      navigation: {
        nextEl: this.$refs.swiperButtonNext,
        prevEl: this.$refs.swiperButtonPrev,
      },
      pagination: {
        el: this.$refs.swiperPagination,
        clickable: true,
      },
      breakpoints: {
        320: {
          centeredSlides: true,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
        641: {
          centeredSlides: false,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        769: {
          centeredSlides: false,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
      },
    };

    this.$nextTick(function() {
      this.$data.swiper = new Swiper(this.$refs.swiper, this.$data.swiperOptions);

      this.$data.swiper.on('breakpoint', () => {
        this.swiper.pagination.render();
        this.swiper.navigation.init();
      });
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

.supported-slider {
  position: relative;

  &__loading-spinner {
    svg {
      display: block;
      margin: auto;
      width: 10rem;
      height: 10rem;
      animation: rotate 2s linear infinite;
      transform-origin: center center;

      circle {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
      }
    }
  }

  &__error-msg {
    p {
      color: #f00;
      font-weight: 700;
      text-align: center;
    }
  }

  &__thumb {
    picture {
      overflow: hidden;
      border-radius: .3rem .3rem 0 0;

      img {
        backface-visibility: hidden;
      }
    }

    span {
      position: absolute;
      z-index: 1;
      bottom: .8rem;
      left: .8rem;
      padding: .4rem .8rem;
      border-radius: .3rem;
      color: #fff;

      &.status--waiting { background-color: #f90; }
      &.status--decision { background-color: #146eb4; }
    }
  }

  &__summary {
    padding: 1.6rem;

    a {
      ::v-deep .icn-open-window {
        display: inline;
        vertical-align: top;

        @media not all and (min-resolution: .001dpcm) {
          @supports (-webkit-appearance: none) {
            vertical-align: -webkit-baseline-middle;
          }
        }

        svg {
          width: 2.4rem;
          height: 2.4rem;
        }
      }

      &:hover { text-decoration: none; }
    }
  }
}

.swiper {
  overflow: visible;
  margin: 0 auto;
  width: min(100%, 96rem);
}

.swiper-wrapper {
  transition-timing-function: cubic-bezier(.4, .1, .16, .96);
}

.swiper-slide {
  overflow: hidden;
  height: auto;
  border-radius: .3rem;
  background-color: #fff;
  box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);

  @media (min-width: 769px) {
    width: percentage(math.div(300, 960));
  }

  @media (max-width: 768px) and (min-width: 641px) {
    width: percentage(math.div(358, 736));
  }
}

.swiper-button-prev,
.swiper-button-next {
  margin-top: 0;
  border-radius: .3rem;
  background-color: rgba(0, 0, 0, .4);
  background-size: contain;
  color: #fff;
  transform: translateY(-50%);

  @media (min-width: 641px) {
    width: 5rem;
    height: 10rem;
  }

  @media (max-width: 640px) {
    width: 3rem;
    height: 6rem;
  }
}

::v-deep .swiper-button-prev {
  left: 0;
}

::v-deep .swiper-button-next {
  right: 0;
}

.swiper-pagination {
  bottom: 0;

  @media (min-width: 641px) {
    transform: translateY(150%);
  }

  @media (max-width: 640px) {
    transform: translateY(125%);
  }
}

::v-deep .swiper-pagination-bullet-active {
  background-color: #333e48;
}
</style>
