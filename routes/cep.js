const express = require('express');
const router = express.Router();
const request = require('request');
/* GET users listing. */
router.get('/:cep', function(req, res) {
  const BASE_URL = 'http://labs.edysegura.com/busca-por-cep/cep/endereco.php?cep='
  const URL = BASE_URL + req.params.cep
  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)  
      res.json(body)
    }
  })
});

module.exports = router;
