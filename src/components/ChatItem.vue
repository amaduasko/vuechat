<template>
    <v-container chat-item outline>
        <v-layout color="primary" row wrap>
            <p class="name" >{{chat.name}}</p>
            <p class="msg-item">{{chat.msg}}</p>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name:'ChatItem',
    props:['chat'],
}
</script>

<style scoped>
    .chat-item {
        border-bottom: 2px #009688 solid;
        padding: 10px;
        margin: 1% auto;
    }
    .name{
        color: #00BCD4;
        font-size: 95%;
        width: 40%;
    }
    .msg-item{
        line-height: 2;
    }
    p{
        font-size: 60%;
        margin-bottom: 0;
    }
    @media (max-width: 575.98px) { 
        .name{
            width: 50%;
        }
    }
</style>


