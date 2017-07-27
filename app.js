const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

let todoItems = [
  {"isChecked": true, "description": "Learn Node Basics"},
  {"isChecked": true, "description": "Learn Express Basics"},
  {"isChecked": true, "description": "Learn Mustache"},
  {"isChecked": false, "description": "Learn HTML forms with Express"},
  {"isChecked": false, "description": "Learn about authentication"},
  {"isChecked": false, "description": "Learn how to connect to PostgreSQL"},
  {"isChecked": false, "description": "Learn how to create database"},
  {"isChecked": false, "description": "Learn SQL"},
  {"isChecked": false, "description": "Lear how to connect to PostgreSQL from Node"},
  {"isChecked": false, "description": "Learn how to use Sequelize"}
]




app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/', function (req, res) {
  res.render("todo", {appType:"Express", todoItems})
})

app.post('/', function (req, res) {
  if(req.body.addCheckboxText === ""){
    editCheckboxes(req, res)
  } else {
    addCheckbox(req, res)
  }
  

  res.render("todo", {appType:"Express", todoItems})
})




function addCheckbox(req, res){
  let newCheckbox = {"isChecked": false, "description": req.body.addCheckboxText}
  todoItems.push(newCheckbox)
}



function editCheckboxes(req, res) {
  console.log(req.body)
  console.log(req.body.checkboxData)

  let checkboxData = req.body.checkboxData.split(",")

  console.log("checkboxData --")
  console.log(checkboxData)

  let counter = 0

  todoItems.forEach((nodeCheckbox) => {
    if(checkboxData[counter] === "true"){
      nodeCheckbox["isChecked"] = true
    } else if(checkboxData[counter] === "false"){
      nodeCheckbox["isChecked"] = false
    } else {

    }
    
    counter++
  })
  console.log(todoItems)
  console.log("add checkbox data--")
  console.log(req.body.addCheckboxText)
}




app.listen(3000, function () {
  console.log('Successfully started express application!');
})