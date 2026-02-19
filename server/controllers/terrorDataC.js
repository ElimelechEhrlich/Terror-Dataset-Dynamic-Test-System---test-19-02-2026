import { readData } from "../servises/data.js";

export async function getData(req, res) {
    const data = await readData();
    try {
      res.json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

