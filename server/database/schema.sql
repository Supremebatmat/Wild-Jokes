CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE item (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO user(id, email, password)
VALUES
  (1, "jdoe@mail.com", "123456");

INSERT INTO item(id, title, user_id)
VALUES
  (1, "Stuff", 1),
  (2, "Doodads", 1);

-- Création de la table des catégories de blagues
CREATE TABLE categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Création de la table des blagues
CREATE TABLE jokes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    author VARCHAR(100) DEFAULT 'Anonyme',
    category_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Création de la table des votes
CREATE TABLE votes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    joke_id INT UNSIGNED NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    vote_value INT CHECK (vote_value IN (1, -1)), -- 1 = upvote, -1 = downvote
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (joke_id) REFERENCES jokes(id) ON DELETE CASCADE
);

-- Ajout des catégories
INSERT INTO categories (name) VALUES 
('Humour Classique'),
('Humour Noir'),
('Humour de Geek');

-- Ajout des blagues
INSERT INTO jokes (content, author, category_id) VALUES 
-- Blagues générales
('Pourquoi les chasseurs tirent-ils sur les panneaux routiers ? Pour que les aveugles puissent les lire.', 'ChatGPT', 1),
('Pour un chasseur, quelle est la différence entre son chien et sa femme ? Le prix du collier.', 'Anonyme', 1),
('Quel est le point commun entre un homme qui vient de se réveiller et un élastique ? Les deux s’étirent, s’étirent, s’étirent, et pètent.', 'Anonyme', 1),
('Selon mon médecin, faire du sexe équivaut à un footing de 5km. Alors ça veut dire que je suis hyper sportif : Je peux faire 5km en 10 secondes !', 'Anonyme', 1),
('Quelle est la différence entre la bière et la pisse ? Environ un quart d’heure.', 'Anonyme', 1),
('Que dit une bière quand elle tombe dans l''eau ? Je sais panaché.', 'Anonyme', 1),
('Pourquoi les hommes s''assoient toujours avec les jambes écartées ? Pour que leur cerveau respire.', 'Anonyme', 1),
('Comment reconnaît-on une moto anglaise ? Le guidon est à droite.', 'Anonyme', 1),
('Un couple de randonneurs est à la campagne : La femme : « Chéri, ce paysage me laisse sans voix ! » L''homme : « Parfait, campons ici ! »', 'Anonyme', 1),
('Quel est le point commun entre la poitrine d''une femme et un train électrique ? C''est fait pour les enfants mais c''est papa qui joue avec.', 'Anonyme', 1),
('Quelle est la partie de la voiture la plus dangereuse ? La conductrice.', 'Anonyme', 1),
('Quelle est la différence entre les bières et les chasseurs ? Les bières, on arrive à en faire des sans alcool.', 'Anonyme', 1),
('Quel est le meilleur site pour un homme qui cherche un lave-vaisselle ? Un site de rencontres.', 'Anonyme', 1),
('Quel est le point commun entre un gynécologue myope et un chien en bonne santé ? Ils ont tous les deux le nez mouillé.', 'Anonyme', 1),

-- Blagues d'humour noir
('Une petite fille discute avec sa mère : « – Maman, est-ce que je pourrais avoir un chien à Noël ? – Non, tu auras de la dinde comme tout le monde. »', 'Anonyme', 2),
('Quelle est la pire combinaison de maladies ? Alzheimer et la diarrhée. Vous courez, mais vous ne savez plus où…', 'Anonyme', 2),
('Maman, maman, papa s’est pendu dans le jardin ! Poisson d’avril ! Il s’est pendu dans le grenier !', 'Anonyme', 2),
('Pourquoi un enfant chinois ne croit-il jamais au Père Noël ? Car c’est lui qui a fabriqué les jouets.', 'Anonyme', 2),
('Qu''est-ce qui a deux pattes et qui saigne ? Un demi-chien.', 'Anonyme', 2),
('Qu''est-ce qui a 5 bras, 3 jambes et 2 pieds ? La ligne d’arrivée au marathon de Boston.', 'Anonyme', 2),
('Comment un parachutiste aveugle sait-il qu''il va toucher le sol ? Il y a du mou dans la laisse du chien.', 'Anonyme', 2),
('Peut-on prendre un bain quand on a la diarrhée ? Oui, si vous en avez assez.', 'Anonyme', 2),
('Qu''est-ce qui est mieux que gagner une médaille d''or aux Jeux Paralympiques ? Marcher.', 'Anonyme', 2),
('Grâce à quoi peut-on enlever le chewing-gum dans les cheveux ? Le cancer.', 'Anonyme', 2),
('Il pleut, mes enfants regardent désespérément par la fenêtre. Ils me font de la peine… Je crois que je vais les laisser rentrer.', 'Anonyme', 2),
('Quelle est la différence entre un mariage et un enterrement ? À un enterrement, il n''y a qu''une seule personne morte.', 'Anonyme', 2),
('Qu''est-ce qu''une usine en Chine ? Une école primaire.', 'Anonyme', 2),
('Le médecin demande à son patient qui est très inquiet au sujet de ses analyses : – Dites-moi, quel est votre signe du zodiaque ? – Euh… cancer. – Tiens donc, quelle coïncidence !', 'Anonyme', 2),
('Un gamin, perpétuellement inquiet, demande à ses parents : – Est-ce que j''ai été adopté ? – Pas encore. Nous n''avons mis l''annonce qu''hier !', 'Anonyme', 2),

-- Blagues de développeurs
('Que dit un développeur complotiste ? Nous SSHons.', 'Anonyme', 3),
('Qu''est-ce que le ALT sous une photo de Manau ? L''attribut de Dana.', 'Lapinou', 3),
('Pour être à jour, il faut se mettre à l''APACHE.', 'Lapinou', 3),
('Quand je suis content, je commit.', 'Simon Jeremi', 3),
('Pourquoi les développeurs ne confondent jamais Noël et Halloween ? Parce que DEC 25 = OCT 31.', 'Anonyme', 3),
('Combien de programmeurs faut-il pour changer une ampoule ? Aucun, c''est un problème matériel.', 'Anonyme', 3),
('Json et Log sont dans une pièce, Log est triste donc Json console Log.', 'Anonyme', 3),
('Un flux RSS entre dans un bar. Le barman lui demande "Qu''est-ce que tu veux ?" et le flux répond "Juste une actualisation."', 'Anonyme', 3),
('Où va React en vacances ? Aux States.', 'Anonyme', 3),
('Pourquoi les développeurs doivent-ils suivre une formation incendie ? À cause des pare-feux.', 'Anonyme', 3),
('Où partent les développeurs en vacances ? Au C-Shell.', 'Anonyme', 3),
('C''est une requête SQL qui entre dans un bar, et le serveur répond : Il n''y a plus de tables !', 'Anonyme', 3),
('Pourquoi le site e-commerce a-t-il fermé ? Parce qu’il n’avait plus de "cache".', 'Anonyme', 3),
('Je voulais te raconter une blague sur les erreurs 404, mais je ne la retrouve plus.', 'Anonyme', 3),
('Pourquoi les claviers AZERTY sont-ils plus chers que les claviers QWERTY ? Car un clavier AZERTY en vaut 2.', 'Anonyme', 3),
('Refusée au bar, la requête SQL veut aller en boîte et le videur lui dit : Non, dehors ! C''est select ici.', 'Anonyme', 3);
