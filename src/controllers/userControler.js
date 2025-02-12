const userService = require('../services/userService')
const mongoose = require ("mongoose")

const create = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).send({ message: "Por favor prencher todos os campos" })
    }

    const user = await userService.createService(req.body)

    if (!user) {
        return res.status(400).send({ message: "Erro na criacao do usuario" });
    }

    res.status(201).send({
        message: "Usuario criado com suceso",
        user: {
            id: user._id,
            name,
            email,
            password,
        }
    })
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (users.length === 0) {
        return res.status(400).send({ message: "NãO tem usuarios cadastrados" });
    }

    res.send(users)

}

const findById = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ message: "ID invalido" });
    }

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "Usuario não encontrado" });
    }

    res.send(user);
}

const update = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name && !email && !password) {
        res.status(400).send({ message: "Por favor prencher todos os campos para o update" });
    }

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ message: "ID invalido" });
    }

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "Usuario não encontrado" });
    }

    await userService.updateService(
        id,
        name,
        email,
        password
    )

    res.send({message: "Usuario alterado com sucesso"})

};
module.exports = { create, findAll, findById, update };