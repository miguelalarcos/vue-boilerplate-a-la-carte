import Vue from 'vue'
import Vuex from 'vuex'
import { moduleSocket } from './sdp'

Vue.use(Vuex)

/*const config = {
  headers: {
    Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoibWlndWVsIn0.XnBRt8Lo5aG0UjWWgPi683fgWi3yBNh4gZVh9YW-9Fg',
  } 
}
const api = process.env.NODE_ENV === 'production' ? 'http://756d1119-c231-4419-aa2e-733226de1c62.clouding.host:8089/' : 'http://localhost:8089/'
*/
export default new Vuex.Store({
  modules: {
    sdp: moduleSocket,
  },
  state: {
    jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoibWlndWVsIn0.XnBRt8Lo5aG0UjWWgPi683fgWi3yBNh4gZVh9YW-9Fg',
    result: '',
    form: {
      age: 0
    },
    errors: {
      age: ''
    }
  },
  mutations: {
    setResult(state, {result}){
      state.result = result
    },
    setError(state, payload){
      state.errors = {...state.errors, age: payload}
    },
    setAge(state, payload){
      state.form = {...state.form, age: payload}
    },
  },
  actions: {
    /*async post ({commit}) {
      //context.commit('increment')
      const result = await axios.post(api + 'car', 
        {
        "name": "miguelito",
        "contact": {
          "email": "miguel.alarcos@gmail.com"
          }
        },
        config
      )
      commit('setResult', {result})  
    }
    */
  }
})