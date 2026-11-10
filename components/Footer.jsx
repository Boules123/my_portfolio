import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">© {new Date().getFullYear()} {profile.name}. {profile.location}.</div>
    </footer>
  );
}
