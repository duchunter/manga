<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white">
      <div class="row">
        <div class="column width-12">
          <h2 class="weight-semi-bold">Add new manga</h2>
          <el-collapse>
            <el-collapse-item title="New manga" name="1">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="Cover">
                  <el-upload>
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
                  <el-button type="primary" @click="onSubmit">Create</el-button>
                  <el-button>Cancel</el-button>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>

          <h2 class="weight-semi-bold mt-80">Manga list</h2>
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
        search: '',
        form: {
          name: '',
          author: '',
          description: ''
        }
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$router.push('/admin/manga/123');
        // console.log(index, row);
      },
      handleDelete(index, row) {
        // console.log(index, row);
      }
    },
}
</script>

<style lang="css" scoped>
</style>
