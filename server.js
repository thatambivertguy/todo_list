const express=require('express')
const app=express()
const Sequelize=require('sequelize')
var tasknew=[];
app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(__dirname+'/public'))
const sequelize = new Sequelize('testdb', 'root', 'root', {
    dialect: 'sqlite',
    storage: './db.sqlite3'
  })
  const Task1 = sequelize.define('taskw', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    striked: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }
  )
  
let tasks=[]
Task1.sync().then(()=>{
    app.listen(3000,()=>{
        console.log("server started at http://localhost:3000")
    })
})
app.get('/todos',(req,res)=>{
  Task1.findAll().then(taskw1=>{
    // console.log(taskw1.taskw)
    //  let abcd=JSON.parse(taskw1)
    //  console.log(abcd)
    res.json(taskw1)
  })
})


app.get('/',(req,res)=>{
     Task1.findAll().then(tasks1=>{
      res.render('index',{tasks1})
     })
    })
// app.post('/',(req,res)=>{
//     tasks.push(req.body.task)
//     res.redirect('/')

// })
app.post('/',(req,res)=>{
    const newtask={
        title : req.body.task
        }
      Task1.create(newtask).then(taskw=>{
      Task1.findAll().then(abc=>{
        res.json(abc)
      })
      //  tasknew=taskw
        //  res.json(Task1)
        // res.redirect('/')
    })
})




