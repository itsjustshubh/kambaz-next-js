import Link from "next/link";

export default function TOC() {
  return (
    <nav className="nav nav-pills flex-column">
      <Link href="/labs" id="wd-home-link" className="nav-link">
        Home
      </Link>
      <Link href="/labs/lab1" id="wd-lab1-link" className="nav-link">
        Lab 1
      </Link>
      <Link href="/labs/lab2" id="wd-lab2-link" className="nav-link">
        Lab 2
      </Link>
      <Link
        href="/labs/lab2/tailwind"
        id="wd-lab2-tailwind-link"
        className="nav-link"
      >
        Lab 2 Tailwind
      </Link>
      <Link href="/labs/lab3" id="wd-lab3-link" className="nav-link">
        Lab 3
      </Link>
      <Link href="/" id="wd-kambaz-link" className="nav-link">
        Kambaz
      </Link>
      <a
        href="https://github.com/itsjustshubh/kambaz-next-js"
        id="wd-github-link"
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </a>
    </nav>
  );
}
