import express from "express";
import catchEmailRoutes from "./catchEmail.routes";

const routes = express.Router();

routes.use("/", catchEmailRoutes);

export default routes;
