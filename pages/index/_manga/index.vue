<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white">
      <div class="row">
        <div class="column width-4">
          <img src="/img/cover1.jpg" alt="">
        </div>
        <div class="column width-8">
          <h1 class="weight-semi-bold">
            Manga name
          </h1>
          <h3 class="weight-semi-bold">
            Genre: test
          </h3>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value} points">
          </el-rate>
          <p class="mt-20">
            Description: a very long texta very long texta very long texta very long texta very long texta very long text
          </p>
          <el-button type="success">Subscribe</el-button>
          <div class="block mt-20">
            <span class="demonstration">Rate this manga</span>
            <el-rate v-model="value1"></el-rate>
          </div>
        </div>
      </div>

      <div class="row mt-40">
        <div class="column-width-12">
          <el-table
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
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)">Read</el-button>
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
      value1: null,
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
      search: '',
    }
  },

  methods: {
    handleEdit(index, row) {
      this.$router.push('/123/123');
      // console.log(index, row);
    }
  },
}
</script>

<style lang="css" scoped>
</style>
