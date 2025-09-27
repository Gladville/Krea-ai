"use client";

import { FC } from "react";

interface GalleryItem {
  id: number;
  image: string;
  username: string;
  alt: string;
  rowStart: number;
  rowEnd: number;
  colStart: number;
  colEnd: number;
}

const Gallery: FC = () => {
  const items: GalleryItem[] = [
    { id: 1, image: "/images/captivatingfragrantmarmot.jpg", username: "captivatingfragrantmarmot", alt: "Cosmic scene", rowStart: 1, rowEnd: 3, colStart: 1, colEnd: 2 },
    { id: 2, image: "/images/cityscape.jpg", username: "cityscape", alt: "Urban cityscape", rowStart: 1, rowEnd: 2, colStart: 2, colEnd: 3 },
    { id: 3, image: "/images/satellite.jpg", username: "satellite", alt: "Satellite in space", rowStart: 1, rowEnd: 2, colStart: 3, colEnd: 4 },
    { id: 4, image: "/images/dillzilla.jpg", username: "dillzilla", alt: "Gorilla boxing", rowStart: 1, rowEnd: 2, colStart: 4, colEnd: 5 },
    { id: 5, image: "/images/teeth.jpg", username: "teeth", alt: "Glowing teeth", rowStart: 2, rowEnd: 4, colStart: 1, colEnd: 2 },
    { id: 6, image: "/images/sithragnar.jpg", username: "sithragnar", alt: "Airship interior", rowStart: 2, rowEnd: 3, colStart: 2, colEnd: 3 },
    { id: 7, image: "/images/snowboard.jpg", username: "snowboard", alt: "Snowboarder on mountain", rowStart: 2, rowEnd: 3, colStart: 3, colEnd: 4 },
    { id: 8, image: "/images/unicorn.jpg", username: "unicorn", alt: "Unicorn in street", rowStart: 2, rowEnd: 3, colStart: 4, colEnd: 5 },
    { id: 9, image: "/images/uruncle sean.jpg", username: "uruncle sean", alt: "Person with phone", rowStart: 3, rowEnd: 4, colStart: 2, colEnd: 3 },
    { id: 10, image: "/images/buffalo.jpg", username: "buffalo", alt: "Buffalo in field", rowStart: 3, rowEnd: 4, colStart: 3, colEnd: 4 },
    { id: 11, image: "/images/newewnewstudio.jpg", username: "newewnewstudio", alt: "Empty room with box", rowStart: 3, rowEnd: 4, colStart: 4, colEnd: 5 },
    { id: 12, image: "/images/sushi.jpg", username: "sushi", alt: "Miniature sushi chefs", rowStart: 4, rowEnd: 5, colStart: 1, colEnd: 2 },
    { id: 13, image: "/images/burger.jpg", username: "burger", alt: "Floating burger", rowStart: 4, rowEnd: 5, colStart: 2, colEnd: 3 },
    { id: 14, image: "/images/angel.jpg", username: "angel", alt: "Angel with halo", rowStart: 4, rowEnd: 5, colStart: 3, colEnd: 4 },
    { id: 15, image: "/images/citynight.jpg", username: "citynight", alt: "Night cityscape", rowStart: 4, rowEnd: 5, colStart: 4, colEnd: 5 },
    { id: 16, image: "/images/accoutinos.jpg", username: "accoutinos", alt: "Colorful abstract art", rowStart: 5, rowEnd: 6, colStart: 1, colEnd: 2 },
    { id: 17, image: "/images/boston.jpg", username: "boston", alt: "Boston sign", rowStart: 5, rowEnd: 6, colStart: 2, colEnd: 3 },
    { id: 18, image: "/images/frog.jpg", username: "frog", alt: "Frog icon", rowStart: 5, rowEnd: 6, colStart: 3, colEnd: 4 },
  ];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
  <div className="columns-2 md:columns-3 lg:columns-5 gap-4">
    {items.map((item) => (
      <div
        key={item.id}
        className="mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md"
      >
        <img
          src={item.image}
          alt={item.alt}
          className="w-full object-cover"
        />
        <div className="p-2 text-sm text-gray-600 dark:text-gray-300">
          {item.username}
        </div>
      </div>
    ))}
  </div>
</section>
    );
};

export default Gallery;