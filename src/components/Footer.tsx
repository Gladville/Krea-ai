import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="py-6 px-6 text-gray-500 text-sm flex items-center justify-end">
      <a href="#" className="hover:underline mr-4">Legal</a>
      <a href="#" className="hover:underline">Pricing</a>
    </footer>
  );
};

export default Footer;
