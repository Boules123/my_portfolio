import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certs">
      <h2>Certifications</h2>
      <ul className="plain">
        {certifications.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </section>
  );
}
