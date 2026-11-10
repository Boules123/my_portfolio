import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Professional experience</h2>
      {experience.map((job) => (
        <div className="job" key={job.title}>
          <h3>{job.title}</h3>
          {job.dates && <p>{job.dates}</p>}
          {job.bullets && (
            <ul>
              {job.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
