//step1: create a folder
//step2: move into that folder
//step3: np init -y
//step4: open folder using VSCode
//step5: npm i express
//step6: create server.js



//Server Instantiate
const express = require ('express');
const app = express();


//activate the server on 3000 port
app.listen(3000, () => {
    console.log("Server Started at port no. 3000")
});

//ised to parse req.body in express -> PUT or POST
conat bodyParser = require('body-parser');
//specifically parse JSON data & add it to the request. Body object
app.use(bodyParser.json());

//Routes
app.get('/', (request,response) => {
    response.send("Hello jee, kaise ho saare");
})

app.post('/api/cars', () => {
   const {name, brand} = request.body;
   console.log(name);
   console.log(brand);
   response.send("Car Submitted Successfully.")
})

const mongoose = require('mongoose');
mongoose.connect('mongoose://localhost:27017/myDatabase',{
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successful")})
.catch((error)=> {console.log("Recieved an error")});