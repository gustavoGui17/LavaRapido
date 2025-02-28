import express from "express";
import connetcDataBase from "./src/database/db.js";
import userRoute from "./src/routes/userRoute.js";
import veiculoRoute from "./src/routes/veiculoRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connetcDataBase()
app.use(express.json());

app.use("/user", userRoute);
app.use("/veiculo", veiculoRoute);


app.listen(port, () => console.log(`Servidor Rodando na Porta ${port}`));