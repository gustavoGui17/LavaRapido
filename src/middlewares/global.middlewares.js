import mongoose from "mongoose"
import userService from "../services/userService.js"
import veiculoService from "../services/veiculosService.js"

export const validId = (req, res, next) => {

    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "ID invalido" });
        }

        next()
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const validUser = async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await userService.findByIdService(id)

        if (!user) {
            return res.status(400).send({ message: "Usuario não encontrado" });
        }

        req.id = id;
        req.user = user;

        next()
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const validVeiculo = async (req, res, next) => {
    try {
        const id = req.params.id;

        const veiculo = await veiculoService.findByIdService(id)

        if (!veiculo) {
            return res.status(400).send({ message: "Veiculo não encontrado" });
        }

        req.id = id;
        req.veiculo = veiculo;

        next()
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

