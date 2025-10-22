import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.instagram.com/imvinz_04/",
      icon: "/loghi/instagram-brands-solid-full.svg",
      label: "Seguimi su Instagram",
    },
    {
      href: "https://github.com/vincenzocrucitti04-hash",
      icon: "/loghi/github-brands-solid-full.svg",
      label: "Visita il mio GitHub",
    },
    {
      href: "https://www.linkedin.com/in/vincenzo-crucitti-4b5428378/",
      icon: "/loghi/linkedin-brands-solid-full.svg",
      label: "Collegati su LinkedIn",
    },
  ];

  return (
    <footer role="contentinfo">
      <h2>Social</h2>
      <section>
        <article id="mysocial">
          <p>
            Seguimi sui miei social per rimanere aggiornato sulle mie ultime
            avventure fotografiche e scoprire di più su di me!
          </p>
          <div
            className="social-icons-footer"
            role="complementary"
            aria-label="Link ai social media nel footer"
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
                  width={32}
                  height={32}
                />
              </a>
            ))}
          </div>
        </article>
      </section>
      <p>© 2025 MyPortfolio. Tutti i diritti riservati.</p>
    </footer>
  );
}
