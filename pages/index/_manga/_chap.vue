<template lang="html">
  <div class="content clearfix">
    <!-- Chapter imgs -->
    <div
      id="chapter-images"
      v-loading="isInfoLoading"
      class="section-block pt-80"
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
          <nuxt-link
            v-if="chapters[chapters.length - 1] && chapterId !== chapters[chapters.length - 1].chap_id"
            class="button rounded medium bkg-green bkg-hover-theme bkg-focus-green color-white color-hover-white mb-0"
            :to="`/${mangaId}/${chapterId - 1}`"
          >
            Last chapter
          </nuxt-link>
          <nuxt-link
            v-if="chapters[0] && chapterId !== chapters[0].chap_id"
            class="button rounded medium bkg-green bkg-hover-theme bkg-focus-green color-white color-hover-white mb-0"
            :to="`/${mangaId}/${chapterId + 1}`"
          >
            Next chapter
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- Chapter imgs end -->

    <!-- Chapter list -->
    <div
      v-loading="isChaptersLoading"
      class="row"
    >
      <div class="column-width-12">
        <el-table
          :data="chapters.filter(data => !search || data.chap_name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
          height="400"
        >
          <el-table-column
            label="Name"
            prop="chap_name"
          />
          <el-table-column
            label="Added"
            prop="time_up"
          />
          <el-table-column
            align="right"
          >
            <template
              slot="header"
              slot-scope="scope"
            >
              <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"
              />
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleRead(scope.$index, scope.row)"
              >
                Read
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- Chapter list end -->

    <!-- Comments -->
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
      <!-- Comment end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInfoLoading: false,
      isChaptersLoading: false,
      isCommentsLoading: false,
      commentText: '',
      chapterInfo: {
        chap_content: ''
      },
      comments: [],
      chapters: []
    }
  },

  computed: {
    mangaId() { return parseInt(this.$route.params.manga) },
    chapterId() { return parseInt(this.$route.params.chap) }
  },

  watch: {
    chapterId() {
      this.isInfoLoading = true;

      // Get info
      this.getChapter(this.mangaId, this.chapterId).then(data => {
        this.chapterInfo = data;
        this.isInfoLoading = false;
      });

      // Get comments list
      this.getComments();
      this.goto('#chapter-images');
    }
  },

  mounted() {
    this.isInfoLoading = true;

    // Get info
    this.getChapter(this.mangaId, this.chapterId).then(data => {
      this.chapterInfo = data;
      this.isInfoLoading = false;
    });

    // Get comments list
    this.getComments();

    // Get chapters list
    this.isChaptersLoading = true;
    this.getMangaChapters(this.mangaId).then(data => {
      this.chapters = data.map(chap => {
        return {
          ...chap,
          time_up: this.$moment(chap.time_up).format('DD-MM-YYYY')
        }
      });
      this.isChaptersLoading = false;
    });
  },

  methods: {
    submitComment() {
      this.postComment(this.mangaId, this.chapterId, this.commentText).then(isSuccess => {
        this.getComments();
        this.commentText = '';
      });
    },

    getComments() {
      this.isCommentsLoading = true;
      this.getChapterComment(this.mangaId, this.chapterId).then(data => {
        this.comments = data;
        this.isCommentsLoading = false;
      });
    },

    goto(el){
      if (process.client) {
        $([document.documentElement, document.body]).animate({
          scrollTop: $(el).offset().top
        }, 500)
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
