export default function handler(req, res) {
  res.status(200).json([
    { id: 1, title: "Primera publicación", body: "Texto de ejemplo uno.", author: "Ana Pérez" },
    { id: 2, title: "Segunda publicación", body: "Texto de ejemplo dos.", author: "Juan López" },
    { id: 3, title: "Tercera publicación", body: "Texto de ejemplo tres.", author: "María Díaz" },
  ]);
}
