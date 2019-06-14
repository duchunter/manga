<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-12">
          <h2 class="weight-semi-bold mb-50">Subscribed</h2>
        </div>
      </div>

      <div class="row" v-loading="isLoading">
        <div class="column width-12">
          <div class="row flex grid content-grid-4">
            <div v-for="item in mangas" :key="item.manga_id" class="grid-item center">
              <div
                class="thumbnail rounded img-scale-in"
                data-hover-easing="easeInOut"
                data-hover-speed="700"
                data-hover-bkg-color="#ffffff"
                data-hover-bkg-opacity="0.9"
              >
                <nuxt-link class="overlay-link" :to="`/${item.manga_id}`">
                  <img :src="item.cover" style="height: 350px;"/>
                  <span class="overlay-info">
                    <span>
                      <span>
                        Read now
                      </span>
                    </span>
                  </span>
                </nuxt-link>
                <p class="mb-0" style="visibility: hidden">
                  dummy
                </p>
                <h3 class="weight-semi-bold center mb-10">
                  {{item.manga_name}}
                </h3>
                <p class="center">
                  {{item.author}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      mangas: []
    }
  },

  mounted() {
    this.isLoading = true;
    this.getSubscribedMangas().then(data => {
      this.mangas = data;
      this.isLoading = false;
    })
  }
}
</script>

<style lang="css" scoped>
</style>
