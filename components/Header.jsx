import { profile, nav } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="site">
      <div className="wrap">
        <b>{profile.name}</b>
        <nav aria-label="Sections">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
