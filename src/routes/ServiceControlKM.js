const express = require("express");
const router = express.Router();

const ServiceControlKMController = require("../controllers/ServiceControlKM.js");

/** CREATE*/
router.post("/controlKM", ServiceControlKMController.create);
/** READ */
router.get("/controlKM", ServiceControlKMController.findAll);
/** UPDATE */
router.put("/controlKM/update/:id", ServiceControlKMController.update);
/** DELETE */
router.delete("/controlKM/delete/:id", ServiceControlKMController.delete);

module.exports = router;
