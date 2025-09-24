import { FC } from "react";

const Gallery: FC = () => {
  return (
    <section className="py-6 px-6 flex items-center justify-between bg-gray-100 text-black dark:bg-black dark:text-white">
      {/* Left: Gallery */}
      <h3 className="text-lg font-semibold">Gallery</h3>

      {/* Right: Legal + Pricing */}
      <div className="flex items-center gap-6">
        <span className="text-sm hover:underline cursor-pointer font-medium hover:rounded-lg hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 transition-colors py-1 px-2">Legal</span>
        <span className="text-sm hover:underline cursor-pointer font-medium hover:rounded-lg hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 transition-colors py-1 px-2">Pricing</span>
      </div>
    </section>
  );
};

export default Gallery;
