import React from "react";
import footerLogo from "../../assets/Logo.png";
import Banner from "../../assets/website/footer-pattern (1).jpg";
import { FaLinkedin } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer style={BannerImg} className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/95" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative z-10 py-12">
        <div
          data-aos="zoom-in"
          className="mx-auto flex max-w-5xl flex-col items-center gap-10 border-b border-white/10 pb-12 text-center"
        >
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
            <h1 className="mb-3 flex items-center justify-center gap-3 text-xl font-bold sm:text-3xl">
              <img src={footerLogo} alt="Shopsy logo" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-6 text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>

          <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
              <h1 className="mb-4 text-xl font-bold">Important Links</h1>
              <ul className="flex flex-col items-center gap-3">
                {FooterLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.link}
                      className="group inline-flex items-center gap-2 text-gray-200 transition-all duration-300 hover:translate-x-1 hover:text-primary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-all duration-300 group-hover:w-3" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
              <h1 className="mb-4 text-xl font-bold">LinkedIn</h1>
              <a
                href="https://www.linkedin.com/in/yagiz-karagoz-b18820358/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-gray-200 transition-all duration-300 hover:translate-x-1 hover:text-primary"
              >
                <FaLinkedin className="text-2xl transition-transform duration-300 group-hover:scale-110" />
                <span>Yağız Karagöz</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 py-6 text-center text-sm text-gray-300 sm:flex-row">
          <p>© 2026 Shopsy. All rights reserved.</p>
          <a
            href="https://www.linkedin.com/in/yagiz-karagoz-b18820358/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary transition-all duration-300 hover:text-secondary hover:underline hover:underline-offset-4"
          >
            By Yağız Karagöz
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
