<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white">
      <div class="row">
        <div class="column width-4">
          <img src="/img/portrait.jpg" alt="">
        </div>
        <div class="column width-8">
          <h1 class="weight-semi-bold">
            Manga name
          </h1>
          <h3 class="weight-semi-bold">
            Genre: a test
          </h3>
          <p>
            Description: a very long texta very long texta very long texta very long texta very long texta very long text
          </p>
        </div>
      </div>

      <div class="row mt-40">
        <div class="column-width-12">
          <el-table :data="tableData" style="width: 100%">
           <el-table-column
             prop="date"
             label="Date"
             width="180">
           </el-table-column>
           <el-table-column
             prop="name"
             label="Name"
             width="180">
           </el-table-column>
           <el-table-column
             prop="address"
             label="Address">
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
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
