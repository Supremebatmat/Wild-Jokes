import "./Style.css";
import { Link } from "react-router-dom";
import tomache from "../../assets/images/tomache.jpg";

function Tomache() {
  return (
    <body className="page-wiki">
      <h1 className="wikepedia">Wikepedia</h1>{" "}
      <section className="Wiki-tomache-section-wiki">
        <img src={tomache} alt="logo" className="tomache-wiki" />
        <p className="presentation-tomache-wiki">
          L’héritage légendaire de Thomache Lamissuk <br />
          Si l’humour était un art martial, alors Thomache Lamissuk en serait le
          grand maître incontesté, une sorte de Bruce Lee du calembour. Ce génie
          turc du rire, né dans la pittoresque ville de{" "}
          <Link to="/Wiki-quoicou" className="city-link">
            Quoicoubech
          </Link>
          ,, au cœur de la province légendaire de{" "}
          <Link to="/Wiki-feur" className="city-link">
            feur
          </Link>
          , a su élever l’absurde au rang de poésie. Il s’est illustré sur les
          plus grandes scènes d’Apagnan, où son humour tranchant a fait rire
          jusqu’aux statues. Son talent était tel qu’on raconte qu’un soir,
          après une punchline particulièrement ciselée, un spectateur aurait ri
          si fort qu’il en aurait recraché son thé à la menthe... avant d’être
          immédiatement décoré de la médaille du mérite humoristique. C’est en
          hommage à ce grand homme – ce prophète du bon mot, ce visionnaire du
          vaudeville – que mon site est né. Inspiré par son esprit libre et ses
          jeux de mots ravageurs, j’ai voulu créer un sanctuaire du rire, un
          temple où le second degré règne en maître, un endroit où, comme disait
          Thomache lui-même : "Si l’humour est une arme, alors faisons de ce
          site une fabrique de bazookas à blagues." Alors, bienvenue ! Que le
          rire soit avec toi, et surtout, que Thomache Lamissuk veille sur notre
          inspiration humoristique !
        </p>
      </section>
    </body>
  );
}

export default Tomache;
