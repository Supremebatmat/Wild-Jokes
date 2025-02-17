import { useState } from "react";
import "./Post.css";
import pouet from "./../../assets/images/pouet.mp3";

type JokeForm = {
  content: string;
  author: string;
  category_id: number;
};

function AddJoke() {
  const [formData, setFormData] = useState<JokeForm>({
    content: "",
    author: "",
    category_id: 1,
  });

  const [message, setMessage] = useState<string | null>(null);

  const [showImage, setShowImage] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "category_id" ? Number(value) : value,
    }));
  };

  const playSound = () => {
    const audio = new Audio(pouet);
    audio.play();
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3310/jokes/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout de la blague");
      }

      setMessage("Blague ajoutée avec succès !");
      setFormData({ content: "", author: "", category_id: 1 });

      playSound();
      setShowImage(true);

      setTimeout(() => {
        setMessage(null);
        setShowImage(false);
      }, 3000);
    } catch (error) {
      setMessage("Une erreur s'est produite. Réessaie !");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Ajoute une blague</h2>

      {message && (
        <div className="text-center mb-4 p-2 text-white bg-green-500 rounded">
          {message}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="content" className="block text-sm font-medium">
            Blague :
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium">
            Auteur :
          </label>
          <input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Anonyme"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium">
            Catégorie :
          </label>
          <select
            id="category"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="1">Dark-Jokes</option>
            <option value="2">PMU-Vibe</option>
            <option value="3">Dev-jokes</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Ajouter la blague
        </button>
      </form>

      {showImage && (
        <div className="text-center mt-4">
          <img src="/path/to/image/file.jpg" alt="Success" />
        </div>
      )}
    </div>
  );
}

export default AddJoke;
