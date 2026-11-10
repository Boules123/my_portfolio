import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="sk">
      <h2>Technical skills</h2>
      <dl>
        {skills.map(([label, items]) => (
          <div key={label} style={{ display: "contents" }}>
            <dt>{label}</dt>
            <dd>{items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
