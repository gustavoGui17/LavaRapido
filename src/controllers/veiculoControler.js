import {
    createService,
    findAllService,
    countVeiculos,
    findByIdService,
    updateService
} from "../services/veiculoService.js";

const create = async (req, res) => {
    try {
        const { placa, modelo, cor, nomeCliente, contato, usuario } = req.body;

        if (!placa || !modelo || !cor || !nomeCliente || !contato || !usuario) {
            return res.status(400).send({ message: "Por favor, preencha todos os campos" });
        }

        const veiculo = await createService({
            placa,
            modelo,
            cor,
            nomeCliente,
            contato,
            usuario: req.userId,
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
        let { limit, offset } = req.query;

        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5
        }

        if (!offset) {
            offset = 0
        }

        const veiculos = await findAllService(offset, limit);
        const total = await countVeiculos();
        const currentUrl = req.baseUrl

        const next = offset + limit;
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

        if (veiculos.length === 0) {
            return res.status(400).send({ message: "NãO tem Veiculos cadastrados" });
        }

        res.send({
            nextUrl,
            previous,
            limit,
            offset,
            total,

            results: veiculos.map(item => ({
                id: item. _id,
                placa: item.placa,
                modelo: item.modelo,
                cor: item.cor,
                nomeCliente: item.nomeCliente,
                contato: item.contato
            }))
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const findById = async (req, res) => {
    try {
        const id = req.params.id;

        const veiculo = await findByIdService(id);

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

        await updateService(
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

export { create, findAll, findById, update }