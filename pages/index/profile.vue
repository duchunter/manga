<template lang="html">
  <div class="content clearfix">
    <div class="section-block bkg-white pt-40">
      <div class="row">
        <div class="column width-4">
          <div class="box rounded shadow center">
            <img src="/img/ava.jpg" class="user-avatar" alt="Avatar">
            <h3 class="weight-semi-bold">
              User name
            </h3>
          </div>
        </div>

        <div class="column width-8">
          <div class="box rounded shadow center">
            <el-form :model="form" ref="form" label-width="120px">
              <el-form-item label="Password" prop="pass">
                <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="Confirm" prop="checkPass">
                <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('form')">Submit</el-button>
                <el-button @click="resetForm('form')">Reset</el-button>
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
