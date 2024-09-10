const express = require("express");
const router = express.Router();
const news = require('../models/news-model');
const product = require('../models/product-model');

router.get('/dashboard', async (req,res) => {
    
            try {
                const newses = await news.find()
            if (newses){
               res.send({ newses: newses})
            }
            } catch (error) {
                console.log(error)
            }
        }
        
        

);
router.get('/product', async (req,res) => {
    
            try {
                const createdProduct = await product.find()
            if (createdProduct){
               res.send({ createdProduct: createdProduct})
            }
            } catch (error) {
                console.log(error)
            }
        }     

);

module.exports = router;