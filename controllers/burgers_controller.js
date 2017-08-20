const express = require("express");
const router = express.Router();
/*
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  cat.all((err, data) => {
    if(err) throw err;

    const hbsObject = { cats: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res) => {
  cat.create(["burger_name", "devoured"], 
             [req.body.burger_name, req.body.devoured], 
             () => res.redirect("/")); 
});

router.put("/:id", (req, res) => {
  const condition = 'id = ' + req.params.id;
  console.log('condition: ', condition);
  cat.update({sleepy: req.body.devoured }, condition, () => res.redirect("/")); 
});
*/
// Export routes for server.js to use.
module.exports = router;
