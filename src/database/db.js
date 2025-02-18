import mongoose from "mongoose"

const connetcDataBase = () => {
    console.log("Connectando ao banco de dados")

    mongoose.connect("mongodb+srv://root:root@lavarapido.0xhkp.mongodb.net/?retryWrites=true&w=majority&appName=LavaRapido")
        .then(() => console.log("Connectado ao banco com sucesso"))
        .catch((error) => console.log(error));
}

export default connetcDataBase;