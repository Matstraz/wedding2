import {
  faChevronDown,
  faChevronUp,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import waIcon from "../../assets/pics/navbar/waIcon.svg";
import { css } from "aphrodite";
import styles from "./Animations";

const icons = {
  /*   projects: <FontAwesomeIcon icon={faDiagramProject} className="h-4" />,
  contactsInfinite: (
    <FontAwesomeIcon icon={faComments} className={`h-4 ${css(styles.tada2)}`} />
  ), */
  scroll: (
    <FontAwesomeIcon
      icon={faChevronDown}
      className="h-4 text-myBlue-mainText"
    />
  ),
  goUp: (
    <FontAwesomeIcon
      icon={faChevronUp}
      className="h-5 text-myBlue-mainText hover:cursor-pointer"
    />
  ),
  heart: (
    <FontAwesomeIcon icon={faHeart} className="h-3 text-myBlue-mainText" />
  ),
  xmark: (
    <FontAwesomeIcon icon={faXmark} className="h-8 text-myBlue-mainText" />
  ),
  waIcon: (
    <img
      src={waIcon}
      width={20}
      className={css(styles.tada)}
      alt="Whatsapp icon"
    />
  ),
};

export default icons;
