const veiculoService = require('../services/veiculosService')

const create = async (req, res) => {
    
    const {placa, modelo, cor, nomeCliente, contato} = req.body;

    if (!placa || !modelo || !cor || !nomeCliente || !contato){
        res.status(400).send({ message: "Por favor prencher todos os campos"});
    }

    const veiculo = await veiculoService.createService(req.body)

    if (!veiculo) {
        return res.status(400).send({ message: "Erro na criacao do usuario" });
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

const findAll = async (req, res) => {
    const veiculos = await veiculoService.findAllService();

    if (veiculos.length === 0) {
        return res.status(400).send({ message: "NãO tem Veiculos cadastrados" });
    }

    res.send(veiculos)
}

const findById = async (req, res) => {
    const id = req.params.id;

    const veiculo = await veiculoService.findByIdService(id);

    res.send(veiculo);
}

const update = async (req, res) => {
    const {placa, modelo, cor, nomeCliente, contato} = req.body;

    if (!placa && !modelo && !cor && !nomeCliente && !contato){
        res.status(400).send({ message: "Por favor prencher um campo para editar"});
    }

    const {id, veiculo} = req;

      await veiculoService.updateService(
            id,
            placa,
            modelo,
            cor,
            nomeCliente,
            contato
        )

    res.send({message: "Veiculo alterado com sucesso"})

}


module.exports = { create, findAll, findById, update}