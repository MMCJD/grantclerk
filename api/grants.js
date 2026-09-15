export default async function handler(req, res) {
  const data = [
    { id: 1, title: "Community Development Grant", deadline: "2026-10-01" },
    { id: 2, title: "STEM Education Grant", deadline: "2026-11-15" }
  ];
  res.status(200).json(data);
}
