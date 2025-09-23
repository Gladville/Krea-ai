import { FC } from "react";

const Gallery: FC = () => {
  return (
    <section className="mt-12 bg-black text-white py-6 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/gallery-logo.svg" alt="Gallery" className="w-6 h-6" />
        <h3 className="font-medium">Krea AI</h3>
      </div>
      <span className="text-sm">curated by Mobbin</span>
    </section>
  );
};

export default Gallery;
