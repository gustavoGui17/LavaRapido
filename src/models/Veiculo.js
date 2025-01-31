const mongoose = require('mongoose')

const veiculoSchema = new mongoose.Schema({
    placa: {
        type: String,
        required: true,
        unique: true
    },
    modelo: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    nomeCliente: {
        type: String,
        required: true
    },
    contato:{
        type: String,
        required: true
    },
    entryDate: {
        type: Date,
        default: Date.now 
    },
    status: {
        type: String,
        enum: ["pendente", "em atendimento", "finalizado"],
        default: "pendente"
    }
})

const Veiculo = mongoose.model("Veiculo", veiculoSchema);

module.exports = Veiculo;