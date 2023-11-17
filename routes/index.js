const todoroutes = require('./todoroutes.js');
const useroutes = require('./userroutes.js');
const adminroutes = require('./adminroutes.js');
const router = require('express').Router();

router.use("/todos", todoroutes);
router.use("/users", useroutes);
router.use("/admin", adminroutes)

module.exports = router;