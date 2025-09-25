import PostCard from "../components/PostCard";
import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("../components/MapLeaflet"), { ssr: false });

const posts = [
  { id: 1, title: "Primera publicación", body: "Texto de ejemplo uno.", author: "Ana Pérez" },
  { id: 2, title: "Segunda publicación", body: "Texto de ejemplo dos.", author: "Juan López" },
  { id: 3, title: "Tercera publicación", body: "Texto de ejemplo tres.", author: "María Díaz" },
];

export default function Feed() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-3xl mx-auto p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold">Feed</h1>
          <p className="text-gray-600">3 publicaciones de ejemplo</p>
        </header>

        <section className="grid gap-3 mb-8">
          {posts.map(p => <PostCard key={p.id} {...p} />)}
        </section>

        <section className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Mapa</h2>
          <MapLeaflet />
        </section>
      </section>
    </main>
  );
}
