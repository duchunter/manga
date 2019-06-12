<template lang="html">
  <div class="content clearfix">
    <div
      v-loading="isInfoLoading"
      class="section-block pt-40"
    >
      <div class="row">
        <div class="column width-12 center">
          <h1 class="weight-semi-bold">
            Chapter name
          </h1>

          <img
            v-for="index in 2"
            :key="index"
            :src="`../../img/page${index}.jpg`"
            alt=""
          >
        </div>
      </div>
    </div>

    <div class="section-block pt-0">
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
                <img
                  src="/img/avatar.png"
                  alt="Avatar"
                >
              </div>
              <div class="author-content">
                <div class="row">
                  <div class="column width-12">
                    <el-input
                      v-model="textarea"
                      type="textarea"
                      :rows="3"
                      placeholder="Comment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="index in 3"
        :key="index"
        v-loading="isCommentsLoading"
        class="post-author"
      >
        <div class="row">
          <div class="column width-12">
            <div class="author-bio">
              <div class="author-avatar clear-float">
                <img
                  src="/img/avatar.png"
                  alt="Avatar"
                >
              </div>
              <div class="author-content">
                <div class="row">
                  <div class="column width-12">
                    <div class="name">
                      <a href="#">Henry Valiant</a>
                    </div>
                    <p class="author-title">
                      WordPress Evangelist, JS Guru and Beer Lover
                    </p>
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
      isInfoLoading: false,
      isCommentsLoading: false,
      textarea: '',
      chapterInfo: {},
      comments: []
    }
  },

  mounted() {
    this.isInfoLoading = true;
    this.isCommentsLoading = true;
    const mangaId = this.$route.params.manga;
    const chapterId = this.$route.params.chap;

    // Get info
    this.getChapter(mangaId, chapterId).then(data => {
      this.chapterInfo = data;
      this.isInfoLoading = false;
    });

    // Get comments list
    this.getChapterComment(mangaId, chapterId).then(data => {
      this.comments = data;
      this.isCommentsLoading = false;
    });
  },
}
</script>

<style lang="css" scoped>
.post-author {
  border-top-width: 0px;
}
</style>
