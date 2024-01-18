import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="p-5 bg-green-400">
        <nav className="flex space-x-10">
          <Link href="/">Home</Link>
          <p>CONTACT</p>
          <p>LINK</p>
        </nav>
      </header>
    </main>
  );
}
