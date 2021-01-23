const express = require('express');   
const router = express.Router();

module.exports = () => {
  router.get('/', (req, res)=>{
    res.send('Welcomen to GTM');
  });
  
  return router;
}


