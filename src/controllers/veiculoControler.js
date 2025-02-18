import veiculoService from "../services/veiculosService.js"

const create = async (req, res) => {

    try {
        const { placa, modelo, cor, nomeCliente, contato } = req.body;

        if (!placa || !modelo || !cor || !nomeCliente || !contato) {
            res.status(400).send({ message: "Por favor prencher todos os campos" });
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
    } catch (err) {
        res.status(500).send({ message: err.message })
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