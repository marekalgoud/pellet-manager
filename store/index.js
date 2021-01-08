export const state = () => ({
  user: null,
  isLoggedIn: false
})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION (state, { authUser, claims }) {
    if (authUser) {
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
      state.isLoggedIn = true
    } else {
      state.user = null
      state.isLoggedIn = false
    }
  },

  LOGIN (state) {
    state.isLoggedIn = true
  }
}

export const actions = {
  login ({ commit }) {
    commit('LOGIN')
  }
}
