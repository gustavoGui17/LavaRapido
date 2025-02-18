import  express  from 'express';
import veiculoControler from "../controllers/veiculoControler.js"
import { validId, validVeiculo } from '../middlewares/global.middlewares.js'

const router = express.Router();

router.post("/", veiculoControler.create)
router.get("/", veiculoControler.findAll);
router.get("/:id", validId, validVeiculo, veiculoControler.findById)
router.patch("/:id", validId, validVeiculo, veiculoControler.update)

export default router