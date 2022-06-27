const express=require('express');
const notes=require('./data/notes')
const dotenv=require('dotenv')
const App=express();
dotenv.config();
const PORT=process.env.PORT||5000
App.listen(PORT,console.log(`listening at ${PORT}`))

App.get('/', (req, res) => {
    res.send('Hello World!')
  })

  App.get('/api/notes',(req,res)=>{
    res.send(notes)
  })

  App.get('/api/notes/:id', (req, res) => {
    const note=notes.find((n)=> n._id===req.params.id)
    if(note){

        res.send(note)
    }
    else{
        res.send("noting found")
    }
    // res.send(`user ${req.params.id}`)
  })