import type { Request, Response } from "express";
import { Profesor } from "../models/profesoresModel";

class ProfesorsController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const data = await Profesor.find();
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
      const registro = await Profesor.findOneBy({ id: Number(id) });
      if (!registro) {
        return res.status(404).json({ error: "Profesor no encontrado" });
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
      const nuevoProfesor = Profesor.create(req.body);
      await nuevoProfesor.save();
      res.status(201).json(nuevoProfesor);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send("Error interno del servidor");
      }
    }
  }

  async modificarTotalmente(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Profesor.findOneBy({ id: Number(id) });
      if (!registro) {
        return res.status(404).json({ error: "Profesor no encontrado" });
      }
      await Profesor.update({ id: Number(id) }, req.body);
      const registroActualizado = await Profesor.findOneBy({
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
      const registro = await Profesor.findOneBy({ id: Number(id) });
      if (!registro) {
        return res.status(404).json({ error: "Profesor no encontrado" });
      }
      await Profesor.delete({ id: Number(id) });
      res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new ProfesorsController();
