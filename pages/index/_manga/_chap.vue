<template lang="html">
  <div class="content clearfix">
    <div class="section-block">
      <div class="row">
        <div class="column width-12 center">
          <h1 class="weight-semi-bold">
            Chapter name
          </h1>

          <img v-for="index in 2" :key="index" :src="`../../img/page${index}.jpg`" alt="">
        </div>
      </div>
    </div>

    <div class="section-block">
      <div class="row">
        <div class="column width-12">
          <h1 class="weight-semi-bold">
            Comments
          </h1>
        </div>
      </div>

      <div class="post-author">
        <div class="row">
            <div class="column width-12">
                <div class="author-bio">
                    <div class="author-avatar clear-float">
                        <img src="/img/ava.jpg" alt="Avatar">
                    </div>
                    <div class="author-content">
                        <div class="row">
                            <div class="column width-12">
                              <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="Comment"
                                v-model="textarea">
                              </el-input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div v-for="index in 3" class="post-author">
        <div class="row">
            <div class="column width-12">
                <div class="author-bio">
                    <div class="author-avatar clear-float">
                        <img src="/img/ava.jpg" alt="Avatar">
                    </div>
                    <div class="author-content">
                        <div class="row">
                            <div class="column width-12">
                                <div class="name"><a href="#">Henry Valiant</a></div>
                                <p class="author-title">WordPress Evangelist, JS Guru and Beer Lover</p>
                            </div>
                        </div>
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
      textarea: ''
    }
  }
}
</script>

<style lang="css" scoped>
.post-author {
  border-top-width: 0px;
}
</style>
