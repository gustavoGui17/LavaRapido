const userService = require('../services/userService')

const create = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).send({ message: "Por favor prencher todos os campos" })
    }

    const user = await userService.create(req.body)

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

module.exports = { create };