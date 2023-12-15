const express = require('express');
const app = express();
const users = [
    {id:1, name:'trousers', qiymet:30, say:5},
    {id:2, name:'bag',qiymet:20, say:10},
    {id:3, name:'shirt',qiymet:20, say:22},
    {id:4, name:'hat',qiymet:10, say:38},
    {id:5, name:'gloves',qiymet:7, say:14},
    {id:6, name:'shoes',qiymet:65, say:24},
    {id:7, name:'bracelet', qiymet:100, say:45},
]
app.get('/', (req,res)=>{

    res.send("home")
})

app.get('/users', (req,res)=>{
   
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedUser = users.find(user=>user.id == userID)
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('The User not found!')
    }
})

app.listen(3000, ()=>{
    console.log("server is worked!");
})