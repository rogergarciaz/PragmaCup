import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import ryuukImage from "../../assets/ryuuk.png";

const scaleHover = 1.4;
const scaleTap = 0.9;
const welcome = "Hi, Wellcome to ";
const initiative = "P-P";
const mainText =
  "Here you can find information about the differents members and cells from the Pragma-Proteccion Team.";
const signature = "Maded by RAGZ.";
const membersPath = "/members";


export default function Home() {
  const history = useHistory();

  return (
    <motion.div
      whileHover={{ scale: scaleHover }}
      whileTap={{ scale: scaleTap }}
      className="jumbotron jumbotron-fluid mt-5 text-center"
      onClick={() => history.push(membersPath)}
    >
      <div className="container">
        <h1 className="display-4">
          {welcome}
          <strong>{initiative}</strong>
        </h1>
        <p className="lead">
          {mainText}
          <br />
          {signature}
        </p>
        <img src={ryuukImage} alt="Ryuuk" />
      </div>
    </motion.div>
  );
}
