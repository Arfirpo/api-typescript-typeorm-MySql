import { Router } from "express";
import curCont from "../controllers/cursosController";

const cursosRoutes = Router();

cursosRoutes.get("/", curCont.consultar);
cursosRoutes.post("/", curCont.ingresar);
cursosRoutes.post("/registrarEstudiante", curCont.asociarEstudiante);

cursosRoutes
  .route("/:id") //este metodo permite especificar una ruta dinamica en comun.
  .get(curCont.consultarDetalle)
  .put(curCont.modificarTotalmente)
  .delete(curCont.eliminar);

export default cursosRoutes;
