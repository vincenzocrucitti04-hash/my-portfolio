import Image from "next/image";

export default function Developer() {
  const skills = [
    {
      src: "/skills-icon/github-brands-solid-full.svg",
      alt: "GitHub-Icon-Skill",
    },
    { src: "/skills-icon/HTML.png", alt: "Html-Icon-Skill" },
    { src: "/skills-icon/CSS.png", alt: "Css-Icon-Skill" },
    { src: "/skills-icon/JAVASCRIPT.png", alt: "Javascript-Icon-Skill" },
    { src: "/skills-icon/REACT.png", alt: "React-Icon-Skill" },
    { src: "/skills-icon/NEXT.JS.svg", alt: "Next.js-Icon-Skill" },
    { src: "/skills-icon/TAILWIND.svg", alt: "Tailwind-Icon-Skill" },
  ];

  return (
    <section
      className="Developer"
      id="Developer"
      aria-labelledby="developer-heading"
    >
      <h2 id="developer-heading">Progetti & Skills</h2>
      <article>
        <h3>Skills</h3>
        <div className="icon-skill">
          {skills.map((skill, index) => (
            <Image
              key={index}
              src={skill.src}
              alt={skill.alt}
              width={80}
              height={80}
              style={{ objectFit: "contain" }}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
