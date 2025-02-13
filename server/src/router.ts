import express from "express";

const router = express.Router();
const app = express();

app.use(express.json()); // ✅ Indispensable pour parser le JSON
app.use(express.urlencoded({ extended: true })); // (optionnel, pour les formulaires)

app.use(router); // 💡 Place tes routes après les middlewares



/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import JokesActions from "./modules/jokes/jokesActions";
router.get("/jokes", JokesActions.browse);
router.get("/jokes/:id", JokesActions.read);
router.post("/jokes/add", JokesActions.add);
router.get("/jokes/category/:categoryId", JokesActions.random);

export default router;
