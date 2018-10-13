import router from './router'
import { postLogin, instanceAPI } from '@/api'

export default {
    async postLoginAction({commit}, {user, password}){
        const ret = await postLogin(user, password)
        if(ret.status === 'ok'){
            instanceAPI.defaults.headers.common['Authorization'] = ret.jwt
            commit('loginOk', {jwt: ret.jwt})
            router.push("/dashboard")
        }else{
            commit('loginFailure')
        }
    }
}

