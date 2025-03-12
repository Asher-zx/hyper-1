var express = require('express');
var router = express.Router();

router.get('/:id/move', function (req, res, next) {
    res.send("Move made");
});

module.exports = router;
