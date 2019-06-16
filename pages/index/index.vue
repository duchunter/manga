<template>
  <div class="content clearfix">
    <div class="section-block pt-0">
      <div
        class="full-width"
        style="background-color: black"
      >
        <el-carousel
          trigger="click"
          height="80vh"
        >
          <el-carousel-item
            v-for="item in 4"
            :key="item"
          >
            <div
              class="slider-item-container"
              :style="`background-image: url('/img/bg${item}.jpg');`"
            >
              <!--<div class="slider-item-inner">-->
              <!--<h1 class="weight-semi-bold color-white">-->
              <!--Manga name-->
              <!--</h1>-->
              <!--</div>-->
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- Fullscreen Slider Section -->

    <!-- Fullscreen Slider Section End -->

    <!-- Tabs Button Nav -->
    <div class="section-block bkg-white pt-0">
      <div class="row">
        <div class="column width-8">
          <h2 class="weight-semi-bold mb-50">
            Newest
          </h2>
        </div>
      </div>

      <div class="row">
        <div
          v-loading="isLoading"
          class="column width-8"
        >
          <div class="row flex grid content-grid-2">
            <div
              v-for="item in mangaList"
              :key="item.manga_id"
              class="grid-item center"
            >
              <div
                class="thumbnail rounded img-scale-in"
                data-hover-easing="easeInOut"
                data-hover-speed="700"
                data-hover-bkg-color="#ffffff"
                data-hover-bkg-opacity="0.9"
              >
                <nuxt-link
                  class="overlay-link"
                  :to="`/${item.manga_id}`"
                >
                  <img
                    :src="item.cover"
                    style="height: 500px"
                  >
                  <span class="overlay-info">
                    <span>
                      <span>
                        Read now
                      </span>
                    </span>
                  </span>
                </nuxt-link>
                <p
                  class="mb-0"
                  style="visibility: hidden"
                >
                  dummy
                </p>
                <h3 class="weight-semi-bold center mb-10">
                  {{ item.manga_name }}
                </h3>
                <p class="center">
                  {{ item.author }}
                </p>
              </div>
            </div>
          </div>

          <div class="row center">
            <el-button
              type="success"
              @click="getMangaList"
            >
              Show more
            </el-button>
          </div>
        </div>

        <div class="column width-4">
          <div class="box rounded shadow bkg-white">
            <h3 class="weight-semi-bold">
              Genre
            </h3>

            <div class="row flex grid content-grid-2">
              <div
                v-for="genre in genres"
                :key="genre"
                class="grid-item"
              >
                <nuxt-link :to="`/search?genre=${genre}`">
                  {{ genre }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Tabs Button Nav End -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      page: 1,
      isLoading: false,
      mangaList: []
    }
  },

  computed: {
    genres() { return this.$store.state.genres }
  },

  mounted() {
    this.page = 1;
    this.getMangaList();
  },

  methods: {
    getMangaList() {
      this.isLoading = true;
      this.getMangas({ page: this.page }).then(data => {
        this.mangaList = [...this.mangaList, ...data];
        this.isLoading = false;
        if (data.length > 0) {
          this.page += 1;
        }
      });
    }
  }
}
</script>

<style scoped>
  .slider-item-container {
    height: 100%;
    width: 100%;
    /*background-image: url('/img/bg2.jpg');*/
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .slider-item-inner {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
