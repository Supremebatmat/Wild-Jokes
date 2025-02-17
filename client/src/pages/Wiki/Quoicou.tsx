import "./Style.css";
import quoicou from "../../assets/images/Quoicoubeche.jpg";

function Quoicou() {
  return (
    <body className="page-wiki">
      <h1 className="wikepedia">Wikepedia</h1>{" "}
      <section className="Wiki-tomache-section-wiki">
        <img src={quoicou} alt="logo" className="tomache-wiki" />
        <p className="presentation-tomache-wiki">
          Quoicoubeche Capitale de l'absurde et joyau méconnu de Feur
          Présentation générale Nichée au cœur de la légendaire province de
          Feur, Quoicoubeche est une ville au passé aussi riche qu’improbable.
          Fondée en l’an 847 par le grand explorateur Jean-Eudes de la Répartie,
          la ville a rapidement prospéré grâce à son commerce florissant de
          moulins à vent, de babouches à moteur et de thé à la menthe
          ultra-rafraîchissant. Aujourd’hui, elle est connue pour son ambiance
          pittoresque et son attachement indéfectible au second degré. Origine
          du nom Selon les historiens locaux, le nom Quoicoubeche proviendrait
          d’un incident survenu lors d’une rencontre diplomatique entre le duc
          de Feur et un émissaire étranger. Lorsque ce dernier demanda le nom du
          lieu, le duc, pris au dépourvu alors qu’il s’étouffait avec un
          loukoum, aurait articulé dans un râle étouffé : "Quoi ? Quoicoubeche
          ?". La délégation, convaincue d’avoir entendu le nom officiel de la
          ville, le retranscrivit ainsi dans les archives royales. Démographie
          La ville compte environ 42 069 habitants, surnommés les
          Quoicoubéchards. Une particularité locale est que chaque citoyen est
          tenu, selon une vieille coutume, de maîtriser au moins trois jeux de
          mots foireux avant d’obtenir sa carte d’identité. Économie L’économie
          de Quoicoubeche repose sur : L’exportation d’absurde : La ville est le
          premier fournisseur mondial de calembours et de blagues douteuses. Le
          tourisme humoristique : Des milliers de visiteurs viennent chaque
          année assister au Festival International du N’importe Quoi. Les
          ateliers de fabrication de pancartes : La ville produit des panneaux
          indicateurs mondialement célèbres pour leur propension à afficher des
          directions totalement aléatoires. Monuments et lieux emblématiques La
          Tour du Malentendu : Un édifice incliné qui semble toujours sur le
          point de tomber, mais qui, selon les habitants, "ne tombe jamais, mais
          alors vraiment jamais, promis juré." Le Musée de la Blague Perdue : Un
          musée dédié aux jeux de mots incompris à travers l’histoire. Le Pont
          Suspendu de l’Incohérence : Un pont qui ne mène nulle part mais qui
          reste un symbole de la ville. Personnalités célèbres Thomache Lamissuk
          : Humoriste légendaire né à Quoicoubeche, considéré comme le Bruce Lee
          du calembour. Jean-Patrice Souplex : Inventeur du couscous en poudre,
          un échec retentissant qui a néanmoins marqué l’histoire locale.
          Germaine de la Blague : Première femme maire de Quoicoubeche, connue
          pour avoir instauré une loi obligeant chaque discours officiel à
          commencer par une blague. Devise de la ville "Si tu comprends, c’est
          que t’as pas compris."
        </p>
      </section>
    </body>
  );
}

export default Quoicou;
