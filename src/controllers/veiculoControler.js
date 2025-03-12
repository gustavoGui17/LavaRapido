import veiculoService from "../services/veiculosService.js"

const create = async (req, res) => {
    try {
        const { placa, modelo, cor, nomeCliente, contato, usuario } = req.body;

        if (!placa || !modelo || !cor || !nomeCliente || !contato || !usuario) {
            return res.status(400).send({ message: "Por favor, preencha todos os campos" });
        }

        const veiculo = await veiculoService.createService({
            placa,
            modelo,
            cor,
            nomeCliente,
            contato,
            usuario
        });

        if (!veiculo) {
            return res.status(400).send({ message: "Erro na criação do veículo" });
        }

        res.status(201).send({
            message: "Veículo cadastrado com sucesso",
            veiculo
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        const veiculos = await veiculoService.findAllService();

        if (veiculos.length === 0) {
            return res.status(400).send({ message: "NãO tem Veiculos cadastrados" });
        }

        res.send(veiculos)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const findById = async (req, res) => {
    try {
        const id = req.params.id;

        const veiculo = await veiculoService.findByIdService(id);

        res.send(veiculo);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const update = async (req, res) => {
    try {
        const { placa, modelo, cor, nomeCliente, contato } = req.body;

        if (!placa && !modelo && !cor && !nomeCliente && !contato) {
            res.status(400).send({ message: "Por favor prencher um campo para editar" });
        }

        const { id, veiculo } = req;

        await veiculoService.updateService(
            id,
            placa,
            modelo,
            cor,
            nomeCliente,
            contato
        )

        res.send({ message: "Veiculo alterado com sucesso" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }

};

export default  { create, findAll, findById, update }