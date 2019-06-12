<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white">
      <div class="row">
        <div class="column width-12">
          <h2 class="weight-semi-bold mb-40">Manga info</h2>
          <el-form ref="form" :model="form" label-width="120px" v-loading="isInfoLoading">
            <el-form-item label="Cover">
              <el-upload
                action="https://vgy.me/upload"
                :multiple="false"
                :limit="1"
                :file-list="fileList"
                :on-change="handleFileChange"
              >
                <el-button size="small" type="primary">Upload</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item label="Name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Author">
              <el-input v-model="form.author"></el-input>
            </el-form-item>
            <el-form-item label="Description">
              <el-input :rows="3" type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitChange">Edit</el-button>
              <el-button type="danger">Delete</el-button>
            </el-form-item>
          </el-form>

          <h2 class="weight-semi-bold mt-80">Chapters list</h2>
          <el-table
            v-loading="isChaptersLoading"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
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
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
      isChaptersLoading: false,
      search: '',
      form: {
        name: '',
        author: '',
        description: '',
        cover: '',
      },
      fileList: [],
      mangaInfo: {},
      chapters: []
    }
  },

  mounted() {
    this.isInfoLoading = true;
    this.isChaptersLoading = true;
    const id = this.$route.params.id;

    // Get info
    this.getManga(id).then(data => {
      this.mangaInfo = data;
      this.isInfoLoading = false;
    });

    // Get chapters list
    this.getMangaChapters(id).then(data => {
      this.chapters = data;
      this.isChaptersLoading = false;
    });
  },

  methods: {
    submitChange() {
      const id = this.$route.params.id;
      this.isInfoLoading = true;
      this.updateManga(id, this.form).then(() => {
        this.isInfoLoading = false;
      })
    },
    handleFileChange(file) {
      if (file.response) {
        this.form.cover = file.response.image;
      }
    },
    handleEdit(index, row) {
      this.$router.push('/admin/manga/123/123');
    },
    handleDelete(index, row) {
      const id = this.$route.params.id;
      this.isChaptersLoading = true;
      this.deleteChapter(id, row.id).then(isSuccess => {
        this.isChaptersLoading = false;
        if (isSuccess) {
          this.chapters.splice(index, 1);
        }
      })
    }
  },
}
</script>

<style lang="css" scoped>
</style>
