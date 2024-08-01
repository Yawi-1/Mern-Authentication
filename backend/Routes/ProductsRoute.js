import { Router } from "express";
import { ensureAuthenticated } from "../Middlewares/Auth.js";

export const ProductRouter = Router();

ProductRouter.get('/',ensureAuthenticated, (req, res) => {
    res.json([
        {
            name: "Mobile", 
            price: 1000
        },
        {
            name: "Laptop", 
            price: 2000
        }])
})