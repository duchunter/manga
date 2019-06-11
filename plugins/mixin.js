import Vue from "vue"

Vue.mixin({
  methods: {
    async signIn(payload) {
      try {
        const res = await this.$axios.post('/login', payload);
        const token = res.data;
        this.$store.commit('SET_TOKEN', token);
        this.$store.commit('SET_LOGGED_IN', true);
        this.$store.commit('SET_ADMIN', true);
        if (process.client) {
          window.localStorage.setItem('token', token);
        }
        this.$router.push('/');
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
      }
    },

    async signUp(payload) {
      try {
        const res = await this.$axios.post('/signup', payload);
        this.$message.success('Success, you can login using your account now');
        this.$router.push('/signin');
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
      }
    },

    signOut() {
      this.$store.commit('SET_TOKEN', '');
      this.$store.commit('SET_LOGGED_IN', false);
      this.$store.commit('SET_ADMIN', false);
      if (process.client) {
        window.localStorage.removeItem('token');
      }
      this.$router.push('/');
    },
  }
})
