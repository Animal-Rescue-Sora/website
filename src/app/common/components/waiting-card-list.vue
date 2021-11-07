<docs></docs>

<template>
  <div
    v-if="$data.items.length"
    v-scroll-lock="_theGlobalModal"
    class="vc waiting-card-list"
  >
    <div
      v-if="$data.xhr.loading.status.loading"
      class="waiting-card-list__loading-spinner"
    >
      <svg viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10" />
      </svg>
    </div>
    <div
      v-if="$data.xhr.loading.status.error"
      class="waiting-card-list__error-msg"
    >
      <p>何らかの原因によりデータの読み込みに失敗しました。時間をおいて再度ページを読み込み直してください。</p>
    </div>
    <div role="list">
      <div
        v-for="(item, i) in $data.items.slice(0, $data.appear)"
        :key="`card-${i}`"
        role="listitem"
      >
        <div class="waiting-card-list__thumb">
          <picture>
            <source
              :srcset="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=1152&h=1440&fm=webp` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440&fm=webp'"
              type="image/webp"
            >
            <img
              :src="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=1152&h=1440` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440'"
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
        <div class="waiting-card-list__summary">
          <div>
            <ul class="detail-list">
              <li v-if="item.name">
                <dl>
                  <dt>お名前: </dt>
                  <dd v-text="item.name" />
                </dl>
              </li>
              <li v-if="item.age">
                <dl>
                  <dt>年齢: </dt>
                  <dd v-text="item.age" />
                </dl>
              </li>
              <li v-if="item.sex.length">
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
              <li v-if="item.rescuedDate">
                <dl>
                  <dt>保護日時: </dt>
                  <dd>
                    <time
                      :datetime="$dayjs(item.rescuedDate).format()"
                      v-text="$dayjs(item.rescuedDate).format('YYYY月MM月DD日')"
                    />
                  </dd>
                </dl>
              </li>
              <li v-if="item.rescuedLocation">
                <dl>
                  <dt>保護場所: </dt>
                  <dd v-text="item.rescuedLocation" />
                </dl>
              </li>
              <li v-if="item.hairPattern">
                <dl>
                  <dt>毛柄: </dt>
                  <dd v-text="item.hairPattern" />
                </dl>
              </li>
              <li v-if="item.breed">
                <dl>
                  <dt>種類: </dt>
                  <dd v-text="item.breed" />
                </dl>
              </li>
              <li
                v-if="item.description"
                class="detail-list__note"
              >
                <dl>
                  <dt>備考: </dt>
                  <dd v-html="item.description" />
                </dl>
              </li>
            </ul>
          </div>
          <modal-trigger-button :modal-id="i + 1">
            詳細を見る
          </modal-trigger-button>
        </div>
      </div>
    </div>
    <button
      v-if="$data.items.length > $data.appear"
      v-ripple
      type="button"
      @click="$data.appear = $data.appear + ($mq === 's' ? 3 : 6)"
    >
      <span>もっと見る</span>
    </button>
    <div
      class="waiting-modal-list"
      role="list"
    >
      <div
        v-for="(item, i) in $data.items"
        :key="`modal-${i}`"
        :class="i + 1 === _theGlobalModal ? 'waiting-modal--active' : null"
        :aria-modal="i + 1 === _theGlobalModal ? true : false"
        :aria-hidden="i + 1 === _theGlobalModal ? false : true"
        class="waiting-modal-list__item"
        role="listitem"
        tabindex="-1"
      >
        <div
          v-ripple
          class="modal-underlay"
          @click="$store.dispatch('theGlobalModal', null)"
        />
        <div class="modal-container">
          <div class="modal-container__scroll-area">
            <div
              v-if="item.youTubeId"
              class="no-padding-container"
            >
              <div class="modal-container__youtube-area">
                <iframe
                  width="560"
                  height="315"
                  :src="youTubeId(item.youTubeId)"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  loading="lazy"
                />
              </div>
            </div>
            <div class="padding-container">
              <div
                :class="!item.gallery.length ? 'modal-container__gallery--standalone' : null"
                class="modal-container__gallery"
              >
                <div class="modal-container__gallery-stage">
                  <picture>
                    <source
                      :srcset="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=1152&h=1440&fm=webp` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440&fm=webp'"
                      type="image/webp"
                    >
                    <img
                      :src="item.thumbnail ? `${item.thumbnail.url}?fit=crop&w=1152&h=1440` : 'https://images.microcms-assets.io/assets/933db45504df41da96d0313559c96860/ef851f6969ca4982965751853a8d0e29/no-image.png?fit=crop&w=1152&h=1440'"
                      width="576"
                      height="720"
                      loading="lazy"
                    >
                  </picture>
                </div>
                <div
                  v-if="item.gallery.length"
                  class="modal-container__gallery-thumb"
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
              <dl>
                <fragment v-if="item.name">
                  <dt>お名前</dt>
                  <dd v-text="item.name" />
                </fragment>
                <fragment v-if="item.age">
                  <dt>年齢</dt>
                  <dd v-text="item.age" />
                </fragment>
                <fragment v-if="item.sex.length">
                  <dt>性別</dt>
                  <dd
                    v-if="item.sex[0] === '男の子'"
                    v-text="`男の子♂`"
                  />
                  <dd
                    v-if="item.sex[0] === '女の子'"
                    v-text="`女の子♀`"
                  />
                </fragment>
                <fragment v-if="item.rescuedDate">
                  <dt>保護日時</dt>
                  <dd>
                    <time
                      :datetime="$dayjs(item.rescuedDate).format()"
                      v-text="$dayjs(item.rescuedDate).format('YYYY月MM月DD日')"
                    />
                  </dd>
                </fragment>
                <fragment v-if="item.rescuedLocation">
                  <dt>保護場所</dt>
                  <dd v-text="item.rescuedLocation" />
                </fragment>
                <fragment v-if="item.hairPattern">
                  <dt>毛柄</dt>
                  <dd v-text="item.hairPattern" />
                </fragment>
                <fragment v-if="item.breed">
                  <dt>種類</dt>
                  <dd v-text="item.breed" />
                </fragment>
                <fragment v-if="item.description">
                  <dt>備考</dt>
                  <dd v-html="item.description" />
                </fragment>
              </dl>
            </div>
          </div>
          <div class="modal-container__btn-area">
            <button
              v-ripple
              type="button"
              v-text="`閉じる`"
              @click="$store.dispatch('theGlobalModal', null)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalTriggerButton from './modal-trigger-button';
