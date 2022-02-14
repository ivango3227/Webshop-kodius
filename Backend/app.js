require ("dotenv").config();
const express=require("express");
const bodyParser=require("body-parser");
const mongoose= require("mongoose");
const cors=require("cors");
const app=express();

const PORT=process.env.PORT || 9000;
const DB_URI ="mongodb://localhost:27017/";
const  DB ="ordersDB";

//Middleware
app.use(express.json());

app.set('view engine', 'ejs');
mongoose.connect(DB_URI+DB,{
  useUnifiedTopology: true,
  useNewUrlParser:true,
  connectTimeoutMS:10000
  
});
const db=mongoose.connection;

db.once("open",()=>console.log("connected to the database"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());

//Event listeners
db.once("open",()=>console.log("conected to ${DB} database"));

let OrderSchema= new mongoose.Schema(
  {
    products: [mongoose.SchemaTypes.Mixed],
    totalPrice: Number,
    userInfo:{
        fname:String,
        lname:String,
        streetName:String,
        streetNumber:String,
        email:String
    }
  }
)


let Order=new mongoose.model("Order",OrderSchema);

 //Route to register an order
 app.post("/api/order/add",function(req,res){
   let order = new Order(req.body);
   console.log(req.body);
   order.save((err,result)=>{
     if(!err){
       delete result._doc.__v;
       res.json(result._doc);
     } else{
       res.status(400).json({"error":err});
     }
   });
 });


 app.listen(PORT, () => {
  console.log(app.get("env").toUpperCase() + " Server started on port " + (PORT));
});