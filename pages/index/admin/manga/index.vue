<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white">
      <div class="row">
        <div class="column width-12">
          <h2 class="weight-semi-bold">
            Add new manga
          </h2>
          <el-collapse>
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
                  <el-input v-model="form.name" />
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
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column
              label="Date"
              prop="date"
            />
            <el-table-column
              label="Name"
              prop="name"
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
      isLoading: false,
      search: '',
      fileList: [],
      mangaList: [],
      form: {
        cover: '',
        name: '',
        author: '',
        description: ''
      }
    }
  },
  mounted() {
    this.isLoading = true;
    this.getMangas({ page: 1 }).then(data => {
      this.mangaList = data;
      this.isLoading = false;
    });
  },
  methods: {
    handleFileChange(file) {
      if (file.response) {
        this.form.cover = file.response.image;
      }
    },
    submitManga() {
      this.addManga(this.form);
    },
    handleEdit(index, row) {
      this.$router.push('/admin/manga/123');
    },
    handleDelete(index, row) {
      this.deleteManga(row.id).then(isSuccess => {
        if (isSuccess) {
          this.mangaList.splice(index, 1);
        }
      });
    }
  },
}
</script>

<style lang="css" scoped>
</style>
