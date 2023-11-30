import drink from "../../../assets/pics/timeline/drink.png";
import cake from "../../../assets/pics/timeline/cake.png";
import music from "../../../assets/pics/timeline/music.png";
import rings from "../../../assets/pics/timeline/rings.png";
import dinner from "../../../assets/pics/timeline/dinner.png";

export default function DesktopVersion2() {
  return (
    <div className="flex justify-center items-center w-full pt-12 lg:hidden">
      <div className="grid grid-cols-11 my7Rows gap-3 w-3/4">
        {/* row 1 L'IMPOSTAZIONE DELL'ALTEZZA DI UN DIV INFLUENZA TUTTI GLI ALTRI, MTTRE PICS & ARROWS */}
        <img
          src={rings}
          alt="cerimony"
          className="h-28 col-span-2 row-span-2 flex justify-center items-center"
          id="1-2"
        />
        <div
          className="bg-gray-100 col-span-2 row-span-2 flex justify-center items-center"
          id="3-4"
        >
          arrow 1
        </div>
        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="6"></div>
        <div className="bg-gray-100" id="7"></div>
        <div className="bg-gray-100" id="8"></div>
        <div className="bg-gray-100" id="9"></div>
        <div className="bg-gray-100" id="10"></div>
        <div className="bg-gray-100" id="11"></div>
        {/* row 2 */}
        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="6"></div>
        <div className="bg-gray-100" id="7"></div>
        <img
          src={music}
          alt="music"
          className="h-28 col-span-2 row-span-2 flex justify-center items-center"
          id="8-9"
        />

        <div
          className="bg-gray-100 row-span-2 flex justify-center items-center"
          id="10-11"
        >
          arrow 2
        </div>
        <div className="bg-gray-100" id="11"></div>
        {/* row 3 */}
        <div className="bg-gray-100" id="1"></div>
        <div className="bg-gray-100" id="2"></div>
        <div className="bg-gray-100" id="3"></div>
        <img
          src={drink}
          alt="drink"
          className="h-28 col-span-2 row-span-2 flex justify-center items-center"
          id="4-5"
        />

        <div className="bg-gray-100" id="6"></div>
        <div
          className="bg-gray-100 row-span-3 flex justify-center items-center"
          id="7"
        >
          arrow 4
        </div>
        <div className="bg-gray-100" id="11"></div>
        {/* row 4 */}
        <div className="bg-gray-100" id="1"></div>
        <div
          className="bg-gray-100 col-span-2 flex justify-center items-center"
          id="2-3"
        >
          arrow 4
        </div>

        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="8"></div>
        <div className="bg-gray-100" id="9"></div>
        <img
          src={cake}
          alt="cake"
          className="h-28 col-span-2 row-span-2 flex justify-center items-center"
          id="10-11"
        />

        {/* row 5 */}
        <div className="bg-gray-100" id="1"></div>
        <img
          src={drink}
          alt="drink"
          className="h-28 col-span-2 row-span-2 flex justify-center items-center"
          id="2-3"
        />
        <div className="bg-gray-100" id="4"></div>
        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="6"></div>
        <div className=" bg-gray-100" id="8"></div>
        <div className=" bg-gray-100" id="9"></div>
        {/* row 6 */}
        <div className="bg-gray-100" id="1"></div>
        <div
          className="bg-gray-100 col-span-2 flex justify-center items-center"
          id="4-5"
        >
          arrow 5
        </div>
        <img
          src={dinner}
          alt="dinner"
          className="h-28 col-span-2 row-span-2 flex justify-center items-center"
          id="6-7"
        />
        <div className="bg-gray-100" id="8"></div>
        <div className="bg-gray-100" id="9"></div>
        <div className="bg-gray-100" id="10"></div>
        <div className="bg-gray-100" id="11"></div>
        {/* row 7 */}
        <div className="bg-gray-100" id="1"></div>
        <div className="bg-gray-100" id="2"></div>
        <div className="bg-gray-100" id="3"></div>
        <div className="bg-gray-100" id="4"></div>
        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="8"></div>
        <div className="bg-gray-100" id="9"></div>
        <div className="bg-gray-100" id="10"></div>
        <div className="bg-gray-100" id="11"></div>
      </div>
    </div>
  );
}
