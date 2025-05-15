import express from 'express';
import { create, findAll, findById, topVeiculo, searchByPlaca, update } from "../controllers/veiculoControler.js";
import { validId, validVeiculo } from '../middlewares/global.middlewares.js'
import { authMiddleware } from '../middlewares/auth.middlerware.js'

const router = express.Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topVeiculo);
router.get("/search", searchByPlaca)
router.get("/:id", validId, validVeiculo, findById);
router.patch("/:id", validId, validVeiculo, update);

export default router