export default function Hobbies() {
  const hobbies = [
    {
      title: "Viaggiare",
      description: `Una delle mie più grandi passioni è viaggiare! Viaggiare per me significa: libertà, senso dell'avventura, scoprire nuovi luoghi e vivere, per i pochi giorni di viaggio, realtà completamente diverse alle quali sono abituato. Uno dei miei ultimi viaggi è stato in una piccola isola greca, Skiathos. Lì ho fatto  escursioni, passeggiate in posti non contaminati, assaggiato cose mai viste prima e, con mia grande sorpresa, ho scoperto molte cose che non pensavo mi piacessero, come ad esempio la cipolla! Anche se, in tutta onestà, non so se effettivamente è iniziata davvero a piacermi o mi sono dovuto adattare (visto che loro la utilizzano ovunque!).`,
      quote:
        "E forse è proprio questo il bello del viaggiare: scoprire non solo nuovi luoghi, ma parti di noi stessi che non sapevamo esistessero.",
    },
    {
      title: "Stare a contatto con le persone",
      description: `Relazionarsi con la gente è, a mio avviso, un bisogno naturale di ogni essere umano. Per quanto mi riguarda, credo di avere una predisposizione innata: quando mi trovo in mezzo agli altri riesco sempre a dare il meglio di me. Mi piace scherzare, confrontarmi, discutere e condividere momenti che arricchiscono la giornata. Nel 2024 ho avuto la possibilità di svolgere il Servizio Civile e questa esperienza mi ha insegnato che ogni incontro porta con sé una storia, un'emozione e un insegnamento. Ho imparato a condividere il mio tempo, ascoltando e aiutando gli altri, anche con piccoli gesti. Ogni sorriso ricevuto e ogni parola detta hanno lasciato un segno dentro di me, trasformando un semplice impegno quotidiano in un percorso di crescita personale.`,
      quote:
        "Perché alla fine, il contatto con le persone non è solo una parte della vita: è ciò che la rende davvero viva.",
    },
    {
      title: "Ascoltare la musica",
      description: `La musica è per me molto più che intrattenimento: è una sorta di yoga personale, un modo per ritrovare equilibrio e concentrazione. È la mia pausa dal mondo, l'unico momento in cui riesco a fermarmi e a rilassarmi davvero. Le note mi aiutano a mantenere la mente lucida, in modo da scacciare paure, timori e pensieri negativi che a volte appesantiscono la giornata. È una presenza costante che accompagna il mio percorso; e così, ogni brano diventa un rifugio, un luogo sicuro, dove posso ritrovare me stesso e ricaricare le energie.`,
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
