
const express = require('express')
const cors = require('cors')// permit to access server from differents domain
const bodyParser = require('body-parser')//for form post

const app = express()//calling express to use server
app.use(bodyParser.json())//apcepting as json data to read it 
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors[corsOptions])

const port = 4000//port to run the serve on
const server = app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})