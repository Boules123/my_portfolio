import { profile, ledger } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <h1>{profile.headline}</h1>
      <p className="lead">{profile.intro}</p>
      <div className="cta">
        <a className="btn p" href="#research">Read the case studies</a>
        <a className="btn" href={profile.github}>GitHub</a>
        <a className="btn" href={profile.linkedin}>LinkedIn</a>
        <a className="btn" href={`mailto:${profile.email}`}>Email</a>
      </div>
      <div className="ledger">
        <table>
          <caption>Reproduction results</caption>
          <thead>
            <tr>
              <th scope="col">Work</th>
              <th scope="col">Result</th>
              <th scope="col">Reference point</th>
            </tr>
          </thead>
          <tbody>
            {ledger.map((row) => (
              <tr key={row.work}>
                <td><a href={row.href}>{row.work}</a></td>
                <td className="n">{row.result}</td>
                <td>{row.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
