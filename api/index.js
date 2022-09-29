const { json } = require("body-parser")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const {
    MONGO_URL, PORT,
} =  process.env;

mongoose
.connect(MONGO_URL)  //conecto con base de datos
.then(()=> console.log("DB connect!"))
.catch((error)=>{
    console.log(error)
})


app.use(cors());
app.use(express.json()) //para que pueda leer el json 
app.use("/api/user" , userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart" , cartRoute);
app.use("/api/order", orderRoute)
app.use("/api/checkout", stripeRoute);

app.listen(PORT , ()=>{   //especifico puerto
    console.log("backend server is running")
})