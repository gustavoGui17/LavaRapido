import express from "express";
import connetcDataBase from "./src/database/db.js";
import dotenv from "dotenv";

import veiculoRoute from "./src/routes/veiculoRoute.js";
import userRoute from "./src/routes/userRoute.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connetcDataBase()
app.use(express.json());

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/veiculo", veiculoRoute);


app.listen(port, () => console.log(`Servidor Rodando na Porta ${port}`));