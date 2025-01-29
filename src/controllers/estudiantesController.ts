import type { Request, Response } from "express";
import { Estudiante } from "../models/estudiantesModel";

class EstudiantesController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const data = await Estudiante.find();
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Estudiante.findOneBy({ id: Number(id) });
      if (!registro) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
      }
      res.status(200).json(registro);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      const nuevoEstudiante = Estudiante.create(req.body);
      await nuevoEstudiante.save();
      res.status(201).json(nuevoEstudiante);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send("Error interno del servidor");
      }
    }
  }

  async modificarTotalmente(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Estudiante.findOneBy({ id: Number(id) });
      if (!registro) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
      }
      await Estudiante.update({ id: Number(id) }, req.body);
      const registroActualizado = await Estudiante.findOneBy({
        id: Number(id),
      });
      res.status(200).json(registroActualizado);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }

  async eliminar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Estudiante.findOneBy({ id: Number(id) });
      if (!registro) {
        return res.status(404).json({ error: "Estudiante no encontrado" });
      }
      await Estudiante.delete({ id: Number(id) });
      res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new EstudiantesController();
