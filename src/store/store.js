import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    instagram_token: localStorage.getItem('instagram_token') || ''
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, { token, user } ){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
      state.user = {}
      state.instagram_token = ''
    },
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'http://localhost:8080/api/v1/users/login', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.data.tokens
            const user = resp.data.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', { token, user })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    register({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        axios({url: 'http://localhost:8080/api/v1/users/new', data: userInfo, method: 'POST' })
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    import_ig({commit}, params) {
      return new Promise((resolve, reject) => {
        var token = localStorage.getItem('instagram_token');
        // axios({url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + params.token, method: 'GET' })
        // .then(resp => {
        //   resolve(resp)
        // })
        // .catch(err => {
        //   console.log(err)
        //   reject(err)
        // })

        console.log(localStorage.getItem('instagram_token'))
        console.log(this.$store)

        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token='+ params.token)
        .then(function (response) {
          // handle success
          // console.log(response.data.data);
          resolve(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          reject(error)
        })
        .finally(function () {
          // always executed
        });
      })
    }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})