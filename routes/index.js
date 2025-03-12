var express = require('express');
var router = express.Router();

router.get('/players/:name', (req, res, next) => {
  res.send("Hello " + req.params.name);
});

router.post('/players/create', function (req, res, next) {
  console.log(req.body.name);

  res.status(201).send(`Created player ${req.body.name}`);
});

router.post('/players/update', function (req, res, next) {
  res.send("Player updated");
});

router.delete('/players/:id', function (req, res, next) {
  res.send("Player deleted");
});

module.exports = router;
