<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-12">
          <h2 class="weight-semi-bold mb-40">
            Chapter info
          </h2>
          <el-form
            ref="form"
            v-loading="isInfoLoading"
            :model="form"
            label-width="120px"
          >
            <el-form-item label="Name">
              <el-input v-model="form.chap_name" />
            </el-form-item>
            <el-form-item label="Content">
              <el-input
                v-model="form.chap_content"
                :rows="5"
                type="textarea"
              />
            </el-form-item>
            <el-form-item label="Upload image">
              <el-upload
                :multiple="true"
                action="https://vgy.me/upload"
                :file-list="fileList"
                class="mb-20"
                :on-change="handleFileChange"
              >
                <el-button
                  size="small"
                  type="primary"
                >
                  Upload
                </el-button>
              </el-upload>
              <el-input
                v-model="img"
                :rows="3"
                type="textarea"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitChange"
              >
                Edit
              </el-button>
              <el-button
                type="danger"
                @click="deleteChap"
              >
                Delete
              </el-button>
            </el-form-item>
          </el-form>

          <h2 class="weight-semi-bold mt-80">
            Comments list
          </h2>
          <el-table
            v-loading="isCommentsLoading"
            :data="comments.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column
              label="Name"
              prop="user_name"
            />
            <el-table-column
              label="Content"
              prop="content"
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
            </el-table-column>
          </el-table>
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
      search: '',
      img: '',
      form: {
        chap_name: '',
        chap_content: ''
      },
      fileList: [],
      comments: []
    }
  },

  mounted() {
    this.isInfoLoading = true;
    this.isCommentsLoading = true;
    const mangaId = this.$route.params.id;
    const chapterId = this.$route.params.chap;

    // Get info
    this.getChapter(mangaId, chapterId).then(data => {
      this.form = {...data};
      this.isInfoLoading = false;
    });

    // Get comments list
    this.getChapterComment(mangaId, chapterId).then(data => {
      this.comments = data;
      this.isCommentsLoading = false;
    });
  },

  methods: {
    handleFileChange(file, fileList) {
      this.img = fileList.map(file => {
        return file.response ? file.response.image : '';
      }).join(',\n');
    },
    submitChange() {
      this.isInfoLoading = true;
      const mangaId = this.$route.params.id;
      const chapterId = this.$route.params.chap;
      this.updateChapter(mangaId, chapterId, this.form).then(() => {
        this.isInfoLoading = false;
      });
    },
    deleteChap() {
      this.isInfoLoading = true;
      const mangaId = this.$route.params.id;
      const chapterId = this.$route.params.chap;
      this.deleteChapter(mangaId, chapterId).then(isSuccess => {
        this.isInfoLoading = false;
        if (isSuccess) {
          this.$router.push(`/admin/mangas/${mangaId}`);
        }
      });
    }
  },
}
</script>

<style lang="css" scoped>
</style>
