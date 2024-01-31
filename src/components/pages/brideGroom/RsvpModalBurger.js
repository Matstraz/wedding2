import { useState } from "react";
import icons from "../../utils/Icons";

export default function RsvpModalBurger({ setIsMenuOpen }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <p
        onClick={() => {
          setShowModal(true);
        }}
      >
        RSVP
      </p>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 cursor-default px-2">
            <div className=" my-10 mx-auto max-w-md bg-myBlue-bgDark p-3">
              {/*content*/}
              <div className="rounded-lg max-w-3xl bg-myBlue-bgDark w-full p-4 text-center relative italic border-4 border-myBlue-bgLight border-double ">
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="font-bold absolute text-sm md:text-lg top-1 right-1 md:-top-8 md:-right-14 md:text-myBlue-bgLight border-slate-500 md:border-myBlue-bgLight border-2 rounded-full md:px-2 px-1 "
                  onClick={() => {
                    setShowModal(false);
                    setIsMenuOpen(false);
                  }}
                >
                  X
                </button>
                <p className="font-bold">
                  Per confermare la vostra partecipazione contattateci ai nostri
                  recapiti telefonici
                </p>
                <div className="flex justify-center items-center gap-2">
                  <p className="border-b-2 border-slate-700 w-1/4 text-center">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p className=" mt-4">{icons.heart}</p>
                  <p className="border-b-2 border-slate-700 w-1/4 text-center">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
                <div className="pt-5 flex flex-row justify-center items-center gap-7">
                  <div>
                    <p className="font-bold">Alessandra</p>
                    <a
                      href="https://wa.me/+393476076565"
                      className="flex flex-row justify-center items-center gap-1"
                    >
                      <p className="underline">3476076565</p>
                      {icons.waIcon}
                    </a>
                  </div>
                  <div>
                    <p className="font-bold">Matteo</p>
                    <a
                      href="https://wa.me/+393423878435"
                      className="flex flex-row justify-center items-center gap-1"
                    >
                      <p className="underline">3423878435</p>
                      {icons.waIcon}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
