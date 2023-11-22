import { StyleSheet } from "aphrodite";
import { fadeInRight, slideInDown, tada, pulse } from "react-animations";

const styles = StyleSheet.create({
  infiniteBounce: {
    animationName: slideInDown,
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "1s",
  },
  tada: {
    animationName: tada,
    animationDuration: "2.2s",
    animationIterationCount: "infinite",
  },
  pulse: {
    animationName: pulse,
    animationDuration: "1.2s",
    animationIterationCount: "infinite",
  },
});

export default styles;
