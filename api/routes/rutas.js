const axios = require('axios'),
express = require('express'),
router = express.Router(),
mcache = require('memory-cache');

var cache = (duration)=>{
    return (req, res, next) =>{
       let key = '__express__'+ req.originalUrl || req.url
       let cachedBody = mcache.get(key)
       if (cachedBody) {
         res.send(cachedBody)
         return
       } else {
         res.sendResponse = res.send
         res.send = (body) => {
           mcache.put(key, body, duration * 1000);
           res.sendResponse(body)
         }
         next()
       }
     }
 }

 router.get('/api/search', cache(10), (req, res)=>{
    let query = req.query.q
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(e => {return e.data})
    .then(items => {
        const products = [];
        items.results.map(e =>{
            products.push({
                id: e.id,
                title: e.title,
                price: e.price,
                currency: e.currency_id,
                stock: e.available_quantity,
                condition: e.condition,
                img: e.thumbnail,
                buy: e.permalink
            })
        }) 
        return res.send(products)
    })
    .catch(error => {console.log(error);})
 });


 module.exports = router;