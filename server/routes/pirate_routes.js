const express = require("express");
const PirateRouter = express.Router();

const { create, findOne, findAll, updateOne, deleteOne } = require("../controllers/pirate_controllers")

PirateRouter
    .route('/')
    .get(findAll)
    .post(create);

PirateRouter
    .route("/:id")
    .get(findOne)
    .put(updateOne)
    .delete(deleteOne);

module.exports = PirateRouter;