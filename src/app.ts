import express, { json, type Request, type Response } from "express";
import morgan from "morgan";
import cors from "cors";
import estRoutes from "./routers/estudiantesRouter";
import profRoutes from "./routers/profesoresRouter";
import curRoutes from "./routers/cursosRouter";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(json());

app.use("/api/estudiantes", estRoutes);
app.use("/api/cursos", curRoutes);
app.use("/api/profesores", profRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor de agustin.");
});
app.get("/api", (req: Request, res: Response) => {
  res.send("Tambien Servidor de agustin.");
});

export default app;
