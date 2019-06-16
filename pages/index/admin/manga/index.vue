<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-12">
          <h2 class="weight-semi-bold">
            Add new manga
          </h2>
          <el-collapse v-loading="isAdding">
            <el-collapse-item
              title="Info"
              name="1"
            >
              <el-form
                ref="form"
                :model="form"
                label-width="120px"
              >
                <el-form-item label="Cover">
                  <el-upload
                    action="https://vgy.me/upload"
                    :multiple="false"
                    :limit="1"
                    :file-list="fileList"
                    :on-change="handleFileChange"
                  >
                    <el-button
                      size="small"
                      type="primary"
                    >
                      Upload
                    </el-button>
                  </el-upload>
                </el-form-item>
                <el-form-item label="Name">
                  <el-input v-model="form.manga_name" />
                </el-form-item>
                <el-form-item label="Author">
                  <el-input v-model="form.author" />
                </el-form-item>
                <el-form-item label="Description">
                  <el-input
                    v-model="form.description"
                    :rows="3"
                    type="textarea"
                  />
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="submitManga"
                  >
                    Create
                  </el-button>
                  <el-button>Cancel</el-button>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>

          <h2 class="weight-semi-bold mt-80">
            Manga list
          </h2>
          <el-table
            v-loading="isLoading"
            :data="mangaList.filter(data => !search || data.manga_name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column
              type="index"
            />
            <el-table-column
              label="Name"
              prop="manga_name"
            />
            <el-table-column
              label="ID"
              prop="manga_id"
            />
            <el-table-column
              label="#Chapter"
              prop="num_of_chap"
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
                  @click="handleEdit(scope.$index, scope.row)"
                >
                  Edit
                </el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >
                  Delete
                </el-button>
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
      page: 1,
      isLoading: false,
      isAdding: false,
      search: '',
      fileList: [],
      mangaList: [],
      form: {
        cover: '',
        manga_name: '',
        author: '',
        description: ''
      }
    }
  },
  mounted() {
    this.getMangaList();
  },
  methods: {
    getMangaList() {
      this.isLoading = true;
      this.getAllMangas().then(data => {
        this.mangaList = data;
        this.isLoading = false;
      });
    },
    handleFileChange(file) {
      if (file.response) {
        this.form.cover = file.response.image;
      }
    },
    submitManga() {
      this.isAdding = true;
      this.addManga(this.form).then(() => {
        this.isAdding = false;
        this.getMangaList();
      });
    },
    handleEdit(index, row) {
      this.$router.push(`/admin/manga/${row.manga_id}`);
    },
    handleDelete(index, row) {
      this.isLoading = true;
      this.deleteManga(row.manga_id).then(isSuccess => {
        if (isSuccess) {
          this.mangaList.splice(index, 1);
        }
        this.isLoading = false;
      });
    }
  },
}
</script>

<style lang="css" scoped>
</style>
