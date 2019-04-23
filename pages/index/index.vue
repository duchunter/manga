<template>
  <div class="content clearfix">

    <div class="section-block pt-0">
      <div class="full-width" style="background-color: black">
        <el-carousel trigger="click" height="80vh">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="slider-item-container">
              <div class="slider-item-inner">
                <h1 class="weight-semi-bold color-white">
                  Manga name
                </h1>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- Fullscreen Slider Section -->

    <!-- Fullscreen Slider Section End -->

    <!-- Tabs Button Nav -->
    <div class="section-block bkg-white">
      <div class="row">
        <div class="column width-8">
          <h2 class="mb-0">Top Trending Manga</h2>
          <h2 class="weight-semi-bold mb-50">January 2018</h2>
        </div>
      </div>

      <div class="row">
        <div class="column width-8">
          <div class="row flex grid content-grid-2">
            <div v-for="index in 9" :key="index" class="grid-item">
              <div
                class="thumbnail rounded img-scale-in"
                data-hover-easing="easeInOut"
                data-hover-speed="700"
                data-hover-bkg-color="#ffffff"
                data-hover-bkg-opacity="0.9"
              >
                <nuxt-link class="overlay-link" to="/123">
                  <img src="/img/portrait.jpg"/>
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

        <div class="column width-4">
          <div class="box rounded shadow bkg-white">
            <h3 class="weight-semi-bold">
              Genre
            </h3>

            <div class="row flex grid content-grid-2">
              <div v-for="index in 20" :key="index" class="grid-item">
                <h4>
                  Genre
                </h4>
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

}
</script>

<style scoped>
  .slider-item-container {
    height: 100%;
    width: 100%;
    background-image: url('/img/bg1.jpg');
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
