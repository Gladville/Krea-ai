import { FC } from "react";

const Gallery: FC = () => {
  return (
    <section className="py-6 px-6 flex items-center justify-between bg-gray-100 text-black dark:bg-black dark:text-white">
      {/* Left: Gallery */}
      <h3 className="text-lg font-semibold">Gallery</h3>

      {/* Right: Legal + Pricing */}
      <div className="flex items-center gap-6">
        <span className="text-sm hover:underline cursor-pointer">Legal</span>
        <span className="text-sm hover:underline cursor-pointer">Pricing</span>
      </div>
    </section>
  );
};

export default Gallery;
