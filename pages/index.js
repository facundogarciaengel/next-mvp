export default function Home() {
  return null; // no renderiza nada porque redirigimos
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}
