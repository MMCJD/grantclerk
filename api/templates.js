export default function handler(req, res) {
  const templates = [
    {
      title: "Basic Grant Template",
      description: "A simple starter template for most grants.",
      downloadUrl: "https://example.com/basic-template.pdf"
    },
    {
      title: "Community Grant Template",
      description: "Optimized for community development grants.",
      downloadUrl: "https://example.com/community-template.pdf"
    }
  ];
  res.status(200).json(templates);
}
