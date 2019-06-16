<template lang="html">
  <div class="content clearfix">
    <div
      v-loading="isInfoLoading"
      class="section-block pt-40"
    >
      <div class="row">
        <div class="column width-12 center">
          <h1 class="weight-semi-bold mb-40">
            {{ chapterInfo.chap_name }}
          </h1>

          <img
            v-for="(img, index) in chapterInfo.chap_content.split(',\n')"
            :key="index"
            :src="img"
          >
        </div>
      </div>

      <div class="row flex mt-80">
        <div class="column width-12 center">
          <el-button
            type="primary"
            @click="lastChap"
          >
            Last chapter
          </el-button>
          <el-button
            type="primary"
            @click="nextChap"
          >
            Next chapter
          </el-button>
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
                    <input
                      v-model="commentText"
                      class="form-element rounded medium"
                      placeholder="Comment"
                      @keyup.enter="submitComment"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-for="(item, index) in comments"
        :key="'comment' + index"
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
                      <a style="pointer-events: none">
                        {{ item.user_name }} - {{ $moment(item.time_up).fromNow() }}
                      </a>
                    </div>
                    <p class="author-title">
                      {{ item.content }}
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
      commentText: '',
      chapterInfo: {
        chap_content: ''
      },
      comments: []
    }
  },

  mounted() {
    this.isInfoLoading = true;
    const mangaId = this.$route.params.manga;
    const chapterId = this.$route.params.chap;

    // Get info
    this.getChapter(mangaId, chapterId).then(data => {
      this.chapterInfo = data;
      this.isInfoLoading = false;
    });

    // Get comments list
    this.getComments(mangaId, chapterId);
  },

  methods: {
    submitComment() {
      const mangaId = this.$route.params.manga;
      const chapterId = this.$route.params.chap;
      this.postComment(mangaId, chapterId, this.commentText).then(isSuccess => {
        this.getComments(mangaId, chapterId);
        this.commentText = '';
      });
    },

    getComments(mangaId, chapterId) {
      this.isCommentsLoading = true;
      this.getChapterComment(mangaId, chapterId).then(data => {
        this.comments = data;
        this.isCommentsLoading = false;
      });
    },

    lastChap() {
      const mangaId = this.$route.params.manga;
      const chapterId = this.$route.params.chap;
      if (process.client) {
        window.location = `/${mangaId}/${parseInt(chapterId) - 1}`
      }
    },

    nextChap() {
      const mangaId = this.$route.params.manga;
      const chapterId = this.$route.params.chap;
      if (process.client) {
        window.location = `/${mangaId}/${parseInt(chapterId) + 1}`
      }
    }
  }
}
</script>

<style lang="css" scoped>
.post-author {
  border-top-width: 0;
}
</style>
