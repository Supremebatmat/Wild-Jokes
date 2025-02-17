import { useState } from "react";
import "./DarkJokes.css";

function DevJokes() {
  const [joke, setJoke] = useState("");
  const [author, setAuthor] = useState("");

  const categoryId = 2;

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        `http://localhost:3310/jokes/category/${categoryId}`,
      );
      const data = await response.json();

      if (data?.content) {
        setJoke(data.content);
        setAuthor(data.author || "Anonyme");
      } else {
        setJoke("Aucune blague trouvée !");
        setAuthor("");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la blague:", error);
      setJoke("Erreur de chargement des blagues !");
      setAuthor("");
    }
  };

  return (
    <section className="dark-jokes">
      <div className="container-dark-jokes">
        <div className="minicontainer-dark-jokes">
          <h1>Dark-Jokes</h1>

          <div className="jokes">
            <p>
              <strong> </strong>{" "}
              <span id="joke-dark-joke" style={{ color: "black" }}>
                {joke || "Cliquez sur le bouton pour une blague !"}
              </span>
            </p>
            {author && (
              <p>
                <strong>Auteur : </strong> {author}
              </p>
            )}
          </div>

          <button type="button" className="fetch-joke-btn" onClick={fetchJoke}>
            Obtenir une blague Dark
          </button>
        </div>
        <button type="button" className="upgrade">
          {" "}
          + 1
        </button>
        <button type="button" className="upgrade">
          - 1
        </button>
      </div>
    </section>
  );
}

export default DevJokes;
