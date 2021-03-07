const express = require("express")
const kasController = require("../controller/kasController")
const router = express.Router()
const biodataController = require("../controller/kasController")

router.get("/", kasController.index)
router.get("/create", kasController.create)
router.post("/", kasController.store)
router.get("/:id/edit", kasController.edit)
router.put("/:id", kasController.update)
router.delete("/:id", kasController.destroy)
module.exports = router
