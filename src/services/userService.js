import User from "../models/User.js";

const createService = (body) => User.create(body);

const findAllService = async () => {
    return await User.find().populate("veiculos");
};

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    email,
    password) => User.findOneAndUpdate(
        { _id: id },
        { name, email, password })

export default {
    createService,
    findAllService,
    findByIdService,
    updateService
}