const express = require("express");
const router = express.Router();

const ServiceControlKMController = require("../controllers/ServiceControlKM.js");
const auth = require('../middlewares/auth.js')

/** CREATE*/
router.post("/controlKM", auth.authorize, ServiceControlKMController.create);
/** READ */
router.get("/controlKM", auth.isAdmin, ServiceControlKMController.findAll);
/** UPDATE */
router.put("/controlKM/update/:id", auth.isAdmin, ServiceControlKMController.update);
/** DELETE */
router.delete("/controlKM/delete/:id", auth.isAdmin, ServiceControlKMController.delete);

module.exports = router;
