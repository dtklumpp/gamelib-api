// imports
const router = require("express").Router();
const ctrl = require("../controllers");

const authRequired = require("../middleware/authRequired");

// routes
router.get("/", authRequired, ctrl.games.index);
router.get("/:id", ctrl.games.show);
router.post("/", ctrl.games.create);
router.put("/:id", ctrl.games.update);
router.delete("/:id", ctrl.games.destroy);

// exports
module.exports = router;
