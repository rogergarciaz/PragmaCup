import { motion } from "framer-motion";
import { variants } from "../../helpers/Constants";
import "./Loader.css";

const durationAnimation = 2;

export default function Loader() {
  return (
    <motion.div
      variants={variants}
      initial="show"
      animate="hidden"
      className="lds-ripple"
      transition={{ duration: durationAnimation }}
    >
      <div></div>
      <div></div>
    </motion.div>
  );
}
