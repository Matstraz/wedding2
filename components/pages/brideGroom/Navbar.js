import { useState } from "react";
import logo from "../../../assets/pics/logos/Logo definitivo.png";
import RsvpModal from "./RsvpModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white flex px-5 justify-between lg:justify-center items-center xl:gap-40 gap-28 border-b-2 stickyBar z-20 p-1 text-base">
      <a href="#home">
        <img src={logo} alt="logo" width={50} />
      </a>
      <ul className="hidden lg:flex justify-center text-center items-center gap-12 overflow-clip">
        <a href="#home">HOME</a>
        <a href="#newlyweds">GLI SPOSI</a>
        <a href="#witnesses">I TESTIMONI</a>
        <a href="#church">LA CHIESA</a>
        <a href="#castle">IL RICEVIMENTO</a>
        <a href="#timeline">PROGRAMMA</a>
      </ul>

      {/*     <a
        href="#RSVP"
        className="p-2 px-3 bg-teal-300 rounded-3xl text-base hover:text-lg text-slate-100 hidden lg:block"
        onClick={rsvp}
      >
        RSVP
      </a> */}
      <div className="flex justify-center items-center gap-4">
        <RsvpModal />
        {/* BURGER MENU */}
        <div className="lg:hidden z-10">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-6 text-black" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-3 right-3 w-max border border-black">
              <div className="p-5 pt-0 bg-myBlue-300 w-full">
                <div className="flex items-center justify-between border-b-2 border-slate-100">
                  <div className="flex justify-end w-full p-2">
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="rounded hover:bg-slate-200 font-bold px-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      X
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="font-bold p-2 italic ">
                    <li className="border-b-2 border-slate-200 hover:text-slate-600">
                      <a href="#home" onClick={() => setIsMenuOpen(false)}>
                        Home
                      </a>
                    </li>
                    <li className="border-b-2 border-slate-200 mt-2 hover:text-slate-600">
                      <a href="#newlyweds" onClick={() => setIsMenuOpen(false)}>
                        Gli sposi
                      </a>
                    </li>
                    <li className="border-b-2 border-slate-200 mt-2 hover:text-slate-600">
                      <a href="#witnesses" onClick={() => setIsMenuOpen(false)}>
                        I testimoni
                      </a>
                    </li>
                    <li className="border-b-2 border-slate-200 mt-2 hover:text-slate-600">
                      <a href="#church" onClick={() => setIsMenuOpen(false)}>
                        La chiesa
                      </a>
                    </li>
                    <li className="border-b-2 border-slate-200 mt-2 hover:text-slate-600">
                      <a href="#castle" onClick={() => setIsMenuOpen(false)}>
                        Il ricevimento
                      </a>
                    </li>
                    <li className="border-b-2 border-slate-200 mt-2 hover:text-slate-600">
                      <a href="#timeline" onClick={() => setIsMenuOpen(false)}>
                        Programma
                      </a>
                    </li>
                    {/* DA RIAGGIUNGERE NEL BURGER IN CASO NON PIACESSE LA SCRITTA RSVP */}
                    {/* <li className="border-b-2 border-slate-200 mt-2 hover:text-slate-600">
                      <RsvpModalSmall closeBurger={setIsMenuOpen} />
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
