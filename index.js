const express = require("express");
const app = express();
const userRoute = require('./src/routes/userRoute')

const connetcDataBase = require('./src/database/db')

const veiculoRoute = require('./src/routes/veiculoRoute')
const port = 3000;


connetcDataBase()
app.use(express.json());

app.use("/user", userRoute);
app.use("/veiculo", veiculoRoute);


app.listen(port, () => console.log(`Servidor Rodando na Porta ${port}`));