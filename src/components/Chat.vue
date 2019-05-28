<template>
    <div>
        <h2 v-bind:key="chat.id" v-for="chat in chats">
            <ChatItem v-bind:chat='chat' />
        </h2>
    </div>    
</template>

<script>
import ChatItem from './ChatItem'
export default {
    name : 'Chat',
    components:{
        ChatItem
    },
    props:['chats']
}
</script>

<style scoped>
    div{
        width: 70%;
    }
    @media (max-width: 575.98px) { 
        div{
            width: 100%;
        }
    }
</style>

