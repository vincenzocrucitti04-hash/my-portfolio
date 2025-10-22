import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { href: "#ChiSono", label: "AboutMe", desc: "Vai alla sezione chi sono" },
    {
      href: "#LeMieFoto",
      label: "MyFoto",
      desc: "Vai alla galleria fotografica",
    },
    {
      href: "#Developer",
      label: "MyProjects",
      desc: "Vai alla sezione developer",
    },
    { href: "#HB", label: "MyHobby", desc: "Vai alla sezione hobby" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/imvinz_04/",
      icon: "/loghi/instagram-brands-solid-full.svg",
      label: "Seguimi su Instagram",
    },
    {
      href: "https://www.linkedin.com/in/vincenzo-crucitti-4b5428378/",
      icon: "/loghi/linkedin-brands-solid-full.svg",
      label: "Collegati su LinkedIn",
    },
    {
      href: "https://github.com/vincenzocrucitti04-hash",
      icon: "/loghi/github-brands-solid-full.svg",
      label: "Visita il mio GitHub",
    },
  ];

  return (
    <header className="header-container">
      <h1>MyPortfolio</h1>

      <nav
        className="nav-container"
        role="navigation"
        aria-label="Navigazione principale"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-button"
                aria-describedby={`${link.href}-desc`}
              >
                <span>{link.label}</span>
                <span id={`${link.href}-desc`} className="sr-only">
                  {link.desc}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="social-icons"
        role="complementary"
        aria-label="Link ai social media"
      >
        {socialLinks.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} (si apre in una nuova finestra)`}
          >
            <Image
              src={social.icon}
              alt=""
              role="presentation"
              width={28}
              height={28}
            />
          </a>
        ))}
      </div>
    </header>
  );
}
