const { verifyToken, verifyTokenAndAuthorization, verifyTokenandAdmin } = require("./verifyToken")
const Cart = require("../models/Cart")

const router= require("express").Router()




//create 
 router.post("/", verifyToken,  async(req,res)=>{
    const newCart = new Product(req.body)

    try{
        const saveCart = await newCart.save()
        res.status(200).json(saveCart);
    }catch(err){
        res.status(500).json(err)
    }

}) 



//modificar
router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{

    try{
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id , 
            {
            $set:req.body
            }, 
            {new:true}
        );
        res.status(200).json(updateCart)
    }catch(err){
        res.status(500),json(err)
    }
    
})  


//delete
 router.delete("/:id", verifyTokenAndAuthorization, async(req,res)=>{
    try{    
        await Cart.findByIdAndDelete(re.params.id)
        res.status(200).json("Cart has been deleted")

    }catch(err){
        res.status(500).json(err)
    }
    
}) 
 


//get cart
  router.get("/find/:id", verifyTokenAndAuthorization, async(req,res)=>{
    try{    
        const cart = await Cart.findOne({id : req.params.id})
        res.status(200).json(cart)

    }catch(err){
        res.status(500).json(err)
    }

})
  



//get all 
  router.get("/", verifyTokenandAdmin ,async(req,res)=>{
      try{

        const carts = await Cart.find()
        res.status(200).json(carts)

      }catch(err){
          res.status(500).json(err)
      }

})


module.exports = router