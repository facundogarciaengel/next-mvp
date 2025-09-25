import PostCard from "../components/PostCard";
import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("../components/MapLeaflet"), { ssr: false });

export default function Feed() {

  const posts = [
    { id: 1, title: "Optimizamos la siembra con visión artificial", body: "Hemos desplegado modelos de IA que analizan imágenes satelitales para optimizar fechas de siembra y reducir el uso de fertilizantes en un 18% en pruebas piloto.", author: 'AgroAI Labs'},
    { id: 2, title: 'Predicción temprana de plagas mediante sensores', body: 'Integrando datos de sensores y modelos predictivos, detectamos episodios de plagas con hasta 7 días de anticipación, ayudando a planificar intervenciones más eficientes.', author: 'AgroAI Labs' },
    { id: 3, title: 'Ahorro de agua con riego inteligente', body: 'Nuestra plataforma recomienda riegos por parcela según humedad y predicción climática, logrando reducciones de consumo hídrico y mayor uniformidad en rendimiento.', author: 'AgroAI Labs' }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-3xl mx-auto p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold">Feed</h1>
          <p className="text-gray-600">{posts.length} publicaciones de ejemplo</p>
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
