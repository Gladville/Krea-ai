import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className=" py-6 px-6 flex flex-col md:flex-row items-center justify-between bg-gray-800 dark:text-black dark:bg-gray-300 text-white gap-4">
      {/* Left: Logo + Krea AI */}
      <div className="flex items-center gap-3">
        <img src="/assets/krea-logo.svg" alt="Krea Logo" className="w-6 h-6 bg-white" />
        <h3 className="md:text-2xl text-lg font-bold">Krea AI</h3>
      </div>

      {/* Right: Curated by Mobbin */}
      <div className="flex items-center gap-2">
        <span className="text-md md:text-lg font-semibold">curated by</span>
        <img
          src="/assets/mobbin.png" // <-- replace with your Mobbin logo path
          alt="Mobbin Logo"
          className="w-6 h-6 object-contain"
        />
        <span className="text-lg md:text-2xl font-bold">Mobbin</span>
      </div>
    </footer>
  );
};

export default Footer;
