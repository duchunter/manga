<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-4">
          <div class="box rounded shadow center">
            <img
              src="/img/avatar.png"
              class="user-avatar"
              alt="Avatar"
            >
            <h3 class="weight-semi-bold">
              User name
            </h3>
          </div>
        </div>

        <div class="column width-8">
          <div class="box rounded shadow center">
            <el-form
              ref="form"
              :model="form"
            >
              <el-form-item
                label="Current password"
                prop="pass"
              >
                <el-input
                  v-model="form.pass"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item
                label="New password"
                prop="checkPass"
              >
                <el-input
                  v-model="form.checkPass"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item
                label="Confirm new password"
                prop="checkPass"
              >
                <el-input
                  v-model="form.checkPass"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('form')"
                >
                  Submit
                </el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        pass: '',
        checkPass: '',
      },
    };
  },

  methods: {
    submitForm(formName) {

    },
    resetForm(formName) {

    }
  }
}
</script>

<style lang="css" scoped>
.user-avatar {
  max-height: 200px;
  border-radius: 100px;
  margin-bottom: 20px;
}
</style>
