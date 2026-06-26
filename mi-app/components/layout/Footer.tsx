import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-900/20 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/*<div className="flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h3 className="font-bold text-cyan-400 text-lg">
              Galactic Archives
            </h3>

            <p className="text-zinc-500 mt-2 max-w-sm">
              Enciclopedia oficial del universo de la saga.
            </p>
          </div>

          <div className="flex gap-8">
            <div>
              <h4 className="font-semibold mb-2">
                Universo
              </h4>

              <ul className="space-y-2 text-zinc-500">
                <li>
                  <Link href="/razas">Razas</Link>
                </li>
                <li>
                  <Link href="/personajes">Personajes</Link>
                </li>
                <li>
                  <Link href="/sectores">Sectores</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Saga
              </h4>

              <ul className="space-y-2 text-zinc-500">
                <li>
                  <Link href="/libros">Libros</Link>
                </li>
                <li>
                  <Link href="/cronologia">
                    Cronología
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>}*/}

        <div className="text-center text-zinc-500">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}