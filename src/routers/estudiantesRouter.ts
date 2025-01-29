import express, { Router } from "express";
import estCont from "../controllers/estudiantesController";

const estudiantesRoutes = Router();

//obtener todos los estudiantes almacenados en la DB
estudiantesRoutes.get("/", estCont.consultar);
estudiantesRoutes.post("/", estCont.ingresar);

estudiantesRoutes
  .route("/:id") //este metodo permite especificar una ruta dinamica en comun.
  .get(estCont.consultarDetalle)
  .put(estCont.modificarTotalmente)
  .delete(estCont.eliminar);

export default estudiantesRoutes;
