import type { RequestHandler } from "express";
import JokesRepository from "./jokesRepository";

// 🔹 Lire toutes les blagues
const browse: RequestHandler = async (req, res) => {
  try {
    const jokes = await JokesRepository.readAll();
    res.json(jokes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const read: RequestHandler = async (req, res) => {
  const id = Number.parseInt(req.params.id);
  try {
    const joke = await JokesRepository.read(id);
    if (!joke) {
      res.status(404).json({ error: "Blague non trouvée" });
      return;
    }
    res.json(joke);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// 🔹 Ajouter une blague
const add: RequestHandler = async (req, res) => {
  const { content, author, category_id } = req.body;

  if (!content || !category_id || !author) {
    res.status(400).json({ error: "Données invalides" });
  }

  try {
    const id = await JokesRepository.create({ content, author, category_id });
    res.status(201).json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// 🔹 Lire une blague aléatoire d'une catégorie
const random: RequestHandler = async (req, res) => {
  const categoryId = Number.parseInt(req.params.categoryId);
  try {
    const joke = await JokesRepository.readRandom(categoryId);
    if (!joke) {
      res.status(404).json({ error: "Aucune blague trouvée" });
      return;
    }
    res.json(joke);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export default {
  browse,
  read,
  add,
  random,
};
