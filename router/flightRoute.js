const router = require('express').Router();

const controller = require("../controller/flightController");

router
.get("/", controller.getFlights)
.get("/:id", controller.getFlight)
.post("/", controller.createFlights)
.put("/:id", controller.updateFlight)
.delete("/:id", controller.deleteFlights);

module.exports = router;