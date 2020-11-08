var express = require("express");
var router = express.Router()

router.get("/", function(req,res,next) {
    res.send("SUCCESS! Data has been sent from backend to front-end.")
})

module.exports = router;