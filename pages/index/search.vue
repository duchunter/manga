<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-12">
          <h2 class="weight-semi-bold mb-50">
            Search results
          </h2>
        </div>
      </div>

      <div
        v-loading="isLoading"
        class="row"
      >
        <div class="column width-12">
          <div class="row flex grid content-grid-4">
            <div
              v-for="item in results"
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
                    style="height: 350px"
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
        </div>

        <div class="column width-12 center">
          <el-button
            type="success"
            @click="getMangaList"
          >
            Show more
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page: 1,
        isLoading: false,
        results: []
      }
    },

    computed: {
      name() { return this.$route.query.name },
      genre() { return this.$route.query.genre }
    },

    watch: {
      name() {
        this.page = 1;
        this.results = [];
        this.getMangaList();
      },
      genre() { 
        this.page = 1;
        this.results = [];
        this.getMangaList();
      },
    },

    mounted() {
      this.page = 1;
      this.getMangaList();
    },

    methods: {
      getMangaList() {
        this.isLoading = true;
        this.getMangas({
          name: this.name,
          genre: this.genre,
          page: this.page
        }).then(data => {
          this.results = [...this.results, ...data];
          this.isLoading = false;
          if (data.length > 0) {
            this.page += 1;
          }
        });
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
