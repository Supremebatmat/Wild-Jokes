import DatabaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Joke = {
  id: number;
  content: string;
  author: string;
  category_id: number;
};

class JokesRepository {
  async create(joke: Omit<Joke, "id">) {
    const [result] = await DatabaseClient.query<Result>(
      "INSERT INTO jokes (content, author, category_id) VALUES (?, ?, ?)",
      [joke.content, joke.author, joke.category_id],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await DatabaseClient.query<Rows>(
      "SELECT * FROM jokes WHERE id = ?",
      [id],
    );

    return rows[0] as Joke;
  }
  async readAll() {
    const [rows] = await DatabaseClient.query<Rows>("SELECT * FROM jokes");
    return rows as Joke[];
  }

  async readRandom(categoryId: number) {
    const [rows] = await DatabaseClient.query<Rows>(
      "SELECT * FROM jokes WHERE category_id = ? ORDER BY RAND() LIMIT 1",
      [categoryId],
    );

    return rows[0] as Joke;
  }

  async update(id: number, joke: Omit<Joke, "id">) {
    await DatabaseClient.query<Result>(
      "UPDATE jokes SET content = ?, author = ?, category_id = ? WHERE id = ?",
      [joke.content, joke.author, joke.category_id, id],
    );
  }

  async delete(id: number) {
    await DatabaseClient.query<Result>("DELETE FROM jokes WHERE id = ?", [id]);
  }
}

export default new JokesRepository();
