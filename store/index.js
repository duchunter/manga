export const state = () => ({
  isLoggedIn: false,
  isAdmin: false,
  user: '',
  token: '',
  genres: []
})

export const mutations = {
  SET_LOGGED_IN(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  },
  SET_ADMIN(state, isAdmin) {
    state.isAdmin = isAdmin
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_GENRES(state, genres) {
    state.genres = genres.map(item => {
      const name = item.gen_name.trim();
      return name[0].toUpperCase() + name.slice(1);
    })
  },
}
