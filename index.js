require('dotenv').config()
const express=require('express')

const ServerApp=express()

// cors-connect front end
const cors=require('cors')
const router=require('./Routes/routes')
ServerApp.use(cors())
require('./db/connection')


// convert all incoming json data to js 
ServerApp.use(express.json())
ServerApp.use(router)


// port set-listen
const PORT=4000 || process.env.PORT

ServerApp.listen(PORT,()=>{
    console.log(`________Task Server Started At ${PORT}________`);
})

// resolve api requests
ServerApp.get('/',(req,res)=>{
    res.send('<h1>get requested received</h1>')
})

ServerApp.get('/getexc',(req,res)=>{
    res.send('<h1>get requested 2 received</h1>')
})