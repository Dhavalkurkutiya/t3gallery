const mockUrls = [
  "https://utfs.io/f/b7a41fed-001f-4a08-b176-15072762829a-dz58it.png",
  "https://utfs.io/f/d22e600d-c9f2-4538-a816-ab8d5cc561b6-rasooh.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
