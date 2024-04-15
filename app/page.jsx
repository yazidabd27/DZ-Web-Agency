import "@/styles/home.css"
import Image from "next/image";

export default function Home() {
  return (
    <section className="hero-section">
      <div>
        <h1>DZ Web Agency</h1>
        <div>Create your website with us</div>
        <img src="/images/etapes-creer-agence-web-F.jpg" alt="" />
      </div>
    </section>
  );
}