import getYouTubeID from 'get-youtube-id';

export default {
  name: '',
  title: '',
  components: {
    modalTriggerButton,
  },
  filter: {},
  props: {},
  data: function() {
    return {
      appear: {
        type: Number,
        default: null,
      },
      items: [],
      xhr: {
        loading: {
          status: {
            loading: true,
            error: false,
          },
        },
      },
      gallery: [],
    };
  },
  computed: {
    _theGlobalModal: function() {
      return this.$store.getters.theGlobalModal;
    },
  },
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
      timeout: 5000,
    }).then((response) => {
      // 里親募集中 OR 里親確定で、里親募集中だけの連想配列する。
      this.$data.items = response.data.contents.filter(function(item) {
        return item.status[0] === '里親募集中';
      });

      // ↑で作った配列とは別で、ギャラリーだけの連想配列を作る
      for (let i = 0; i < this.$data.items.length; i++) {
        this.$data.gallery.push(this.$data.items[i].gallery);
      }

      // ↑で作った、ギャラリー用連想配列をマッピングして、連想配列から普通の配列へと上書きする。
      this.$data.gallery = this.$data.gallery.map(gallery => {
        // 配列ではない → そのまま返却
        if (!Array.isArray(gallery)) return gallery;
        // 配列で、長さ0 → そのまま返却（空配列）
        if (Array.isArray(gallery) && !gallery.length) return gallery;
        // 配列で、長さあり → OBJからURL抽出/配列化
        let images = gallery.map(item => {
          if (item['img']['url']) {
            return item.img.url;
          } else {
            return null;
          }
        }).filter(e=>e);

        return images;
      });
    }).catch((error) => {
      this.$data.xhr.loading.status.error = true;
    }).finally(() => {
      this.$data.xhr.loading.status.loading = false;
    });
  },
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(function() {
      this.$data.appear =  this.$mq === 's' ? 3 : 6;
    });
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {
    youTubeId: function(val) {
      return `https://www.youtube.com/embed/${getYouTubeID(val)}?playsinline=1`;
    },
    galleryChange: function(el) {
      for (let i = 0; i < el.path[3].querySelectorAll('.gallery-thumb__item').length; i++) {
        el.path[3].querySelectorAll('.gallery-thumb__item')[i].classList.remove('gallery-thumb__item--active');
      }

      el.path[2].classList.add('gallery-thumb__item--active');
      el.path[4].childNodes[0].childNodes[0].childNodes[2].setAttribute('src', el.currentTarget.getAttribute('data-src'));
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.waiting-card-list {
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

  [role="list"] {
    &:not(.waiting-modal-list) {
      @media (min-width: 769px) {
        gap: 3rem percentage(math.div(30, 960));
      }

      @media (max-width: 768px) and (min-width: 641px) {
        gap: 2rem percentage(math.div(20, 736));
      }

      @media (min-width: 641px) {
        display: flex;
        flex-wrap: wrap;
      }

      [role="listitem"] {
        overflow: hidden;
        border-radius: .3rem;
        background-color: #fff;
        box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);

        @media (min-width: 769px) {
          width: percentage(math.div(300, 960));
        }

        @media (max-width: 768px) and (min-width: 641px) {
          width: percentage(math.div(358, 736));
        }

        &:not(:first-child) {
          @media (max-width: 640px) {
            margin-top: 1.6rem;
          }
        }
      }
    }
  }

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
    padding: 1.6rem;
  }

  button {
    display: grid;
    place-items: center;
    margin-left: auto;
    margin-right: auto;
    width: min(100%, 30rem);
    height: 4rem;
    font-weight: 500;
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);

    &:not(:only-child) {
      margin-top: 1.6rem;
    }
  }
}

