import express, { Router } from "express";
import profCont from "../controllers/profesoresController";

const profesoresRoutes = Router();

//obtener todos los profesores almacenados en la DB
profesoresRoutes.get("/", profCont.consultar);
profesoresRoutes.post("/", profCont.ingresar);

//consultar un estudiante especifico de los almacenados en la DB (c/ rutas dinamicas)
profesoresRoutes
  .route("/:id") //este metodo permite especificar una ruta dinamica en comun.
  .get(profCont.consultarDetalle)
  .put(profCont.modificarTotalmente)
  .delete(profCont.eliminar);

export default profesoresRoutes;
