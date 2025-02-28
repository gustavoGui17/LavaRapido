import mongoose from "mongoose"

const connetcDataBase = () => {
    console.log("Connectando ao banco de dados")

    mongoose.connect(process.env.MONGODB_URI,)
        .then(() => console.log("Connectado ao banco com sucesso"))
        .catch((error) => console.log(error));
}

export default connetcDataBase;