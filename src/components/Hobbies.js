export default function Hobbies() {
  const hobbies = [
    {
      title: "Viaggiare",
      description: `Una delle mie più grandi passioni per l'appunto è viaggiare. Viaggiare per me indica libertà, senso dell'avventura, scoprire nuovi luoghi e vivere per i pochi giorni di viaggio, realtà completamente diverse alle quali sei abituato. Uno dei miei ultimi viaggi è stato a Skiathos, una piccola isola greca, lì ho scoperto un sacco di cose che non sapevo mi piacessero, come ad esempio la cipolla, anche se non so se effettivamente è iniziata a piacermi o mi sono dovuto adattare, (visto che loro la utilizzano ovunque).`,
      quote:
        "E forse è proprio questo il bello del viaggiare: scoprire non solo nuovi luoghi, ma parti di noi stessi che non sapevamo esistessero.",
    },
    {
      title: "Stare a contatto con le persone",
      description: `È, a mio avviso, un bisogno naturale di ogni essere umano. Per quanto mi riguarda, credo di avere una predisposizione innata: quando mi trovo in mezzo agli altri riesco sempre a dare il meglio di me. Mi piace scherzare, confrontarmi, discutere e condividere momenti che arricchiscono la giornata. Nel 2024 ho avuto la possibilità di svolgere il Servizio Civile e questa esperienza mi ha insegnato che ogni incontro porta con sé una storia, un'emozione e un insegnamento. Condividere il tempo con gli altri, ascoltare e aiutare, anche con piccoli gesti. Ogni sorriso ricevuto e ogni parola detta hanno lasciato un segno dentro di me, trasformando un semplice impegno quotidiano in un percorso di crescita personale.`,
      quote:
        "Perché alla fine, il contatto con le persone non è solo una parte della vita: è ciò che la rende davvero viva.",
    },
    {
      title: "Ascoltare la musica",
      description: `Per me è molto più che intrattenimento: è una sorta di yoga personale. È quel momento in cui riesco a fermarmi, a concentrarmi e a rilassarmi davvero. Le note mi aiutano a liberare la mente, a scacciare via paure, timori e pensieri negativi che a volte appesantiscono la giornata. Ogni brano diventa un rifugio, un luogo sicuro dove posso ritrovare me stesso e ricaricare le energie.`,
      quote:
        "La musica non si limita a riempire il silenzio: è ciò che dà voce alle emozioni che non sappiamo esprimere.",
    },
  ];

  return (
    <section className="Hobby" id="HB" aria-labelledby="hobby-heading">
      <h2 id="hobby-heading">Altri Hobby</h2>
      <article id="myhobby">
        <div>
          {hobbies.map((hobby, index) => (
            <li key={index}>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
              <blockquote>
                <p>{hobby.quote}</p>
              </blockquote>
            </li>
          ))}
        </div>
      </article>
    </section>
  );
}
