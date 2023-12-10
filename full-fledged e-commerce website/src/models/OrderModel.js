const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({


    user:{type:mongoose.Schema.Types.ObjectId, ref:'Users', required:true}, 


    items:[
        {
        Product:{type:mongoose.Schema.Types.ObjectId, ref:'Products', required:true},
              
        quantity:{ type: Number, required: true, min: 1 },
        }] ,

        totalAmount: { type: Number, required: true, min: 0 },
        shippingAddress: { type: String, required: true },  
        status:{type:String,required:true,default:"Pending"}   
})

const OrderModel = mongoose.model('Orders', DataSchema);

module.exports = OrderModel;