import { Fragment } from "react";

function Bars({ items }) {
  const label = "F1 score: " + items.map((b) => `${b.label} ${b.value.toFixed(2)}`).join(", ");
  return (
    <div className="bars" role="img" aria-label={label}>
      {items.map((b) => (
        <Fragment key={b.label}>
          <span>{b.label}</span>
          <div className="bar"><i style={{ width: `${b.value * 100}%` }} /></div>
          <span>{b.value.toFixed(2)}</span>
        </Fragment>
      ))}
    </div>
  );
}

function Row({ row }) {
  return (
    <>
      <dt>{row.label}</dt>
      <dd>
        {row.text}
        {row.flow && (
          <ol className="flow">
            {row.flow.map((step) => <li key={step}>{step}</li>)}
          </ol>
        )}
        {row.chips && (
          <div className="chips">
            {row.chips.map((c) => <span key={c}>{c}</span>)}
          </div>
        )}
        {row.list && (
          <ul>
            {row.list.map((i) => (
              <li key={i.title}><b>{i.title}:</b> {i.text}</li>
            ))}
          </ul>
        )}
        {row.bars && <Bars items={row.bars} />}
      </dd>
    </>
  );
}

function CaseStudy({ study }) {
  return (
    <details className="case" id={study.id}>
      <summary>
        <span className="t"><span className="tag">{study.tag}</span>{study.title}</span>
        <span className="m">{study.metric}</span>
      </summary>
      <div className="body">
        <dl>
          {study.rows.map((row) => <Row key={row.label} row={row} />)}
          {study.repo && (
            <>
              <dt>Code</dt>
              <dd><a href={study.repo}>GitHub repository</a></dd>
            </>
          )}
        </dl>
      </div>
    </details>
  );
}

export default function CaseStudySection({ id, title, subtitle, studies }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <p className="sub">{subtitle}</p>
      {studies.map((s) => <CaseStudy key={s.id} study={s} />)}
    </section>
  );
}
