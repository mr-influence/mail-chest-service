import express from "express";
import catchEmailRoutes from "./catchEmail.routes";

const routes = express.Router();

routes.use("/catch-email", catchEmailRoutes);

export default routes;
