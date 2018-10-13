export default {
    loginOk(state, {jwt}){
        state.jwt = jwt
        state.loginError = ''
    },
    loginFailure(state) {
        state.loginError = 'Usuario o contraseña incorrectos'
    }
}