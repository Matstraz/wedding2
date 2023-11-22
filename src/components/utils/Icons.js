import { faChevronDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { css } from "aphrodite";
import styles from "./Animations"; */

const icons = {
  /*   projects: <FontAwesomeIcon icon={faDiagramProject} className="h-4" />,
  contactsInfinite: (
    <FontAwesomeIcon icon={faComments} className={`h-4 ${css(styles.tada2)}`} />
  ), */
  scroll: <FontAwesomeIcon icon={faChevronDown} className="h-4 text-black" />,
  heart: <FontAwesomeIcon icon={faHeart} className="h-3 text-slate-700" />,
};

export default icons;
