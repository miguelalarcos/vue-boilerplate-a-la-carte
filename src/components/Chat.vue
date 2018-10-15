<template>
    <div>
        {{ keyup_notify }}
        <transition-group name="fade" tag="div">
            <div v-bind:key="m.id" v-for="m in messages">
                <div>{{ m.msg }}</div>
                <div>{{ m.user }}, {{ m.timestamp }}</div>
            </div>  
        </transition-group>
        <v-textarea ref="input"
          v-model="msg"
          name="input-7-1"
        ></v-textarea>
        <v-btn @click="newMessage">Enviar</v-btn>
        <v-btn v-show="$store.state.jwt !== null" @click="assign">Asignar</v-btn>
        <v-btn @click="close">Cerrar</v-btn>
    </div>
</template>

<script>  
  import { Subject, fromEvent, timer } from 'rxjs'
  import { map, throttleTime, switchMap } from 'rxjs/operators'
  import { SDP_Mixin } from '../sdp'

  export default {
    mixins: [SDP_Mixin],
    props: {roomInitial: String, adminInitial: Boolean},
    mounted(){
        this.incommingKeyup$ = Subject()        
        timer(0, 1000).pipe(
            switchMap(() => this.incommingKeyup$)
        ).subscribe(x => x === true ? this.keyup = true: this.keyup = false)

        const input = this.$refs.input
        fromEvent(input.$el, 'keyup').pipe(
            throttleTime(2000),
            map(event => event.key) 
        ).subscribe(key => {            
            this.$rpc('keyup', {room: this.room, key})
        })        
    },
    data(){
        return {
            room: this.roomInitial,
            msg: '',
            admin: this.adminInitial || false,
            keyup: false
        }
    },
    computed: {
        keyup_notify(){
            if(this.keyup)
                return 'escribiendo...'
            else
                return ''
        },
        messages(){
            return this.$store.state.sdp.subs.messages_of_room
        },
        keyup_in_room(){
            if(this.admin){
                return this.$store.state.sdp.subs.keyup_in_room[0].keyup
            }else{
                return this.$store.state.sdp.subs.keyup_in_room[0].keyup_admin
            }
        }
    },
    watch:{
        // eslint-disable-next-line
        keyup_in_room(val){
            this.incommingKeyup$.onNext(true)
        },
        isConnected(connected){
            if(connected && this.room)
                this.$sub('keyup_in_room', {room: this.room})
                this.$sub('messages_of_room', {room: this.room})
        }
    },
    methods: {
        async close(){
            await this.$rpc('close_room', {room: this.room})
        },
        async newMessage(){
            if(this.room === null){
                this.room = await this.$rpc('create_room')
            }
            this.$rpc('new_message', {room: this.room, msg: this.msg})
        },
        async assign(){
            this.$rpc('set_owner_of_room', {room: this.room})
        }
    }
  }
</script>

<style scoped>
    
</style>