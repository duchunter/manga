export const state = () => ({
  isLoggedIn: false,
  isAdmin: false,
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
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_GENRES(state, genres) {
    state.genres = genres
  },
}
