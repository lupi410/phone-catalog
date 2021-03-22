import express, { Request, Response } from "express";
import * as PhoneService from "./phones.service";
import { BaseItem, Phone } from "./phones.types";

export const phonesRouter = express.Router();

// GET phones
phonesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Phone[] = await PhoneService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
// GET phones/:id
phonesRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Phone | undefined = await PhoneService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("phone not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST items
phonesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;
    const newItem = await PhoneService.create(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
// PUT items/:id
phonesRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: Phone = req.body;

    const existingItem: Phone | undefined = await PhoneService.find(id);

    if (existingItem) {
      const updatedItem = await PhoneService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await PhoneService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
// DELETE items/:id
phonesRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await PhoneService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
