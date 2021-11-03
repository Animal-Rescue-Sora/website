<docs></docs>

<template>
  <div class="vc decision-to-foster-parent-slider">
    <div
      ref="swiper"
      class="swiper"
    >
      <div class="swiper-wrapper">
        <div
          v-for="(item, i) in $data.items"
          :key="i"
          class="decision-to-foster-parent-slider__item swiper-slide"
        >
          <div class="decision-to-foster-parent-slider__thumb">
            <picture>
              <source
                :srcset="item.thumbnail ? `${item.thumbnail}?fit=crop&w=1152&h=1440&fm=webp` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440&fm=webp'"
                type="image/webp"
              >
              <img
                :src="item.thumbnail ? `${item.thumbnail}?fit=crop&w=1152&h=1440` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440'"
                width="576"
                height="720"
                loading="lazy"
              >
            </picture>
            <span
              :class="[(item.status[0] === '里親募集中' ? 'status--waiting' : null), (item.status[0] === '里親確定' ? 'status--decision' : null)]"
              v-text="item.status[0]"
            />
          </div>
          <div class="decision-to-foster-parent-slider__summary">
            <div>
              <ul class="detail-list">
                <li>
                  <dl>
                    <dt>お名前: </dt>
                    <dd v-html="item.name" />
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>年齢: </dt>
                    <dd v-html="item.age" />
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>性別: </dt>
                    <dd
                      v-if="item.sex[0] === '男の子'"
                      v-text="`男の子♂`"
                    />
                    <dd
                      v-if="item.sex[0] === '女の子'"
                      v-text="`女の子♀`"
                    />
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>毛柄: </dt>
                    <dd v-text="item.hairPattern" />
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>種類: </dt>
                    <dd v-text="item.breed" />
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>備考: </dt>
                    <dd v-html="item.description" />
                  </dl>
                </li>
              </ul>
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
      class="decision-to-foster-parent-slider__btn cdecision-to-foster-parent-slider__btn--prev swiper-button-prev"
      type="button"
    />
    <button
      v-ripple
      ref="swiperButtonNext"
      class="decision-to-foster-parent-slider__btn decision-to-foster-parent-slider__btn--next swiper-button-next"
      type="button"
    />
  </div>
</template>

<script>
import {Swiper, Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([
  Autoplay,
  Navigation,
  Pagination,
]);

export default {
  name: '',
  title: '',
  components: {},
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
      url: '/animals',
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': 'c5704986ff11430fbcd965af9b4539a11b65'
      },
      params: {
        limit: 100
      },
      timeout: 3000,
    }).then((response) => {
      this.$data.items = response.data.contents.filter(function(item) {
        return item.status[0] === '里親確定';
      });
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

.decision-to-foster-parent-slider {
  &__thumb {
    position: relative;

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
    background-color: #fff;
    padding: 1.6rem;
  }
}

.swiper {
  overflow: visible;
  margin: 0 auto;
  width: min(100%, 96rem);
}

.swiper-slide {
  overflow: hidden;
  border-radius: .3rem;
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
