import Image from "next/image";
import { Shiba } from "./components/scene";

export default function Home() {
  return (
    <main
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('clyde-rs-4XbZCfU2Uoo-unsplash.jpg')" }}
    >
      <Shiba />
    </main>
  );
}
