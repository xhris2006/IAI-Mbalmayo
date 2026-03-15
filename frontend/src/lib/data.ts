export type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link?: string;
};

export type StatCard = {
  id: string;
  label: string;
  value: string;
  icon: string;
};

export type Club = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Candidate = {
  id: string;
  name: string;
  level: string;
  bio: string;
  photo: string;
  votes: number;
};

export type TrainingProgram = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const stats: StatCard[] = [
  {
    id: "students",
    label: "Étudiants",
    value: "+200",
    icon: "👩‍🎓",
  },
  {
    id: "success",
    label: "Réussite",
    value: "100%",
    icon: "🏆",
  },
  {
    id: "clubs",
    label: "Clubs actifs",
    value: "5",
    icon: "🤝",
  },
];

export const news: NewsItem[] = [
  {
    id: "news-1",
    title: "Lancement de la nouvelle plateforme étudiant",
    date: "15 mars 2026",
    excerpt:
      "Découvrez le tout nouveau portail IAI Mbalmayo : cours, actualités, et ressources en un seul endroit.",
    link: "/actualites",
  },
  {
    id: "news-2",
    title: "Journée Portes Ouvertes 2026",
    date: "05 avril 2026",
    excerpt:
      "Venez rencontrer nos équipes pédagogiques et participer à des ateliers pratiques pour découvrir nos formations.",
    link: "/evenements",
  },
  {
    id: "news-3",
    title: "Résultats des concours d’entrée publiés",
    date: "12 février 2026",
    excerpt:
      "Les résultats sont disponibles en ligne. Connectez-vous à votre espace académique pour consulter vos notes.",
    link: "/espace",
  },
];

export const clubs: Club[] = [
  {
    id: "club-informatique",
    name: "Club Informatique",
    description:
      "Projets de programmation, compétitions de hacking, et maintenance des services du campus.",
    image: "/images/club-informatique.svg",
  },
  {
    id: "club-culturel",
    name: "Club Culturel",
    description:
      "Danses traditionnelles, sketches et événements culturels qui mettent en valeur nos racines.",
    image: "/images/club-culturel.svg",
  },
  {
    id: "club-mode",
    name: "Club Mode",
    description:
      "Conception de tenues, défilés et ateliers de stylisme pour allier modernité et tradition.",
    image: "/images/club-mode.svg",
  },
];

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "genie-logiciel",
    title: "Génie Logiciel",
    description:
      "Apprenez à concevoir, développer et maintenir des applications robustes en équipe.",
    icon: "💻",
  },
  {
    id: "systemes-reseaux",
    title: "Systèmes & Réseaux",
    description:
      "Maîtrisez l’administration réseau, la sécurité, la virtualisation et l’infrastructure.",
    icon: "🌐",
  },
];

export const candidates: Candidate[] = [
  {
    id: "cand-1",
    name: "Amina Ngounou",
    level: "Licence 2",
    bio: "Étudiante en Génie Logiciel, passionnée par l’IA et le design d’applications.",
    photo: "/images/candidate-1.svg",
    votes: 128,
  },
  {
    id: "cand-2",
    name: "Samuel Mbarga",
    level: "Licence 3",
    bio: "Spécialiste en réseaux et sécurité, engagé dans la vie associative.",
    photo: "/images/candidate-2.svg",
    votes: 92,
  },
  {
    id: "cand-3",
    name: "Fatou Simo",
    level: "Licence 1",
    bio: "Créative, elle pilote les ateliers multimédia et web du campus.",
    photo: "/images/candidate-3.svg",
    votes: 104,
  },
];
