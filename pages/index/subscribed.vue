<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-12">
          <h2 class="mb-0">Subscribed</h2>
          <h2 class="weight-semi-bold mb-50">January 2018</h2>
        </div>
      </div>

      <div class="row">
        <div class="column width-12">
          <div class="row flex grid content-grid-4">
            <div v-for="index in 3" :key="index" class="grid-item">
              <div
                class="thumbnail rounded img-scale-in"
                data-hover-easing="easeInOut"
                data-hover-speed="700"
                data-hover-bkg-color="#ffffff"
                data-hover-bkg-opacity="0.9"
              >
                <nuxt-link class="overlay-link" to="/123">
                  <img :src="`/img/cover${index % 3 + 1}.jpg`"/>
                  <span class="overlay-info">
                    <span>
                      <span>
                        Read Full Article
                      </span>
                    </span>
                  </span>
                </nuxt-link>
                <p class="mb-0" style="visibility: hidden">
                  dummy
                </p>
                <h3 class="weight-semi-bold center mb-10">
                  Manga name
                </h3>
                <p class="center">
                  Some description about this manga
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
}
</script>

<style lang="css" scoped>
</style>
