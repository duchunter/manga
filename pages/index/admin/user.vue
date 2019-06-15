<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-12">
          <el-table
            v-loading="isLoading"
            :data="users.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
          >
            <el-table-column
              type="index"
            />
            <el-table-column
              label="Name"
              prop="user_name"
            />
            <el-table-column
              label="Admin"
              prop="admin_id"
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
      isLoading: false,
      users: [],
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
    handleDelete(index, row) {
      const { user_id } = row;
      this.deleteUser(user_id).then(isSuccess => {
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
