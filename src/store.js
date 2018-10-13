import Vue from 'vue'
import Vuex from 'vuex'
import { moduleSocket } from './sdp'

import mutations from '@/mutations'
import actions from '@/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sdp: moduleSocket,
  },
  state: {
    jwt: null, //'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoibWlndWVsIiwicm9sZXMiOlsiYmFzaWMiLCJhZG1pbiJdfQ.v0u6CeUcanlNUBcX_rVDRDY2e6NCXshYZ7gHgsUTDKM',
    loginError: '',
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
    ...mutations
  },
  actions: {
    ...actions
  }
})