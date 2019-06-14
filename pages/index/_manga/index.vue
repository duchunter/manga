<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div
        v-loading="isInfoLoading"
        class="row"
      >
        <div class="column width-4">
          <img
            :src="mangaInfo.cover"
            style="height: 400px"
          >
        </div>
        <div class="column width-8">
          <h1 class="weight-semi-bold">
            {{mangaInfo.manga_name}}
          </h1>
          <h3 class="weight-semi-bold">
            Genre: {{mangaInfo.genre}}
          </h3>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points"
          />
          <p class="mt-20">
            Description: {{mangaInfo.description}}
          </p>
          <el-button
            type="success"
            @click="subscribe"
          >
            Subscribe
          </el-button>
          <div class="block mt-20">
            <span class="demonstration">Rate this manga</span>
            <el-rate
              v-model="value"
              @change="rate"
            />
          </div>
        </div>
      </div>

      <div
        v-loading="isChaptersLoading"
        class="row mt-40"
      >
        <div class="column-width-12">
          <el-table
            :data="chapters.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column
              label="Name"
              prop="chap_name"
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.7,
      isInfoLoading: false,
      isChaptersLoading: false,
      search: '',
      mangaInfo: {},
      chapters: []
    }
  },

  mounted() {
    this.isInfoLoading = true;
    this.isChaptersLoading = true;
    const id = this.$route.params.manga;

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
    subscribe() {
      const id = this.$route.params.manga;
      this.subscribeManga(id);
    },
    rate(value) {
      const id = this.$route.params.manga;
      this.rateManga(id, value);
    },
    handleRead(index, row) {
      const id = this.$route.params.manga;
      this.$router.push(`/${id}/${row.chap_id}`);
    }
  },
}
</script>

<style lang="css" scoped>
</style>
