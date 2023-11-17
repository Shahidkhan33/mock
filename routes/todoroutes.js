const {
    gettodos,
    posttodos,
    deletetodos,
    gettodo,
    updatetodo,
    updatetodostatus
} = require('../controller/todocontroller.js');

const router = require('express').Router();

router.get("/:userid/", gettodos )
router.post("/:userid/",  posttodos)
router.delete("/:userid/:id", deletetodos)
router.get("/:userid/:id", gettodo)
router.put("/:userid/:id", updatetodo)
router.put("/:userid/status/:id", updatetodostatus)

module.exports = router;