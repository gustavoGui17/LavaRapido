const create = (req, res) => {

    const {name, email, password} = req.body;

    if (!name || !email || !password){
        res.status(400).send({ message: "Por favor prencher todos os campos"})
    }

    res.status(201).send({
        message: "User criado com suceso",
        user: {
            name,
            email,
        }
    })
};

module.exports = { create };