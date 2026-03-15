const publications = [
  {
    id: "p1",
    title: "Lancement du portail étudiant",
    summary: "La nouvelle plateforme est en ligne pour faciliter l'accès aux ressources.",
    date: "2026-03-15",
  },
];

async function listPublications() {
  return publications;
}

async function createPublication(data) {
  const record = {
    id: `p${publications.length + 1}`,
    title: data.title || "Nouvelle publication",
    summary: data.summary || "",
    date: new Date().toISOString().slice(0, 10),
  };

  publications.push(record);
  return record;
}

module.exports = {
  listPublications,
  createPublication,
};
