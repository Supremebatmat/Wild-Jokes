import "./Home.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import tomache from "../../assets/images/tomache.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="first-section">
        <img src={logo} alt="logo" className="logo-homepage" />
        <p className="presentation">
          Bienvenue dans l'univers farfelu de l'humour ! Moi, c’est Mathieu
          Priez, grand explorateur du rire, dompteur de calembours et alchimiste
          du bon mot. Depuis toujours, j’aime les blagues comme d’autres aiment
          le chocolat : avec passion et sans modération. Ce site, c’est mon
          terrain de jeu, mon chapiteau de cirque, mon laboratoire du fou rire.
          Ici, les jeux de mots dansent la salsa, les blagues sautent en
          parachute et l’absurde se prélasse en peignoir. Que tu sois amateur de
          vannes bien senties, de situations loufoques ou de plaisanteries à la
          crème fouettée, tu es au bon endroit. L’humour, c’est un superpouvoir
          : il éclaire les journées grises et fait pétiller la vie comme une
          bouteille de soda trop secouée. Alors, installe-toi, détends-toi, et
          laisse-toi emporter dans cette aventure humoristique. Après tout, un
          sourire, c’est comme une baguette magique… en plus contagieux ! Prêt à
          rigoler ?
        </p>
      </section>

      <h1
        className="
      inspiration"
      >
        L'inspiration première <strong>Thomache Lamissuk</strong>
      </h1>
      <section className="second-section">
        <img
          src={tomache}
          alt="logo"
          className="tomache"
          onClick={() => navigate("/Wiki-tomache")}
          onKeyUp={(e) => e.key === "Enter" && navigate("/Wiki-tomache")}
        />
        <p className="presentation-tomache">
          L’héritage légendaire de Thomache Lamissuk <br />
          Si l’humour était un art martial, alors Thomache Lamissuk en serait le
          grand maître incontesté, une sorte de Bruce Lee du calembour. Ce génie
          turc du rire, né dans la pittoresque ville de Quoicoubech, au cœur de
          la province légendaire de Feur, a su élever l’absurde au rang de
          poésie. Il s’est illustré sur les plus grandes scènes d’Apagnan, où
          son humour tranchant a fait rire jusqu’aux statues. Son talent était
          tel qu’on raconte qu’un soir, après une punchline particulièrement
          ciselée, un spectateur aurait ri si fort qu’il en aurait recraché son
          thé à la menthe... avant d’être immédiatement décoré de la médaille du
          mérite humoristique. C’est en hommage à ce grand homme – ce prophète
          du bon mot, ce visionnaire du vaudeville – que mon site est né.
          Inspiré par son esprit libre et ses jeux de mots ravageurs, j’ai voulu
          créer un sanctuaire du rire, un temple où le second degré règne en
          maître, un endroit où, comme disait Thomache lui-même : "Si l’humour
          est une arme, alors faisons de ce site une fabrique de bazookas à
          blagues." Alors, bienvenue ! Que le rire soit avec toi, et surtout,
          que Thomache Lamissuk veille sur notre inspiration humoristique !
        </p>
      </section>
    </>
  );
}

export default Home;
