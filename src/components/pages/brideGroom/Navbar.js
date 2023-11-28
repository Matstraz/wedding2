import { useState } from "react";
import logo from "../../../assets/pics/logos/Logo definitivo.png";
import RsvpModal from "./RsvpModal";
import icons from "../../utils/Icons";

export default function Navbar({
  refBrideGroom,
  refWhenWhere,
  refWitnesses,
  refTimeline,
  refHome,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*smooth scroll to pages */

  function navToHome() {
    refHome.current?.scrollIntoView({ behavior: "smooth" });
  }
  function navToBrideGroom() {
    refBrideGroom.current?.scrollIntoView({ behavior: "smooth" });
  }
  function navToWhenWhere() {
    refWhenWhere.current?.scrollIntoView({ behavior: "smooth" });
  }
  function navToWitnesses() {
    refWitnesses.current?.scrollIntoView({ behavior: "smooth" });
  }
  function navToTimeline() {
    refTimeline.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="bg-white flex px-5 justify-between lg:justify-center items-center xl:gap-40 gap-28 border-b-2 stickyBar z-20 p-1 text-base">
      <a href="#home">
        <img src={logo} alt="logo" width={50} />
      </a>
      <ul className="hidden lg:flex justify-center text-center items-center gap-12 overflow-clip italic hover:cursor-pointer">
        <p onClick={navToHome}>HOME</p>
        <p onClick={navToBrideGroom}>GLI SPOSI</p>
        <p onClick={navToWhenWhere}>DOVE/QUANDO</p>
        <p onClick={navToWitnesses}>I TESTIMONI</p>
        <p onClick={navToTimeline}>PROGRAMMA</p>
      </ul>
      <div className="flex justify-center items-center gap-4">
        <RsvpModal />
        {/* BURGER MENU */}
        <div className="lg:hidden z-10">
          <button
            aria-label="Close Menu"
            title="Close Menu"
            className={isMenuOpen ? "px-2 pl-3" : "hidden"}
            onClick={() => setIsMenuOpen(false)}
          >
            {icons.xmark}
          </button>
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className={!isMenuOpen ? "p-2" : "hidden"}
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
            <div className="absolute top-14 right-0 w-full border border-slate-200 text-center">
              <div className="p-5 bg-myBlue-300 w-full">
                <nav>
                  <ul className="font-bold italic">
                    <li className="border-b-2 border-t-2 border-slate-200 py-3 hover:cursor-pointer">
                      <p
                        onClick={() => {
                          setIsMenuOpen(false);
                          navToHome();
                        }}
                      >
                        Home
                      </p>
                    </li>
                    <li className="border-b-2 border-slate-200 py-3 hover:cursor-pointer">
                      <p
                        onClick={() => {
                          setIsMenuOpen(false);
                          navToBrideGroom();
                        }}
                      >
                        Gli sposi
                      </p>
                    </li>
                    <li className="border-b-2 border-slate-200 py-3 hover:cursor-pointer">
                      <p
                        onClick={() => {
                          setIsMenuOpen(false);
                          navToWhenWhere();
                        }}
                      >
                        Dove/Quando
                      </p>
                    </li>
                    <li className="border-b-2 border-slate-200 py-3 hover:cursor-pointer">
                      <p
                        onClick={() => {
                          setIsMenuOpen(false);
                          navToWitnesses();
                        }}
                      >
                        I testimoni
                      </p>
                    </li>

                    <li className="border-b-2 border-slate-200 py-3 hover:cursor-pointer">
                      <p
                        onClick={() => {
                          setIsMenuOpen(false);
                          navToTimeline();
                        }}
                      >
                        Programma
                      </p>
                    </li>
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
