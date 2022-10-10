const express = require("express");
const router = express.Router();
const controller = require("../controllers/employee.controller")

router.get("/", controller.getEmployees);
router.post("/", controller.createEmployee);
router.get("/:id", controller.getEmployee);
router.put("/:id", controller.updateEmployee);
router.delete("/:id", controller.deleteEmployee);

module.exports = router; 