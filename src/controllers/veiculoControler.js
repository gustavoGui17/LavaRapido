const create = (req, res) => {
    
    const {placa, modelo, cor, nomeCliente, contato} = req.body;

    if (!placa || !modelo || !cor || !nomeCliente || !contato){
        res.status(400).send({ message: "Por favor prencher todos os campos"});
    }

    res.status(201).send({
        message: "Veiculo cadastrado",
        veiculo: {
            placa,
            modelo,
            cor,
            nomeCliente,
            contato,
        }
    });
};

module.exports = { create }