import { StyleSheet } from "aphrodite";
import { slideInDown, tada, pulse, fadeIn, fadeInUp } from "react-animations";

const styles = StyleSheet.create({
  infiniteBounce: {
    animationName: slideInDown,
    animationDuration: "2.5s",
    animationIterationCount: "infinite",
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
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "2.7s",
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "1.5s",
  },
});

export default styles;
