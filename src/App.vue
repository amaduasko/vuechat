<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <Header />
      </v-toolbar-title>
    </v-toolbar>
    <v-content class="first-content">
      <v-container fluid>
        <v-layout align-center justify-center>
          <Chat v-bind:chats="chats" /> 
        </v-layout>
      </v-container>
    </v-content>
    <v-content class="second-content">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <AddChat v-on:add-chat="addChat"/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Chat from './components/Chat'
import Header from './components/Header'
import AddChat from './components/AddChat'
import axios from 'axios'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
  name: 'app',
  components: {
    Chat,
    Header,
    AddChat
  },
  data(){
    return {
      chats:[ ]
    }
  },
  methods:{
    addChat(newChat){
      document.querySelector('.usrnm').classList.remove('input-error')
      const {name, msg} = newChat;
      if(name !== ""){
        document.querySelector('.msg').classList.remove('input-error')
        if(msg !== ""){
          axios.post("http://localhost:80/new-msg",{
            name, msg
          })
          .then(response => this.chats = [...this.chats, newChat])
          .catch(error => console.log(error))
        } else{ document.querySelector('.msg').classList.add('input-error') }
      } else{ document.querySelector('.usrnm').classList.add('input-error') }
    }
  },
  created() {
    axios.get("http://localhost:80/msg")
      .then(response => {
        for (let i = 0; i < response.data.name.length; i++){
        console.log(response.data.name)
        this.chats.push({
          name:response.data.name[i],
          msg:response.data.msg[i]
        })
      }})
      .catch(error => console.log(error))
  }
}
</script>
<style>
  html { overflow-y: auto }
  .v-toolbar__content>:last-child{
    margin: auto;
  }
  .first-content{
        overflow: auto;
        height: 50%;
  }
  .second-content{
        background: #333;
        box-shadow: -1px -14px 19px -19px rgba(0,0,0,0.75);
        padding: 0 !important;
        z-index: 1;
  }
  .input-error {
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
    }
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-2px, 0, 0);
    }
  
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
}
</style>

