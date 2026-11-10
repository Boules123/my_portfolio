import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="lead tight">{profile.openTo}</p>
      <div className="cta">
        <a className="btn p" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="btn" href={profile.github}>GitHub</a>
        <a className="btn" href={profile.linkedin}>LinkedIn</a>
      </div>
    </section>
  );
}
