import { useState } from "react";
import waLogo from "../../../assets/pics/waLogo.svg";
import { css } from "aphrodite";
import styles from "../../utils/Animations";
import icons from "../../utils/Icons";
/* DA RIAGGIUNGERE NEL BURGER IN CASO NON PIACESSE LA SCRITTA RSVP*/
export default function RsvpModalSmall({ closeBurger }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        RSVP
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 cursor-default px-2">
            <div className=" my-10 mx-auto max-w-3xl bg-myBlue-bgDark p-3">
              {/*content*/}
              <div className="rounded-lg max-w-3xl bg-myBlue-bgLight w-68 md:w-96 p-3 text-center relative italic">
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="rounded-full hover:bg-slate-300 font-bold absolute -top-1 -right-1 text-xl bg-myBlue-main px-2 py-0 "
                  onClick={() => {
                    setShowModal(false);
                    closeBurger(false);
                  }}
                >
                  X
                </button>
                <p className=" text-slate-700 font-bold">
                  Per confermare la vostra partecipazione contattateci ai nostri
                  recapiti telefonici
                </p>
                <div className="flex justify-center items-center gap-2">
                  <p className="border-b-2 border-black w-1/4 text-center">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <p className=" mt-4">{icons.heart}</p>

                  <p className="border-b-2 border-slate-700 w-1/4 text-center">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>

                <div className="pt-5 flex flex-row justify-center items-center gap-7">
                  <p className=" text-slate-700 font-bold">
                    Alessandra
                    <a
                      href="https://wa.me/3476076565"
                      className="flex flex-row justify-center items-center gap-1 underline"
                    >
                      3476076565
                      <img
                        src={waLogo}
                        width={20}
                        className={css(styles.tada)}
                        alt="Whatsapp logo"
                      />
                    </a>
                  </p>
                  <p className=" text-slate-700 font-bold">
                    Matteo
                    <a
                      href="https://wa.me/3423878435"
                      className="flex flex-row justify-center items-center gap-1 underline"
                    >
                      <p>3423878435</p>
                      <img
                        src={waLogo}
                        width={20}
                        className={css(styles.tada)}
                        alt="Whatsapp logo"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
