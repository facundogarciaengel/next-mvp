import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();        // login ficticio
    router.push("/feed");      // vamos al feed
  };

  return (
    <main className="min-h-screen grid place-items-center bg-gray-50">
      <section className="w-full max-w-sm bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-semibold mb-4">Ingreso</h1>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <div className="grid gap-1">
            <label htmlFor="user" className="text-sm font-medium">Usuario</label>
            <input
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu_usuario"
              autoComplete="username"
              required
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="pass" className="text-sm font-medium">Contraseña</label>
            <input
              id="pass"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 active:scale-[.98] transition"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
