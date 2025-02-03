export type Skill = {
  title: string;
  description: string;
  type: "frontend" | "backend";
};

const Skills: Skill[] = [
  {
    title: "TypeScript",
    description:
      "Extension de JavaScript ajoutant un typage statique, ce qui améliore la maintenabilité et la fiabilité du code en détectant les erreurs à la compilation.",
    type: "frontend",
  },
  {
    title: "React",
    description:
      "Bibliothèque JavaScript développée par Facebook permettant de créer des interfaces utilisateur réactives et modulaires grâce à un système de composants réutilisables.",
    type: "frontend",
  },
  {
    title: "Redux Toolkit",
    description:
      "Solution optimisée pour la gestion d'état dans les applications React, simplifiant la manipulation des données globales et réduisant le code répétitif.",
    type: "frontend",
  },
  {
    title: "Node.js",
    description:
      "Environnement d'exécution JavaScript côté serveur, permettant de créer des applications web performantes et évolutives grâce à son modèle asynchrone et événementiel.",
    type: "backend",
  },
  {
    title: "Express.js",
    description:
      "Framework web minimaliste pour Node.js, facilitant la création d'API et de serveurs backend grâce à une syntaxe simple et extensible.",
    type: "backend",
  },
  {
    title: "Laravel",
    description:
      "Framework PHP moderne offrant une architecture élégante, un ORM puissant (Eloquent) et des outils avancés pour simplifier le développement backend.",
    type: "backend",
  },
];

export default Skills;
