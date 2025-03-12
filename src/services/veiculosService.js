import User from "../models/User.js"
import Veiculo from "../models/Veiculo.js";

// const createService = (body) => Veiculo.create(body)

const createService = async (veiculoData) => {
    const veiculo = new Veiculo(veiculoData);
    await veiculo.save();

    const user = await User.findById(veiculo.usuario);
    
    if (!user) {
        throw new Error("Usuário não encontrado!");
    }

    await User.findByIdAndUpdate(
        veiculo.usuario,
        { $push: { veiculos: veiculo._id } },
        { new: true }
    );

    return veiculo;
};

const findAllService = () => Veiculo.find();

const findByIdService = (id) => Veiculo.findById(id);

const updateService = (
    id,
    placa,
    modelo,
    cor,
    nomeCliente,
    contato) => Veiculo.findOneAndUpdate(
        { _id: id },
        { placa, modelo, cor, nomeCliente, contato })

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
}