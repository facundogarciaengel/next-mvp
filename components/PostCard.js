export default function PostCard({ title, body, author }) {
  return (
    <article className="border rounded-xl p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{body}</p>
      <small className="text-gray-500">— {author}</small>
    </article>
  );
}
