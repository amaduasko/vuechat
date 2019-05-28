const express = require('express');
const cors = require ('cors')
const bodyParser = require('body-parser')
const serveStatic = require("serve-static")
const path = require('path');
const app = express();
app.use(cors())
app.use(bodyParser.json())
const chatDb = require('knex')({
    client: 'pg',
    connection: {
      host : 'postgresql-regular-99490',
      user : 'postgres',
      password : 'root',
      database : 'vue-chat'
    }
});
let usersData = []
let name = []
let msg = []
let id = []
/*-----------------Data injection--------------- */
chatDb.select('*').from('users')
.then(data => data.forEach((i) => usersData.push(i)))

app.post('/new-msg', (req,res) => {
    const {name, msg} = req.body
    chatDb('users')
    .insert({
        name : name,
        msg:msg
    })
    .then(res.end())
})
app.get('/msg', (req, res) => {
    usersData.forEach(item => {name.push(item.name); msg.push(item.msg); id.push(item.id)})
    res.json({
        id: id,
        name: name,
        msg: msg
    })
})
const port = process.env.PORT || 80;
app.listen(port);