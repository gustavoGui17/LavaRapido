import User from "../models/User.js"
import Veiculo from "../models/Veiculo.js";

export const createService = async (veiculoData) => {
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

export const findAllService = (offset, limit) => Veiculo.find().sort({_id: -1}).skip(offset).limit(limit).populate("usuario");

export const countVeiculos = () => Veiculo.countDocuments();

export const findByIdService = (id) => Veiculo.findById(id);

export const updateService = (
    id,
    placa,
    modelo,
    cor,
    nomeCliente,
    contato) => Veiculo.findOneAndUpdate(
        { _id: id },
        { placa, modelo, cor, nomeCliente, contato })

// export default {
//     createService,
//     findAllService,
//     countVeiculos,
//     findByIdService,
//     updateService,
// }