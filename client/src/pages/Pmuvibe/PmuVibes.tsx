import { useState } from "react";
import "./PmuVibes.css";

function DevJokes() {
  const [joke, setJoke] = useState("");
  const [author, setAuthor] = useState("");

  const categoryId = 1;

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        `http://localhost:3310/jokes/category/${categoryId}`,
      );
      const data = await response.json();

      if (data?.content) {
        // Vérifier que data est bien un objet avec content
        setJoke(data.content);
        setAuthor(data.author || "Anonyme"); // Si pas d'auteur, afficher "Anonyme"
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
    <section className="pmu-vibes">
      <div className="container">
        <div className="minicontainer">
          <h1>PMU-Vibes</h1>

          <div className="stats">
            <p>
              <strong> </strong>{" "}
              <span id="joke" style={{ color: "black" }}>
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
            Obtenir une blague de PMU
          </button>

          {/* Affichage de la blague et de l'auteur */}
          {/* {joke && (
            <p className="joke-display">
              <strong>Blague : </strong> {joke}
            </p>
          )}
          {author && (
            <p className="joke-author">
              <strong>Auteur : </strong> {author}
            </p>
          )} */}
        </div>
      </div>
    </section>
  );
}

export default DevJokes;
