import dotenv from "dotenv";
import userService from "../services/userService.js";
import jwt, { decode } from "jsonwebtoken"

dotenv.config();

export const authMiddleware = (req, res, next) => {

    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.send(401)
        }

        const parts = authorization.split(" ")

        if (parts.length !== 2) {
            return res.send(401)
        }

        const [Schema, token] = parts

        if (Schema !== "Bearer") {
            return res.send(401)
        }

        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({ mensage: "Token invalid!" });
            }
        

        const user = await userService.findByIdService(decoded.id);

        if (!user || !user.id) {
            return res.status(401).send({ message: "Invalid Token! "});
        }

        req.userId = user._id;

        return next()

        })
        
    } catch (error) {
        res.status(500).send(err.mensage);
    }

}