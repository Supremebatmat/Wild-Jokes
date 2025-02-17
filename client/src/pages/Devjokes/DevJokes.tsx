import { useState } from "react";
import "./DevJokes.css";

function DevJokes() {
  const [joke, setJoke] = useState("");
  const [author, setAuthor] = useState("");

  const categoryId = 3;

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
    <section className="dev-jokes">
      <div className="container-dev-jokes">
        <div className="minicontainer-dev-jokes">
          <h1>Dev-Jokes</h1>

          <div className="jokes">
            <p className="joke-dev-joke">
              <strong> </strong>{" "}
              <span id="joke-dev-joke">
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
            Obtenir une blague de dev
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
