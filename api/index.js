const express = require('express'),
 app = express(),
 axios = require('axios'),
 cors = require('cors'),
 mcache = require('memory_cache'),
 port = process.env.PORT || 5000;
 
 app.use(cors());
 app.use(express.json());

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


 app.get('/api/search', cache(10), (req, res)=>{
    let query = req.query.q
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(e => {res.status(200).json(e.data);})
    .catch(error => {console.log(error);})
 });


app.listen(port, ()=> console.log('Backend server live on ' + port));