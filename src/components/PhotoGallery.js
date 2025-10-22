import Image from "next/image";

export default function PhotoGallery() {
  const photos = [
    {
      src: "/img/img1.jpg",
      alt: "Fotografia paesaggistica di Vincenzo - Foto Personale",
    },
    {
      src: "/img/imgviaggio.jpg",
      alt: "Fotografia artistica di Vincenzo - Foto artistica paesaggio",
    },
    {
      src: "/img/img3.jpg",
      alt: "Fotografia di viaggio di Vincenzo - Foto Personale",
    },
    {
      src: "/img/img4.jpg",
      alt: "Fotografia naturalistica di Vincenzo - Foto estetica",
    },
    {
      src: "/img/img5.jpg",
      alt: "Fotografia street di Vincenzo - Foto con targhetta",
    },
    {
      src: "/img/img6.jpg",
      alt: "Fotografia artistica di Vincenzo - Foto artistica paesaggio",
    },
  ];

  return (
    <section id="LeMieFoto" aria-labelledby="foto-heading">
      <h2 id="foto-heading">Le mie Foto</h2>
      <article id="mypicture">
        {photos.map((photo, index) => (
          <Image
            key={index}
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={500}
            style={{ objectFit: "cover" }}
          />
        ))}
      </article>
    </section>
  );
}