.waiting-modal-list {
  &__item {
    overflow: hidden;
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s cubic-bezier(.25, .46, .45, .94), visibility .5s cubic-bezier(.25, .46, .45, .94);

    &.waiting-modal--active {
      opacity: 1;
      visibility: visible;
    }

    .modal-underlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .72);
      color: #fff;
      cursor: pointer;
      touch-action: manipulation;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .modal-container {
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      width: min(percentage(math.div(288, 320)), 76.8rem);
      height: min(percentage(math.div(1108, 1167)), 100rem);
      border-radius: .3rem;
      background-color: #fff;
      transform: translate(-50%, -50%);

      display: flex;
      flex-direction: column;
    }


    .modal-container__scroll-area {
      overflow-y: auto;
      flex-grow: 1;
      flex-basis: auto;

      .padding-container {
        padding: 1.6rem;
      }

      dt {
        font-weight: 700;

        @media (max-width: 640px) {
          font-size: 1.4rem;
        }

        &:not(:first-child) {
          margin-top: .8rem;
        }
      }

      dd {
        @media (min-width: 641px) {
          padding-left: 1.6rem;
          font-size: 1.8rem;
        }
      }
    }

    .modal-container__youtube-area {
      overflow: hidden;
      position: relative;
      width: 100%;
      vertical-align: middle;
      aspect-ratio: 16 / 9;

      @supports not (aspect-ratio: 16 / 9) {
        &::before {
          display: block;
          padding-top: percentage(math.div(9, 16));
          content: "";
        }
      }

      iframe {
        display: block;
        width: 100%;
        height: 100%;

        @supports not (aspect-ratio: 16 / 9) {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
        }
      }
    }

    .modal-container__gallery {
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

    .modal-container__gallery-stage {
      @media (min-width: 641px) {
        width: 50%;
      }
    }

    .modal-container__gallery-thumb {
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

    .modal-container__btn-area {
      padding: 1.6rem;
      background-color: #f5f5f5;
      flex-shrink: 0;
      flex-basis: auto;
    }
  }
}
</style>
