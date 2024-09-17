import Gallery from "./Gallery";

export default function Home() {
  const imageUrls = [
    "/pictures/advtime.png",
    "/pictures/bears.png",
    "/pictures/diabeto.png",
    "/pictures/ohshi.png",
    "/pictures/patricklonglegs.png",
    "/pictures/regshow.png",
    "/pictures/steelers.png"
  ];

  return (
    <div>
      <h1>Edgars PhotoBomb</h1>
      <Gallery images={imageUrls} />
    </div>
  );
}
