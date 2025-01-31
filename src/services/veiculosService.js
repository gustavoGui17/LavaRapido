const Veiculo = require('../models/Veiculo');

const create = (body) => Veiculo.create(body)

module.exports = {
    create,
}