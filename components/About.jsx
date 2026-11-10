import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p className="lead tight">{profile.about}</p>
    </section>
  );
}
