import Vue from "vue"

const getHeader = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
}

Vue.mixin({
  methods: {
    // Authen flow
    async signIn(payload) {
      try {
        const res = await this.$axios.post('/login', payload);
        const token = res.data;
        this.$store.commit('SET_TOKEN', token);
        this.$store.commit('SET_LOGGED_IN', true);
        if (process.client) {
          window.localStorage.setItem('token', token);
        }
        this.$router.push('/');
        this.getUserInfo(token).then(data => {
          if (data) {
            this.$store.commit('SET_ADMIN', data.isAdmin);
            this.$store.commit('SET_USER', data.user_name);
          }
        })
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
      this.$store.commit('SET_USER', '');
      if (process.client) {
        window.localStorage.removeItem('token');
      }
      this.$router.push('/');
    },

    // Admin
    async getUsers() {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.get('/admin/users', getHeader(token));
        return res.data;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return []
      }
    },

    async getAllMangas() {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.get('/admin/mangas', getHeader(token));
        return res.data;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return []
      }
    },

    async updateUser(id, payload) {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.put(`/admin/users/${id}`, payload, getHeader(token));
        this.$message.success('Done');
        return true;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return false;
      }
    },

    async deleteUser(id) {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.delete(`/admin/users/${id}`, getHeader(token));
        this.$message.success('Done');
        return true;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return false;
      }
    },

    async addManga(payload) {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.post(`/mangas`, payload, getHeader(token));
        this.$message.success('Done');
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
      }
    },

    async updateManga(id, payload) {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.put(`/mangas/${id}`, payload, getHeader(token));
        this.$message.success('Done');
        return true;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return false;
      }
    },

    async deleteManga(id) {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.delete(`/mangas/${id}`, getHeader(token));
        this.$message.success('Done');
        return true;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return false;
      }
    },

    async addChapter(mangaId, payload) {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.post(`/mangas/${mangaId}/chapters/`, payload, getHeader(token));
        this.$message.success('Done');
        return true;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return false;
      }
    },

    async updateChapter(mangaId, chapterId, payload) {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.put(`/mangas/${mangaId}/chapters/${chapterId}`, payload, getHeader(token));
        this.$message.success('Done');
        return true;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return false;
      }
    },

    async deleteChapter(mangaId, chapterId) {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.delete(`/mangas/${mangaId}/chapters/${chapterId}`, getHeader(token));
        this.$message.success('Done');
        return true;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return false;
      }
    },

    // Authenticated
    async getUserInfo(token) {
      try {
        const jwt = token || this.$store.state.token;
        const res = await this.$axios.get(`/info`, getHeader(jwt));
        return res.data;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return null;
      }
    },

    async changePassword(payload) {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.put(`/password`, payload, getHeader(token));
        this.$message.success('Done');
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
      }
    },

    async getSubscribedMangas() {
      try {
        const token = this.$store.state.token;
        const res = await this.$axios.get(`/mangas/subscribed`, getHeader(token));
        return res.data;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return [];
      }
    },

    async subscribeManga(id) {
      try {
        const token = this.$store.state.token;
        if (!token) {
          this.$router.push('/signin');
          return;
        }
        const payload = { subscribed: true };
        const res = await this.$axios.put(`/mangas/${id}/subscription`, payload, getHeader(token));
        this.$message.success('Done');
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
      }
    },

    async rateManga(id, rating) {
      try {
        const token = this.$store.state.token;
        if (!token) {
          this.$router.push('/signin');
          return;
        }
        const res = await this.$axios.put(`/mangas/${id}/rating`, { point: rating }, getHeader(token));
        this.$message.success('Done');
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
      }
    },

    async postComment(mangaId, chapterId, content) {
      try {
        const token = this.$store.state.token;
        if (!token) {
          this.$router.push('/signin');
          return;
        }
        const res = await this.$axios.post(`/mangas/${mangaId}/chapters/${chapterId}/comments`, { content }, getHeader(token));
        return true;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return false;
      }
    },

    // Free flow
    async getAllGenres() {
      try {
        const res = await this.$axios.get('/genres');
        this.$store.commit('SET_GENRES', res.data);
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
      }
    },

    async getMangas({ page, genre, name }) {
      try {
        let query = `?page=${page || 1}`;
        if (genre) {
          query += `&genre=${genre}`
        }
        if (name) {
          query += `&name=${name}`
        }
        const res = await this.$axios.get(`/mangas${query}`);
        return res.data;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return [];
      }
    },

    async getManga(id) {
      try {
        const res = await this.$axios.get(`/mangas/${id}`);
        if (!res.data[0]) {
          this.$message.error('Manga not found');
          return {}
        }

        return res.data[0];
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return {};
      }
    },

    async getMangaGenres(id) {
      try {
        const res = await this.$axios.get(`/mangas/${id}/genres`);
        return res.data;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return [];
      }
    },

    async getMangaChapters(id) {
      try {
        const res = await this.$axios.get(`/mangas/${id}/chapters`);
        return res.data;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return [];
      }
    },

    async getChapter(mangaId, chapterId) {
      try {
        const res = await this.$axios.get(`/mangas/${mangaId}/chapters/${chapterId}`);
        if (!res.data[0]) {
          this.$message.error('Chapter not found');
          return {}
        }

        return res.data[0];
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return {};
      }
    },

    async getChapterComment(mangaId, chapterId) {
      try {
        const res = await this.$axios.get(`/mangas/${mangaId}/chapters/${chapterId}/comments`);
        return res.data;
      } catch (e) {
        this.$message.error(e.response.data.message || e.toString());
        return [];
      }
    },
  }
})
