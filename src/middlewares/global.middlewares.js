const mongoose = require("mongoose")
const userService = require('../services/userService')
const veiculoService = require('../services/veiculosService')

const validId = (req, res, next) => {

    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID invalido" });
    }

    next()
}

const validUser = async (req, res, next) => {
    const id = req.params.id;

    const user = await userService.findByIdService(id)
 
    if (!user) {
        return res.status(400).send({ message: "Usuario não encontrado" });
    }

    req.id = id;
    req.user = user;

    next()
}

const validVeiculo = async (req, res, next) => {
    const id = req.params.id;

    const veiculo = await veiculoService.findByIdService(id)
 
    if (!veiculo) {
        return res.status(400).send({ message: "Veiculo não encontrado" });
    }

    req.id = id;
    req.veiculo = veiculo;

    next()
}

module.exports = { validId, validUser, validVeiculo };