import { motion } from "framer-motion";
import { variants } from "../../helpers/Constants";
import GalleryMembers from "../../components/GalleryMembers/GalleryMembers";

const members = "Let's see the members!";
const durationAnimation = 2;
const delayAnimation = 0;

export default function Member() {
  return (
    <div className="text-center mt-5">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: durationAnimation }}
      >
        {members}
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{
          delay: delayAnimation * 3,
          duration: durationAnimation,
        }}
        className="input-group mb-3 mt-4"
      >
        <GalleryMembers />
      </motion.div>
    </div>
  );
}
