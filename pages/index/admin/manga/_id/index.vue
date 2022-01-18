<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-12">
          <!--Manga info section-->
          <h2 class="weight-semi-bold mb-40">
            Manga info
            <span>
              <a
                target="_blank"
                :href="`/${$route.params.id}`"
                style="font-size: 16px; cursor: pointer; margin-left: 10px;"
              >
                View live
              </a>
            </span>
          </h2>
          <el-form
            ref="form"
            v-loading="isInfoLoading"
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
                :data="{
                  userkey: 'XcYN8K1YXnsVT2zc1sstCaHEa63iRcOX'
                }"
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
            <el-form-item label="Genre">
              <el-input v-model="form.genre" />
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
                @click="submitChange"
              >
                Edit
              </el-button>
              <el-button type="danger">
                Delete
              </el-button>
            </el-form-item>
          </el-form>
          <!--Manga info end-->

          <!--Add new chapter-->
          <h2 class="weight-semi-bold mt-80">
            Add new chapter
          </h2>
          <el-collapse v-loading="isAdding">
            <el-collapse-item
              title="Info"
              name="1"
            >
              <el-form
                ref="form"
                v-loading="isAdding"
                :model="formChapter"
                label-width="120px"
              >
                <el-form-item label="Chap number">
                  <el-input v-model="formChapter.chap_id" />
                </el-form-item>
                <el-form-item label="Name">
                  <el-input v-model="formChapter.chap_name" />
                </el-form-item>
                <el-form-item label="Content">
                  <el-input
                    v-model="formChapter.chap_content"
                    :rows="5"
                    type="textarea"
                  />
                </el-form-item>
                <el-form-item label="Upload image">
                  <el-upload
                    :multiple="true"
                    action="https://vgy.me/upload"
                    :file-list="fileListChapter"
                    class="mb-20"
                    :on-change="handleChapterChange"
                    :data="{
                      userkey: 'XcYN8K1YXnsVT2zc1sstCaHEa63iRcOX'
                    }"
                  >
                    <el-button
                      size="small"
                      type="primary"
                    >
                      Upload
                    </el-button>
                  </el-upload>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    @click="addNewChap"
                  >
                    Submit
                  </el-button>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>
          <!--Add new chapter end-->

          <!--Chapter list-->
          <h2 class="weight-semi-bold mt-80">
            Chapters list
          </h2>
          <el-table
            v-loading="isChaptersLoading"
            :data="chapters.filter(data => !search || data.chap_name.toLowerCase().includes(search.toLowerCase()))"
            height="400"
            style="width: 100%"
          >
            <el-table-column
              type="index"
            />
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
          <!--Chapter list end-->
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
      isChaptersLoading: false,
      isAdding: false,
      search: '',
      form: {
        manga_name: '',
        genre: '',
        author: '',
        description: '',
        cover: '',
      },
      formChapter: {
        chap_id: '',
        chap_name: '',
        chap_content: ''
      },
      fileList: [],
      fileListChapter: [],
      chapters: []
    }
  },

  mounted() {
    this.isInfoLoading = true;
    const id = this.$route.params.id;

    // Get info
    this.getManga(id).then(data => {
      const genre = this.form.genre;
      this.form = {...data, genre};
      this.isInfoLoading = false;
    });

    // Get genres
    this.getMangaGenres(id).then(data => {
      this.form.genre = data.map(item => {
        const name = item.gen_name.trim();
        return name[0].toUpperCase() + name.slice(1);
      }).join(', ');
    });

    // Get chapters list
    this.getChapterList(id);
  },

  methods: {
    addNewChap() {
      const id = this.$route.params.id;
      this.isAdding = true;
      const payload = {...this.formChapter};
      this.addChapter(id, payload).then(isSuccess => {
        this.isAdding = false;
        this.getChapterList(id);
      })
    },
    submitChange() {
      const id = this.$route.params.id;
      this.isInfoLoading = true;
      const payload = {...this.form};
      this.updateManga(id, payload).then(() => {
        this.isInfoLoading = false;
      })
    },
    handleFileChange(file) {
      if (file.response) {
        this.form.cover = file.response.image;
      }
    },
    handleChapterChange(file, fileList) {
      this.formChapter.chap_content = fileList.map(file => {
        return file.response ? file.response.image : '';
      }).join(',\n');
    },
    handleEdit(index, row) {
      const id = this.$route.params.id;
      this.$router.push(`/admin/manga/${id}/${row.chap_id}`);
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
    },
    getChapterList(id) {
      this.isChaptersLoading = true;
      this.getMangaChapters(id).then(data => {
        this.chapters = data.map(chap => {
          return {
            ...chap,
            time_up: this.$moment(chap.time_up).format('DD-MM-YYYY')
          }
        });
        this.isChaptersLoading = false;
      });
    }
  },
}
</script>

<style lang="css" scoped>
</style>
