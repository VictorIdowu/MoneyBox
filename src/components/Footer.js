import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="flex-col text-center mt-24 pb-10 gap-9 flex">
      <aside className="justify-center gap-6 flex text-2xl">
        <Icon icon="uil:facebook" className="cursor-pointer" />
        <Icon icon="basil:instagram-outline" className="cursor-pointer" />
        <Icon icon="tabler:brand-x" className="cursor-pointer" />
        <Icon icon="mdi:youtube" className="cursor-pointer" />
      </aside>
      <aside className="justify-center gap-5 md:gap-12 flex flex-col sm:flex-row">
        <button href="" className="footer-link">
          Conditions of Use
        </button>
        <button href="" className="footer-link">
          Privacy & Policy
        </button>
        <button href="" className="footer-link">
          Press Room
        </button>
      </aside>
      <p className="text-gray-500 text-lg font-bold">
        © 2021 MovieBox by Adriana Eka Prayudha
      </p>
    </footer>
  );
};

export default Footer;
