const Pirate = require("../models/pirate_model");


const create = (req, res) => {
    Pirate.create(req.body)
        .then((pirate) => res.status(200).json(pirate))
        .catch((err) => res.status(400).json(err));
};

const findOne = (req, res) => {
    const { id } = req.params;
    Pirate.findById(id)
        .then((pirate) => res.status(200).json(pirate))
        .catch((err) => res.status(400).json(err));
}


const findAll = (req, res) => {
    Pirate.find()
        .then((pirate) => res.status(200).json(pirate))
        .catch((err) => res.status(400).json(err));
};

const updateOne = (req, res) => {
    const { id } = req.params;
    Pirate.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then(pirate => res.status(200).json(pirate))
        .catch(err => res.status(400).json(err))
}

const deleteOne = (req, res) => {
    const { id } = req.params;
    Pirate.findByIdAndDelete(id)
        .then((pirate) => res.status(200).json(pirate))
        .catch((err) => res.status(400).json(err));
}

module.exports = { create, findOne, findAll, updateOne, deleteOne }