import { useState } from "react";
import "./PmuVibes.css";

function DevJokes() {
  const [joke, setJoke] = useState("");
  const [author, setAuthor] = useState("");
  const [score, setScore] = useState(0);
  const [jokeId, setJokeId] = useState(null);

  const categoryId = 1;

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        `http://localhost:3310/jokes/category/${categoryId}`,
      );
      const data = await response.json();

      if (data?.content) {
        setJoke(data.content);
        setAuthor(data.author || "Anonyme");
        setJokeId(data.id);
        fetchScore(data.id);
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

  const fetchScore = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3310/jokes/${id}/score`);
      const data = await response.json();
      setScore(data.score || 0);
    } catch (error) {
      console.error("Erreur lors de la récupération du score:", error);
    }
  };

  const vote = async (value: number) => {
    if (!jokeId) return;

    try {
      const response = await fetch("http://localhost:3310/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          joke_id: jokeId,
          vote_value: value,
        }),
      });

      if (response.ok) {
        setScore((prev) => prev + value);
      } else {
        console.error("Erreur lors du vote");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du vote:", error);
    }
  };

  return (
    <section className="pmu-vibes">
      <div className="container-pmu-vibes">
        <div className="minicontainer-pmu-vibes">
          <h1>PMU-Vibes</h1>

          <div className="jokes">
            <p>
              <span id="joke-pmu-joke">
                {joke || "Cliquez sur le bouton pour une blague !"}
              </span>
            </p>
            {author && (
              <p>
                <strong>Auteur :</strong> {author}
              </p>
            )}
            {jokeId && (
              <p>
                <strong>Score :</strong> {score}
              </p>
            )}
          </div>

          <button type="button" className="fetch-joke-btn" onClick={fetchJoke}>
            Obtenir une blague de PMU
          </button>
        </div>
        <button type="button" className="upgrade" onClick={() => vote(1)}>
          +1
        </button>
        <button type="button" className="upgrade" onClick={() => vote(-1)}>
          -1
        </button>
      </div>
    </section>
  );
}

export default DevJokes;
