import { motion } from "framer-motion";
import { variants } from "../../helpers/Constants";
import GalleryCells from "../../components/GalleryCells/GalleryCells";
import { cells } from "../../helpers/cells";

const delayAnimation = 0;
const durationAnimation = 2;
const cellsText = "Let's see the Cells!";

export default function Cells() {
  return (
    <div className="text-center mt-5">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ durationAnimation }}
      >
        {cellsText}
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: delayAnimation * 3, durationAnimation }}
        className="input-group mb-3 mt-4"
      >
        <GalleryCells cells={cells} />
      </motion.div>
    </div>
  );
}
