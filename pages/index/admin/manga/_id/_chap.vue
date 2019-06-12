<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white">
      <div class="row">
        <div class="column width-12">
          <h2 class="weight-semi-bold mb-40">Chapter info</h2>
          <el-form ref="form" :model="form" label-width="120px" v-loading="isInfoLoading">
            <el-form-item label="Name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Content">
              <el-input :rows="5" type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item label="Upload image">
              <el-upload
                action="https://vgy.me/upload"
                :file-list="fileList"
                class="mb-20"
              >
                <el-button size="small" type="primary">Upload</el-button>
              </el-upload>
              <el-input :rows="3" type="textarea" v-model="img"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitChange">Edit</el-button>
              <el-button type="danger" @click="deleteChap">Delete</el-button>
            </el-form-item>
          </el-form>

          <h2 class="weight-semi-bold mt-80">Comments list</h2>
          <el-table
            v-loading="isCommentsLoading"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="Date"
              prop="date">
            </el-table-column>
            <el-table-column
              label="Name"
              prop="name">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="Type to search"/>
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
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'John',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Morgan',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Jessy',
        address: 'No. 189, Grove St, Los Angeles'
      }],
      isInfoLoading: false,
      isCommentsLoading: false,
      search: '',
      img: '',
      form: {
        name: '',
        content: ''
      },
      fileList: [],
      chapterInfo: {},
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
      this.chapterInfo = data;
      this.isInfoLoading = false;
    });

    // Get comments list
    this.getChapterComment(mangaId, chapterId).then(data => {
      this.comments = data;
      this.isCommentsLoading = false;
    });
  },

  methods: {
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
