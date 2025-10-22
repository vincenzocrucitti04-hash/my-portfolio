import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Flip&Match",
      image: "/project-photo/Flip&Match.png",
      description: `Flip and Match è un gioco memory sviluppato in JavaScript Vanilla che mette alla prova la memoria e la velocità del giocatore. L'obiettivo è abbinare coppie di carte identiche nel minor tempo possibile, sfidandosi a completare il gioco con il minor numero di tentativi. Realizzato per consolidare le competenze nella logica di programmazione, nella manipolazione del DOM e nello styling dinamico, il progetto integra un contatore di mosse e animazioni fluide, tutto racchiuso in un design completamente responsive. Tecnologie: HTML5, CSS3, JavaScript.`,
      websiteUrl: "https://front-end-riverloop-flip-and-match.vercel.app/",
      githubUrl:
        "https://github.com/vincenzocrucitti04-hash/FrontEnd-Riverloop-Flip-and-match",
    },
    {
      title: "MovieDatabase",
      image: "/project-photo/MovieDatabase.png",
      description: `Project Movie DataBase è un'applicazione web interattiva per l'esplorazione e la ricerca di film, che utilizza le API di OMDb per fornire dati aggiornati in tempo reale. Sviluppata con HTML5, CSS3 e JavaScript Vanilla, dimostra competenze nell'integrazione di API esterne, gestione dinamica dei contenuti e creazione di interfacce utente intuitive. Le funzionalità principali includono la ricerca di film per titolo, la visualizzazione dettagliata di informazioni come anno di uscita, e valutazioni, il tutto racchiuso in un layout completamente responsive che si adatta a qualsiasi dispositivo.`,
      githubUrl:
        "https://github.com/vincenzocrucitti04-hash/Project-Movie-DataBase",
    },
  ];

  return (
    <section className="Project-developer">
      <h3>Progetti Principali</h3>
      {projects.map((project, index) => (
        <article key={index}>
          <Image
            src={project.image}
            alt={`${project.title}-Project`}
            width={400}
            height={250}
            style={{ objectFit: "cover" }}
          />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-project">
              {project.websiteUrl && (
                <Link
                  href={project.websiteUrl}
                  className="nav-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sito Web
                </Link>
              )}
              <Link
                href={project.githubUrl}
                className="nav-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code GitHub
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
