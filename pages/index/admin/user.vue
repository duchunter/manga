<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white">
      <div class="row">
        <div class="column width-12">
          <el-table
            v-loading="isLoading"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="Name"
              prop="name">
            </el-table-column>
            <el-table-column
              label="Admin"
              prop="isAdmin">
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
                  @click="handleEdit(scope.$index, scope.row)"
                >
                  {{ scope.row.isAdmin ? 'Demote' : 'Become admin'}}
                </el-button>
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
      isLoading: false,
      users: [],
      tableData: [{
        id: 1,
        name: 'Tom',
        isAdmin: 'x'
      }, {
        id: 2,
        name: 'John',
      }],
      search: '',
    }
  },
  mounted() {
    this.isLoading = true;
    this.getUsers().then(data => {
      this.isLoading = false;
      this.users = data;
    })
  },
  methods: {
    handleEdit(index, row) {
      const { id, isAdmin } = row;
      this.updateUser(id, { isAdmin: !isAdmin }).then(isSuccess => {
        if (isSuccess) {
          this.users[index].isAdmin = !isAdmin;
        }
      });
    },
    handleDelete(index, row) {
      const { id } = row;
      this.deleteUser(id).then(isSuccess => {
        if (isSuccess) {
          this.users.splice(index, 1);
        }
      });
    }
  },
}
</script>

<style lang="css" scoped>
</style>
